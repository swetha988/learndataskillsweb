/* ──────────────────────────────────────────────────────────────
   NOTIFY-ME LIST — coming-soon course interest capture
   Stored locally for now. Phase 2: send to backend on real auth.
   ────────────────────────────────────────────────────────────── */

const KEY = 'lds_notify_me_v1'

const read = () => {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}
const write = (list) => {
  try { localStorage.setItem(KEY, JSON.stringify(list)) } catch {}
}

export const getNotifyList = () => read()

export const addNotifyMe = (courseSlug, email) => {
  const list = read()
  if (list.find(x => x.courseSlug === courseSlug && x.email === email)) return false
  list.push({ courseSlug, email, addedAt: new Date().toISOString() })
  write(list)
  return true
}

export const hasNotifyMe = (courseSlug, email) => {
  return read().some(x => x.courseSlug === courseSlug && x.email === email)
}
