import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThumbsUp, ThumbsDown, Mail, Calendar, MessageCircle, Download, Bell, RefreshCw, AlertCircle } from 'lucide-react'
import { LIVE_COURSES, UPCOMING_COURSES } from '../data/courses'
import './Admin.css'

const FEEDBACK_KEY = 'lds_module_feedback_v1'
const NOTIFY_KEY = 'lds_notify_me_v1'

export default function Admin() {
  const [feedback, setFeedback] = useState([])
  const [notify, setNotify] = useState([])
  const [tab, setTab] = useState('overview')

  const refresh = () => {
    try {
      setFeedback(JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '[]'))
    } catch { setFeedback([]) }
    try {
      setNotify(JSON.parse(localStorage.getItem(NOTIFY_KEY) || '[]'))
    } catch { setNotify([]) }
  }

  useEffect(() => { refresh() }, [])

  // Aggregations
  const totalFeedback = feedback.length
  const ups = feedback.filter(f => f.rating === 'up').length
  const downs = feedback.filter(f => f.rating === 'down').length
  const withComments = feedback.filter(f => f.comment && f.comment.trim().length > 0)

  const totalSignups = notify.length
  const signupsByCourse = notify.reduce((acc, n) => {
    acc[n.courseSlug] = (acc[n.courseSlug] || 0) + 1
    return acc
  }, {})

  // Group feedback by module
  const feedbackByModule = feedback.reduce((acc, f) => {
    const key = `${f.courseSlug} / ${f.moduleId}`
    if (!acc[key]) acc[key] = { course: f.courseSlug, module: f.moduleId, up: 0, down: 0, comments: [] }
    acc[key][f.rating] = (acc[key][f.rating] || 0) + 1
    if (f.comment && f.comment.trim()) acc[key].comments.push({ comment: f.comment, rating: f.rating, at: f.at })
    return acc
  }, {})
  const modulesSorted = Object.values(feedbackByModule).sort((a, b) => (b.up + b.down) - (a.up + a.down))

  const downloadCSV = (rows, filename) => {
    if (!rows.length) return alert('Nothing to download yet.')
    const headers = Object.keys(rows[0])
    const csv = [
      headers.join(','),
      ...rows.map(r => headers.map(h => `"${String(r[h] ?? '').replace(/"/g, '""')}"`).join(',')),
    ].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }

  const courseTitle = (slug) => {
    return [...LIVE_COURSES, ...UPCOMING_COURSES].find(c => c.slug === slug)?.title || slug
  }

  return (
    <div className="admin-page">
      <header className="admin-hero">
        <div className="container">
          <div className="admin-hero-row">
            <div>
              <span className="admin-eyebrow">● Creator dashboard</span>
              <h1 className="admin-title">What learners are telling us.</h1>
              <p className="admin-sub">Real-time view of feedback and signups across the platform. Data refreshes from this browser's storage. Phase 2 will sync to a central database visible from any device.</p>
            </div>
            <button className="btn btn-secondary btn-md" onClick={refresh}>
              <RefreshCw size={14} /> Refresh
            </button>
          </div>
        </div>
      </header>

      <div className="container admin-content">
        {/* Quick stats */}
        <div className="admin-stats">
          <div className="admin-stat">
            <MessageCircle size={20} color="var(--blue)" />
            <strong>{totalFeedback}</strong>
            <span>feedback entries</span>
          </div>
          <div className="admin-stat">
            <ThumbsUp size={20} color="var(--green)" />
            <strong>{ups}</strong>
            <span>thumbs up</span>
          </div>
          <div className="admin-stat">
            <ThumbsDown size={20} color="var(--orange)" />
            <strong>{downs}</strong>
            <span>not really clear</span>
          </div>
          <div className="admin-stat">
            <Mail size={20} color="var(--cyan)" />
            <strong>{totalSignups}</strong>
            <span>email signups</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="admin-tabs">
          <button
            className={`admin-tab ${tab === 'overview' ? 'is-active' : ''}`}
            onClick={() => setTab('overview')}
          >
            Overview
          </button>
          <button
            className={`admin-tab ${tab === 'feedback' ? 'is-active' : ''}`}
            onClick={() => setTab('feedback')}
          >
            Feedback ({totalFeedback})
          </button>
          <button
            className={`admin-tab ${tab === 'signups' ? 'is-active' : ''}`}
            onClick={() => setTab('signups')}
          >
            Email signups ({totalSignups})
          </button>
        </div>

        {/* OVERVIEW */}
        {tab === 'overview' && (
          <>
            {totalFeedback === 0 && totalSignups === 0 && (
              <div className="admin-empty">
                <AlertCircle size={36} color="#CBD5E1" strokeWidth={1.5} />
                <h3>No data yet</h3>
                <p>As learners use the platform — completing modules, submitting feedback, signing up for upcoming courses — it will appear here in real time.</p>
              </div>
            )}

            {totalFeedback > 0 && (
              <section className="admin-section">
                <h2 className="admin-h2">Modules ranked by feedback volume</h2>
                <div className="admin-list">
                  {modulesSorted.slice(0, 10).map(m => {
                    const total = m.up + m.down
                    const upPct = total > 0 ? Math.round((m.up / total) * 100) : 0
                    return (
                      <div key={`${m.course}/${m.module}`} className="admin-row">
                        <div className="admin-row-main">
                          <div>
                            <strong>{m.module}</strong>
                            <span className="admin-row-sub">{courseTitle(m.course)}</span>
                          </div>
                          <div className="admin-bar">
                            <div className="admin-bar-fill" style={{ width: `${upPct}%` }} />
                          </div>
                        </div>
                        <div className="admin-row-stats">
                          <span className="up-pill"><ThumbsUp size={11} /> {m.up}</span>
                          <span className="down-pill"><ThumbsDown size={11} /> {m.down}</span>
                          <span className="pct">{upPct}% positive</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            {totalSignups > 0 && (
              <section className="admin-section">
                <h2 className="admin-h2">Email signups by upcoming course</h2>
                <div className="admin-signup-grid">
                  {UPCOMING_COURSES.map(c => (
                    <div key={c.id} className="admin-signup-card">
                      <strong>{c.title}</strong>
                      <span className="signup-eta">⏳ {c.launchEta}</span>
                      <div className="signup-count">
                        <Bell size={14} color="var(--cyan)" />
                        <span className="signup-num">{signupsByCourse[c.slug] || 0}</span>
                        <span className="signup-label">interested</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* FEEDBACK TAB */}
        {tab === 'feedback' && (
          <section className="admin-section">
            <div className="admin-section-head">
              <h2 className="admin-h2">All feedback entries</h2>
              <button className="btn btn-secondary btn-sm" onClick={() => downloadCSV(feedback, 'feedback.csv')}>
                <Download size={13} /> Download CSV
              </button>
            </div>

            {totalFeedback === 0 ? (
              <p className="body-md">No feedback submitted yet.</p>
            ) : (
              <>
                {withComments.length > 0 && (
                  <>
                    <h3 className="admin-h3">With written comments ({withComments.length})</h3>
                    <div className="admin-list">
                      {withComments.slice().reverse().map((f, i) => (
                        <div key={i} className="admin-comment">
                          <div className="admin-comment-head">
                            <span className={`comment-pill ${f.rating === 'up' ? 'is-up' : 'is-down'}`}>
                              {f.rating === 'up' ? <ThumbsUp size={11} /> : <ThumbsDown size={11} />}
                              {f.rating === 'up' ? 'Clear' : 'Confusing'}
                            </span>
                            <span className="admin-comment-meta">
                              {courseTitle(f.courseSlug)} → {f.moduleId} · {new Date(f.at).toLocaleString()}
                            </span>
                          </div>
                          <p className="admin-comment-text">{f.comment}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <h3 className="admin-h3" style={{ marginTop: 32 }}>Quick ratings (no comment)</h3>
                <div className="admin-list">
                  {feedback.filter(f => !f.comment || !f.comment.trim()).slice().reverse().map((f, i) => (
                    <div key={i} className="admin-row admin-row-compact">
                      <span className={`comment-pill ${f.rating === 'up' ? 'is-up' : 'is-down'}`}>
                        {f.rating === 'up' ? <ThumbsUp size={11} /> : <ThumbsDown size={11} />}
                      </span>
                      <div className="admin-row-main">
                        <strong>{courseTitle(f.courseSlug)}</strong>
                        <span className="admin-row-sub">{f.moduleId}</span>
                      </div>
                      <span className="admin-comment-meta">{new Date(f.at).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        )}

        {/* SIGNUPS TAB */}
        {tab === 'signups' && (
          <section className="admin-section">
            <div className="admin-section-head">
              <h2 className="admin-h2">Email signups for upcoming courses</h2>
              <button className="btn btn-secondary btn-sm" onClick={() => downloadCSV(notify, 'email_signups.csv')}>
                <Download size={13} /> Download CSV
              </button>
            </div>

            {totalSignups === 0 ? (
              <p className="body-md">No email signups yet. Once learners enter their email on a "Coming soon" course card, they will appear here.</p>
            ) : (
              <>
                <div className="admin-signup-grid">
                  {UPCOMING_COURSES.map(c => (
                    <div key={c.id} className="admin-signup-card">
                      <strong>{c.title}</strong>
                      <span className="signup-eta">⏳ {c.launchEta}</span>
                      <div className="signup-count">
                        <Bell size={14} color="var(--cyan)" />
                        <span className="signup-num">{signupsByCourse[c.slug] || 0}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="admin-h3" style={{ marginTop: 32 }}>All emails</h3>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Course interested in</th>
                      <th>Signed up</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notify.slice().reverse().map((n, i) => (
                      <tr key={i}>
                        <td><Mail size={12} /> {n.email}</td>
                        <td>{courseTitle(n.courseSlug)}</td>
                        <td>{new Date(n.addedAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </section>
        )}

        <div className="admin-note">
          <strong>For creators (Sravan & Swetha):</strong> All data on this page is currently stored in each visitor's browser (localStorage). In Phase 2 we'll connect this to a central database so feedback from any learner's device shows up here. Until then, you'll only see your own test entries.
        </div>
      </div>
    </div>
  )
}
