/* ──────────────────────────────────────────────────────────────
   MENTOR SYSTEM — Phase 1 (storage-backed, no dummy data)
   - Mentors register through /mentors page
   - Every mentor offers group sessions: multiple learners can
     book the same slot, everyone gets the SAME Meet link.
   - All data persisted in localStorage.
   Replace with Supabase / Firestore in Phase 2.
   ────────────────────────────────────────────────────────────── */

const MENTORS_KEY = 'lds_mentors_v1'
const SESSIONS_KEY = 'lds_sessions_v1'   // bookings keyed by sessionId
const BOOKINGS_KEY = 'lds_bookings_v1'   // per-user list of bookings

const readJSON = (key, fallback) => {
  try {
    const v = localStorage.getItem(key)
    return v ? JSON.parse(v) : fallback
  } catch { return fallback }
}
const writeJSON = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch {}
}

// ── Mentors ───────────────────────────────────────────────────
export const getMentors = () => readJSON(MENTORS_KEY, [])
export const findMentor = (id) => getMentors().find(m => m.id === id)

export const registerMentor = (data) => {
  const mentors = getMentors()
  const newMentor = {
    id: 'm_' + Date.now(),
    createdAt: new Date().toISOString(),
    sessionsHosted: 0,
    ...data,
  }
  mentors.push(newMentor)
  writeJSON(MENTORS_KEY, mentors)
  return newMentor
}

export const updateMentor = (id, changes) => {
  const mentors = getMentors()
  const idx = mentors.findIndex(m => m.id === id)
  if (idx === -1) return null
  mentors[idx] = { ...mentors[idx], ...changes }
  writeJSON(MENTORS_KEY, mentors)
  return mentors[idx]
}

// ── Sessions (mentor-defined slots that learners book into) ─
// Each session: { id, mentorId, slot, meetLink, capacity, attendees: [{userId, name, joinedAt}], status }

export const getMentorSessions = (mentorId) => {
  const all = readJSON(SESSIONS_KEY, {})
  return Object.values(all).filter(s => s.mentorId === mentorId)
}

export const getSession = (sessionId) => {
  const all = readJSON(SESSIONS_KEY, {})
  return all[sessionId]
}

const generateMeetCode = () => {
  const part = () => Math.random().toString(36).substring(2, 6)
  return `${part().substring(0, 3)}-${part()}-${part().substring(0, 3)}`
}

export const createSession = (mentorId, slot, capacity = 10) => {
  const all = readJSON(SESSIONS_KEY, {})
  const id = 's_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
  const newSession = {
    id,
    mentorId,
    slot,
    capacity,
    meetLink: `https://meet.google.com/${generateMeetCode()}`,
    attendees: [],
    status: 'open',
    createdAt: new Date().toISOString(),
  }
  all[id] = newSession
  writeJSON(SESSIONS_KEY, all)
  return newSession
}

export const joinSession = (sessionId, user) => {
  const all = readJSON(SESSIONS_KEY, {})
  const session = all[sessionId]
  if (!session) throw new Error('Session not found')
  if (session.attendees.length >= session.capacity) throw new Error('Session full')
  if (session.attendees.find(a => a.userId === user.id)) return session // already joined
  session.attendees.push({
    userId: user.id,
    name: user.name,
    joinedAt: new Date().toISOString(),
  })
  all[sessionId] = session
  writeJSON(SESSIONS_KEY, all)

  // Track booking on user side
  const userBookings = readJSON(BOOKINGS_KEY, {})
  if (!userBookings[user.id]) userBookings[user.id] = []
  if (!userBookings[user.id].includes(sessionId)) {
    userBookings[user.id].push(sessionId)
  }
  writeJSON(BOOKINGS_KEY, userBookings)
  return session
}

export const getUserBookings = (userId) => {
  const userBookings = readJSON(BOOKINGS_KEY, {})
  const sessionIds = userBookings[userId] || []
  const all = readJSON(SESSIONS_KEY, {})
  return sessionIds.map(id => all[id]).filter(Boolean)
}
