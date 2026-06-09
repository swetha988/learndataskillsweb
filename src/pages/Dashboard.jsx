import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { BookOpen, Calendar, Trophy, TrendingUp, ArrowUpRight, Video, UserPlus, MessageCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { LIVE_COURSES } from '../data/courses'
import { getMentors, getUserBookings } from '../data/mentors'
import OnboardingIntake, { getOnboarding } from '../components/OnboardingIntake'
import './Dashboard.css'

export default function Dashboard() {
  const { user } = useAuth()
  const [mentors, setMentors] = useState([])
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    if (user) {
      setMentors(getMentors())
      setBookings(getUserBookings(user.id))
    }
  }, [user])

  if (!user) return <Navigate to="/login" replace />

  const myMentor = mentors.find(m => m.userId === user.id)
  const onboarding = getOnboarding()

  // Recommended starting course based on goal
  const goalToCourse = {
    analyst: 'sql',
    scientist: 'python',
    engineer: 'sql',
    curious: 'excel',
  }
  const recommendedSlug = onboarding?.goal ? goalToCourse[onboarding.goal] : null
  const recommendedCourse = recommendedSlug ? LIVE_COURSES.find(c => c.slug === recommendedSlug) : null

  return (
    <div className="dashboard">
      <OnboardingIntake />
      <section className="dash-hero">
        <div className="container">
          <div className="dash-greeting">
            <div className="dash-avatar">{user.name?.[0]}</div>
            <div>
              <p className="dash-eyebrow">Welcome back</p>
              <h1 className="h1" style={{ color: 'white' }}>{user.name}.</h1>
            </div>
          </div>

          <div className="dash-stats">
            <div className="dash-stat">
              <BookOpen size={16} />
              <strong>0 / {LIVE_COURSES.reduce((s, c) => s + c.totalModules, 0)}</strong>
              <span>modules done</span>
            </div>
            <div className="dash-stat">
              <Trophy size={16} />
              <strong>0</strong>
              <span>tracks completed</span>
            </div>
            <div className="dash-stat">
              <Calendar size={16} />
              <strong>{bookings.length}</strong>
              <span>sessions joined</span>
            </div>
            <div className="dash-stat">
              <TrendingUp size={16} />
              <strong>0 of 14</strong>
              <span>last 14 days active</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container dash-grid">
          <div>
            {recommendedCourse && (
              <Link to={`/courses/${recommendedCourse.slug}`} className="dash-recommend">
                <div className="dash-rec-eyebrow">
                  <span>★</span> Based on your goals
                </div>
                <h3 className="dash-rec-title">
                  Start with {recommendedCourse.title}
                </h3>
                <p className="dash-rec-sub">
                  {recommendedCourse.tagline} — recommended for your path.
                </p>
                <span className="dash-rec-cta">
                  Open course <ArrowUpRight size={14} />
                </span>
              </Link>
            )}

            <h2 className="h2" style={{ marginBottom: 20 }}>Pick up a course</h2>
            <div className="dash-course-grid">
              {LIVE_COURSES.slice(0, 4).map(c => (
                <Link to={`/courses/${c.slug}`} key={c.id} className="dash-course-card">
                  <div className="dash-course-icon" style={{ background: c.bgColor }}>
                    <span style={{ fontWeight: 700, color: c.color }}>{c.title[0]}</span>
                  </div>
                  <div className="dash-course-info">
                    <h3>{c.title}</h3>
                    <p>{c.tagline}</p>
                  </div>
                  <ArrowUpRight size={16} color="#94A3B8" />
                </Link>
              ))}
            </div>

            {bookings.length > 0 && (
              <>
                <h2 className="h2" style={{ marginTop: 40, marginBottom: 20 }}>Your sessions</h2>
                <div className="dash-bookings">
                  {bookings.map(s => {
                    const m = mentors.find(mm => mm.id === s.mentorId)
                    return (
                      <Link to={`/mentors/${s.mentorId}`} key={s.id} className="dash-booking">
                        <Video size={16} color="var(--blue)" />
                        <div>
                          <strong>{m?.name || 'Mentor'} · {s.slot}</strong>
                          <span>{s.attendees.length} attendees · Same Meet link for all</span>
                        </div>
                        <ArrowUpRight size={14} color="#94A3B8" />
                      </Link>
                    )
                  })}
                </div>
              </>
            )}
          </div>

          <aside>
            <h2 className="h2" style={{ marginBottom: 20 }}>Mentors</h2>
            {!myMentor && (
              <Link to="/mentors" className="dash-cta-card">
                <UserPlus size={24} color="white" />
                <strong>Become a mentor</strong>
                <span>Help new learners and grow your network.</span>
              </Link>
            )}
            {mentors.length > 0 ? (
              <div className="dash-mentor-list" style={{ marginTop: myMentor ? 0 : 12 }}>
                {mentors.slice(0, 3).map(m => (
                  <Link to={`/mentors/${m.id}`} key={m.id} className="dash-mentor-row">
                    <div className="dash-mentor-avatar">{m.name?.[0]}</div>
                    <div className="dash-mentor-info">
                      <strong>{m.name}</strong>
                      <span>{m.role}{m.company ? ` · ${m.company}` : ''}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="body-sm" style={{ marginTop: 12 }}>
                No mentors yet. Be the first to register!
              </p>
            )}
            <Link to="/mentors" className="btn btn-secondary btn-sm" style={{ width: '100%', marginTop: 14 }}>
              Browse all mentors
            </Link>

            <div className="dash-community">
              <div className="dash-community-icon">
                <MessageCircle size={20} color="white" />
              </div>
              <strong>Talk to other learners</strong>
              <span>Join the LearnDataSkills community on Discord. Ask questions, share progress, find study partners.</span>
              <a
                href="https://discord.gg/learndataskills"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ marginTop: 12, width: '100%' }}
              >
                Open Discord ↗
              </a>
              <span className="dash-community-note">Link goes live once we cross 50 learners.</span>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
