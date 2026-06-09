import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Video, ArrowUpRight, UserPlus, Users } from 'lucide-react'
import { getMentors } from '../data/mentors'
import './MentorShowcase.css'

export default function MentorShowcase() {
  const [mentors, setMentors] = useState([])

  useEffect(() => {
    setMentors(getMentors())
  }, [])

  const featured = mentors.slice(0, 4)

  return (
    <section className="mentor-showcase section section-bg">
      <div className="container">
        <div className="section-label">
          <span>● Learn together</span>
          {mentors.length > 0 && <Link to="/mentors" className="see-all">See all mentors →</Link>}
        </div>
        <h2 className="h1">
          Group sessions on <em>Google Meet.</em>
        </h2>
        <p className="body-lg" style={{ maxWidth: 640, marginTop: 16, marginBottom: 24 }}>
          Mentors host live group sessions. Multiple learners join the same slot — everyone uses the same Meet link. Ask questions, watch a real workflow, learn together.
        </p>
        <p className="mentor-honesty-note">
          <strong>How this works:</strong> group sessions only (no 1:1s). Mentors host ~1–4 sessions per month. Slots are first-come, first-served — capacity shown on each session.
        </p>

        {featured.length === 0 ? (
          <div className="mentor-empty-state">
            <div className="mes-icon"><Users size={40} color="white" /></div>
            <h3 className="h3" style={{ marginBottom: 8 }}>Be the first mentor.</h3>
            <p className="body-md" style={{ maxWidth: 460, marginBottom: 20 }}>
              We're opening up the mentor community. If you've finished a course or work in data, you can register and host sessions for new learners.
            </p>
            <Link to="/mentors" className="btn btn-primary btn-md">
              <UserPlus size={14} /> Register as a mentor
            </Link>
          </div>
        ) : (
          <div className="mentor-grid">
            {featured.map(m => (
              <Link to={`/mentors/${m.id}`} key={m.id} className="mentor-card">
                <div className="mentor-head">
                  <div className="mentor-avatar">{m.name?.[0] || '?'}</div>
                  <div className="mentor-info">
                    <h3 className="mentor-name">{m.name}</h3>
                    <span className="mentor-role">{m.role}{m.company ? ` · ${m.company}` : ''}</span>
                  </div>
                </div>
                <div className="mentor-stats">
                  <div className="stat">
                    <Video size={12} /> {m.sessionsHosted || 0} hosted
                  </div>
                  {m.location && <div className="stat">📍 {m.location}</div>}
                </div>
                <div className="mentor-expertise">
                  {(m.expertise || []).slice(0, 3).map(e => <span key={e} className="exp-pill">{e}</span>)}
                </div>
                <div className="mentor-foot">
                  <span className="mentor-cta">View sessions <ArrowUpRight size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
