import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, MapPin, Video, Search, Globe, ArrowUpRight, UserPlus, X, Loader2, CheckCircle2, Users } from 'lucide-react'
import { getMentors, registerMentor } from '../data/mentors'
import { useAuth } from '../context/AuthContext'
import './Mentors.css'

const SKILL_OPTIONS = ['SQL', 'Python', 'Excel', 'Power BI', 'Tableau', 'Statistics', 'Machine Learning', 'Data Engineering', 'GenAI', 'Career Advice']

export default function Mentors() {
  const [query, setQuery] = useState('')
  const [skill, setSkill] = useState('all')
  const [mentors, setMentors] = useState([])
  const [showRegister, setShowRegister] = useState(false)
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    setMentors(getMentors())
  }, [])

  const refreshMentors = () => setMentors(getMentors())

  const ALL_SKILLS = [...new Set(mentors.flatMap(m => m.expertise || []))]

  const filtered = mentors.filter(m => {
    const matchesQ = (m.name + (m.role || '') + (m.bio || '')).toLowerCase().includes(query.toLowerCase())
    const matchesS = skill === 'all' || (m.expertise || []).includes(skill)
    return matchesQ && matchesS
  })

  return (
    <div className="mentors-page">
      <section className="mentors-hero">
        <div className="container">
          <div className="section-label" style={{ color: 'var(--cyan)' }}>
            <span>● Mentor sessions · Group 1:many</span>
          </div>
          <h1 className="h-display" style={{ color: 'white', marginBottom: 16 }}>
            Learn from people who've <em>done it.</em>
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 640 }}>
            Alumni and working professionals host group sessions on Google Meet. Multiple learners can join the same slot — everyone uses the same Meet link.
          </p>

          <div className="mentors-cta-row">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                if (!user) { navigate('/login'); return }
                setShowRegister(true)
              }}
            >
              <UserPlus size={16} /> Register as a mentor
            </button>
            <span className="mentors-help">
              Already a mentor? Sign in to manage your sessions.
            </span>
          </div>

          {mentors.length > 0 && (
            <div className="mentor-filters">
              <div className="search-input">
                <Search size={16} />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search by name or topic"
                />
              </div>
              <div className="skill-tabs">
                <button
                  className={`skill-tab ${skill === 'all' ? 'is-active' : ''}`}
                  onClick={() => setSkill('all')}
                >
                  All skills
                </button>
                {ALL_SKILLS.map(s => (
                  <button
                    key={s}
                    className={`skill-tab ${skill === s ? 'is-active' : ''}`}
                    onClick={() => setSkill(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {mentors.length === 0 ? (
            <div className="empty-mentors-state">
              <Users size={48} color="#CBD5E1" strokeWidth={1.5} />
              <h2 className="h2" style={{ marginTop: 20, marginBottom: 12 }}>
                No mentors yet.
              </h2>
              <p className="body-md" style={{ maxWidth: 460, margin: '0 auto 24px' }}>
                We're building the mentor community. Be one of the first to register and help new learners get started.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  if (!user) { navigate('/login'); return }
                  setShowRegister(true)
                }}
              >
                <UserPlus size={16} /> Become the first mentor
              </button>
            </div>
          ) : (
            <>
              <div className="mentors-stat-bar">
                <strong>{filtered.length}</strong> {filtered.length === 1 ? 'mentor' : 'mentors'} available
              </div>
              <div className="mentors-list">
                {filtered.map(m => (
                  <Link to={`/mentors/${m.id}`} key={m.id} className="mentor-row">
                    <div className="mr-avatar-col">
                      <div className="mr-avatar">{m.name?.[0] || '?'}</div>
                    </div>
                    <div className="mr-info">
                      <div className="mr-head">
                        <h3 className="mr-name">{m.name}</h3>
                      </div>
                      <div className="mr-meta">
                        <span>{m.role}{m.company ? ` · ${m.company}` : ''}</span>
                        {m.location && (
                          <>
                            <span className="mr-dot">•</span>
                            <span><MapPin size={11} /> {m.location}</span>
                          </>
                        )}
                      </div>
                      {m.bio && <p className="mr-bio">{m.bio}</p>}
                      <div className="mr-tags">
                        {(m.expertise || []).map(e => <span key={e} className="exp-pill">{e}</span>)}
                      </div>
                    </div>
                    <div className="mr-action">
                      <span className="mr-stats">
                        <Video size={13} /> {m.sessionsHosted || 0} sessions hosted
                      </span>
                      <span className="btn btn-primary btn-sm">
                        View sessions
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="empty-mentors">
                  <p>No mentors match your filters. Try a broader search.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <AnimatePresence>
        {showRegister && (
          <RegisterModal
            onClose={() => setShowRegister(false)}
            onRegistered={() => { refreshMentors(); setShowRegister(false) }}
            user={user}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Register Modal ─── */
function RegisterModal({ onClose, onRegistered, user }) {
  const [form, setForm] = useState({
    name: user?.name || '',
    role: '',
    company: '',
    location: '',
    bio: '',
    expertise: [],
    yearsExperience: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleSkill = (s) => {
    setForm(f => ({
      ...f,
      expertise: f.expertise.includes(s)
        ? f.expertise.filter(x => x !== s)
        : [...f.expertise, s]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.role || form.expertise.length === 0) {
      setError('Please fill name, role, and pick at least one skill.')
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 600))
    registerMentor({
      ...form,
      userId: user?.id,
      yearsExperience: Number(form.yearsExperience) || 0,
    })
    setLoading(false)
    onRegistered()
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
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <h2 className="h2" style={{ marginBottom: 8 }}>Become a mentor.</h2>
        <p className="body-sm" style={{ marginBottom: 24 }}>
          Fill in basic details. You'll be able to create group sessions after registering.
        </p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-row">
            <div>
              <label className="input-label">Full name *</label>
              <input
                className="input"
                value={form.name}
                onChange={e => setForm(f => ({...f, name: e.target.value}))}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="input-label">Role *</label>
              <input
                className="input"
                value={form.role}
                onChange={e => setForm(f => ({...f, role: e.target.value}))}
                placeholder="Senior Data Analyst"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label className="input-label">Company</label>
              <input
                className="input"
                value={form.company}
                onChange={e => setForm(f => ({...f, company: e.target.value}))}
                placeholder="Where you work"
              />
            </div>
            <div>
              <label className="input-label">Location</label>
              <input
                className="input"
                value={form.location}
                onChange={e => setForm(f => ({...f, location: e.target.value}))}
                placeholder="City, Country"
              />
            </div>
          </div>

          <div>
            <label className="input-label">Years of experience</label>
            <input
              className="input"
              type="number"
              min="0"
              value={form.yearsExperience}
              onChange={e => setForm(f => ({...f, yearsExperience: e.target.value}))}
              placeholder="e.g. 5"
              style={{ maxWidth: 200 }}
            />
          </div>

          <div>
            <label className="input-label">Short bio</label>
            <textarea
              className="input"
              rows="3"
              value={form.bio}
              onChange={e => setForm(f => ({...f, bio: e.target.value}))}
              placeholder="What you can help learners with — keep it brief."
              style={{ resize: 'vertical', fontFamily: 'inherit' }}
            />
          </div>

          <div>
            <label className="input-label">Expertise * (pick all that apply)</label>
            <div className="skill-picker">
              {SKILL_OPTIONS.map(s => (
                <button
                  key={s}
                  type="button"
                  className={`skill-pick ${form.expertise.includes(s) ? 'is-selected' : ''}`}
                  onClick={() => toggleSkill(s)}
                >
                  {form.expertise.includes(s) && <CheckCircle2 size={12} />}
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary btn-md" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary btn-md" disabled={loading}>
              {loading ? <><Loader2 size={14} className="spin" /> Submitting…</> : 'Register as mentor'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}
