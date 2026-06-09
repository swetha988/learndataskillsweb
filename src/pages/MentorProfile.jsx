import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, MapPin, Video, Globe, ArrowLeft, Calendar, Clock, CheckCircle2, Copy, ExternalLink, Plus, Users, X, Loader2 } from 'lucide-react'
import { findMentor, getMentorSessions, createSession, joinSession } from '../data/mentors'
import { useAuth } from '../context/AuthContext'
import './MentorProfile.css'

export default function MentorProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const mentor = findMentor(id)
  const [sessions, setSessions] = useState([])
  const [showCreate, setShowCreate] = useState(false)
  const [joinedSessionId, setJoinedSessionId] = useState(null)
  const [copied, setCopied] = useState('')

  useEffect(() => {
    if (mentor) setSessions(getMentorSessions(mentor.id))
  }, [mentor])

  const isOwner = user && mentor && mentor.userId === user.id

  if (!mentor) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Mentor not found.</h2>
        <Link to="/mentors" className="btn btn-primary btn-md" style={{ marginTop: 24 }}>
          ← Back to mentors
        </Link>
      </div>
    )
  }

  const handleJoin = (session) => {
    if (!user) { navigate('/login'); return }
    try {
      joinSession(session.id, user)
      setSessions(getMentorSessions(mentor.id))
      setJoinedSessionId(session.id)
    } catch (e) {
      alert(e.message)
    }
  }

  const handleCreated = () => {
    setSessions(getMentorSessions(mentor.id))
    setShowCreate(false)
  }

  const copyLink = (link, id) => {
    navigator.clipboard.writeText(link)
    setCopied(id)
    setTimeout(() => setCopied(''), 2000)
  }

  const userHasJoined = (session) =>
    user && session.attendees.find(a => a.userId === user.id)

  return (
    <div className="mentor-profile-page">
      <div className="profile-hero">
        <div className="container">
          <Link to="/mentors" className="profile-back">
            <ArrowLeft size={16} /> All mentors
          </Link>

          <div className="profile-head">
            <div className="profile-avatar">{mentor.name?.[0] || '?'}</div>
            <div className="profile-meta">
              <h1 className="h1" style={{ color: 'white', marginBottom: 6 }}>{mentor.name}</h1>
              <p className="profile-role">{mentor.role}{mentor.company ? ` at ${mentor.company}` : ''}</p>
              <div className="profile-tags">
                <span className="ptag"><Video size={12} /> {mentor.sessionsHosted || 0} sessions hosted</span>
                {mentor.location && <span className="ptag"><MapPin size={12} /> {mentor.location}</span>}
                {mentor.yearsExperience > 0 && <span className="ptag">{mentor.yearsExperience}+ years experience</span>}
              </div>
            </div>
            {isOwner && (
              <button className="btn btn-on-dark btn-md" onClick={() => setShowCreate(true)}>
                <Plus size={14} /> Create session
              </button>
            )}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container profile-grid">
          <div>
            {mentor.bio && (
              <section className="profile-section">
                <h2 className="h2" style={{ marginBottom: 16 }}>About {mentor.name.split(' ')[0]}</h2>
                <p className="body-lg">{mentor.bio}</p>
              </section>
            )}

            {mentor.expertise?.length > 0 && (
              <section className="profile-section">
                <h2 className="h2" style={{ marginBottom: 16 }}>Expertise</h2>
                <div className="exp-list">
                  {mentor.expertise.map(e => (
                    <span key={e} className="exp-pill exp-large">{e}</span>
                  ))}
                </div>
              </section>
            )}

            <section className="profile-section">
              <div className="sessions-head">
                <h2 className="h2">Upcoming group sessions</h2>
                {isOwner && (
                  <button className="btn btn-primary btn-sm" onClick={() => setShowCreate(true)}>
                    <Plus size={14} /> New session
                  </button>
                )}
              </div>
              <p className="body-md" style={{ marginBottom: 24 }}>
                Group sessions on Google Meet. Multiple learners can join the same slot — everyone uses the same Meet link.
              </p>

              {sessions.length === 0 ? (
                <div className="sessions-empty">
                  <Calendar size={36} color="#CBD5E1" strokeWidth={1.5} />
                  <p style={{ marginTop: 12 }}>No upcoming sessions yet.</p>
                  {isOwner && (
                    <button className="btn btn-secondary btn-md" onClick={() => setShowCreate(true)} style={{ marginTop: 16 }}>
                      <Plus size={14} /> Create your first session
                    </button>
                  )}
                </div>
              ) : (
                <div className="session-list">
                  {sessions.map(s => {
                    const joined = userHasJoined(s)
                    const full = s.attendees.length >= s.capacity
                    const viewerTZ = Intl.DateTimeFormat().resolvedOptions().timeZone
                    return (
                      <div key={s.id} className={`session-card ${joined ? 'is-joined' : ''}`}>
                        <div className="sc-head">
                          <div>
                            <div className="sc-slot">
                              <Clock size={13} /> {s.slot}
                            </div>
                            <div className="sc-tz-hint">
                              <Globe size={11} /> Your timezone: {viewerTZ.replace(/_/g, ' ')} — check the slot matches your local time
                            </div>
                            <div className="sc-capacity">
                              <Users size={12} /> {s.attendees.length} / {s.capacity} joined
                            </div>
                          </div>
                          {full && !joined && <span className="badge badge-soon">Full</span>}
                          {joined && <span className="badge" style={{ background: 'var(--green-bg)', color: 'var(--green)' }}><CheckCircle2 size={10} /> You're in</span>}
                        </div>

                        {(joined || isOwner) ? (
                          <div className="meet-link-box">
                            <div className="meet-link-label">Google Meet link (shared by all)</div>
                            <div className="meet-link-row">
                              <code>{s.meetLink}</code>
                              <button onClick={() => copyLink(s.meetLink, s.id)} className="copy-btn" title="Copy">
                                {copied === s.id ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                              </button>
                            </div>
                            <a
                              href={s.meetLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary btn-sm"
                              style={{ width: '100%', marginTop: 12 }}
                            >
                              Open in Google Meet
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        ) : (
                          <button
                            className="btn btn-primary btn-md"
                            style={{ width: '100%' }}
                            disabled={full}
                            onClick={() => handleJoin(s)}
                          >
                            {full ? 'Session full' : !user ? 'Sign in to join' : 'Join this session'}
                          </button>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </section>
          </div>

          <aside className="booking-card">
            <div className="booking-head">
              <span className="badge badge-cyan">Free for learners</span>
              <h3 className="h3" style={{ marginTop: 12 }}>How group sessions work</h3>
            </div>

            <ol className="how-it-works-list">
              <li>
                <strong>Mentor creates a session</strong>
                <span>Picks a date, time, and group size cap.</span>
              </li>
              <li>
                <strong>Learners join the slot</strong>
                <span>Multiple people can join the same session.</span>
              </li>
              <li>
                <strong>Everyone uses the same Meet link</strong>
                <span>Auto-generated, shared with all attendees.</span>
              </li>
              <li>
                <strong>Show up and learn together</strong>
                <span>Q&A, code reviews, career advice — all in one room.</span>
              </li>
            </ol>

            <div className="booking-hint" style={{ marginTop: 20 }}>
              Sessions are mentor-hosted. Cancellations and reschedules are at the mentor's discretion.
            </div>
          </aside>
        </div>
      </section>

      <AnimatePresence>
        {showCreate && (
          <CreateSessionModal
            mentorId={mentor.id}
            onClose={() => setShowCreate(false)}
            onCreated={handleCreated}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Create Session Modal ─── */
function CreateSessionModal({ mentorId, onClose, onCreated }) {
  const [slot, setSlot] = useState('')
  const [capacity, setCapacity] = useState(10)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!slot.trim()) { setError('Add a date/time for the session.'); return }
    setLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 500))
    createSession(mentorId, slot, Number(capacity) || 10)
    setLoading(false)
    onCreated()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-backdrop"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="modal"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        <h2 className="h2" style={{ marginBottom: 8 }}>Create a group session.</h2>
        <p className="body-sm" style={{ marginBottom: 24 }}>
          A Google Meet link will be generated automatically. All attendees will see the same link.
        </p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="register-form">
          <div>
            <label className="input-label">When? *</label>
            <input
              className="input"
              value={slot}
              onChange={e => setSlot(e.target.value)}
              placeholder="e.g. Sat 15 Mar · 7-8 PM IST"
              required
            />
            <span className="input-hint">Always include your timezone (IST, EST, GMT, PST) so global learners can convert.</span>
          </div>
          <div>
            <label className="input-label">Max attendees</label>
            <input
              className="input"
              type="number"
              min="2"
              max="50"
              value={capacity}
              onChange={e => setCapacity(e.target.value)}
              style={{ maxWidth: 140 }}
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary btn-md" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary btn-md" disabled={loading}>
              {loading ? <><Loader2 size={14} className="spin" /> Creating…</> : 'Create session'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}
