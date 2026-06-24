import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, BookOpen, CheckCircle2, Lock, Database, Target, AlertCircle, Info, ChevronRight } from 'lucide-react'
import { findCourse } from '../data/courses'
import { getCourseHonesty } from '../data/courseHonesty'
import { getModuleList } from '../data/moduleContent'
import { CourseIcon } from '../components/CourseIcons'
import ModuleFeedback from '../components/ModuleFeedback'
import { trackEvent } from '../utils/analytics'
import './CourseDetail.css'

const LEVELS = [
  { id: 'beginner', label: 'Beginner', color: '#16A34A', desc: 'No prior experience needed' },
  { id: 'intermediate', label: 'Intermediate', color: '#2563EB', desc: 'You know the basics' },
  { id: 'advanced', label: 'Advanced', color: '#EA580C', desc: 'Ready for production-grade skills' },
]

export default function CourseDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [activeLevel, setActiveLevel] = useState('beginner')
  const course = findCourse(slug)

  if (!course) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Course not found.</h2>
        <Link to="/courses" className="btn btn-primary btn-md" style={{ marginTop: 24 }}>
          ← All courses
        </Link>
      </div>
    )
  }

  const isComingSoon = course.status === 'coming-soon'
  const trackData = course.tracks[activeLevel]
  const honesty = getCourseHonesty(course.slug)
  const startCourse = () => {
    const modules = getModuleList(course.slug, activeLevel)
    if (!modules.length) return

    // Resume where the learner left off: jump to the first module they
    // haven't completed yet, or module 1 if they haven't started (or have
    // finished everything).
    let completed = new Set()
    try {
      completed = new Set(JSON.parse(localStorage.getItem(`lds_completed_${course.slug}_${activeLevel}`) || '[]'))
    } catch {}
    const firstIncompleteIndex = modules.findIndex(m => !completed.has(m.id))
    const targetIndex = firstIncompleteIndex === -1 ? 0 : firstIncompleteIndex

    trackEvent('start_course', {
      course_slug: course.slug,
      course_title: course.title,
      level: activeLevel,
      first_module_id: modules[targetIndex].id,
      resumed: targetIndex > 0,
    })

    navigate(`/courses/${course.slug}/${activeLevel}/${targetIndex + 1}`)
  }

  return (
    <div className="course-detail">
      <section className="course-hero">
        <div className="container">
          <Link to="/courses" className="course-back">
            <ArrowLeft size={15} /> All courses
          </Link>

          <div className="course-hero-grid">
            <div>
              <div className="course-icon-large" style={{ background: course.bgColor }}>
                <CourseIcon slug={course.slug} size={42} />
              </div>
              <h1 className="h-display" style={{ color: 'white', marginBottom: 16 }}>
                {course.title}
              </h1>
              <p className="course-tagline-large">{course.tagline}</p>

              {!isComingSoon && (
                <div className="course-quick-stats">
                  <div className="qs-item">
                    <BookOpen size={14} />
                    <strong>{course.totalModules}</strong> modules
                  </div>
                  <div className="qs-item">
                    <Clock size={14} />
                    ~{course.tracks.beginner.hours + course.tracks.intermediate.hours + course.tracks.advanced.hours}h total
                  </div>
                  <div className="qs-item">
                    <Database size={14} />
                    {course.datasets?.length || 0} global datasets
                  </div>
                  {honesty?.pricing && (
                    <div className="qs-item qs-pricing">
                      ✓ {honesty.pricing}
                    </div>
                  )}
                </div>
              )}
            </div>

            {!isComingSoon && (
              <div className="course-quick-card">
                <h3>What you'll learn</h3>
                <ul>
                  {course.learningOutcomes?.map(o => (
                    <li key={o}><CheckCircle2 size={14} /> {o}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {isComingSoon ? (
        <section className="section">
          <div className="container coming-soon-block">
            <Lock size={48} color="#94A3B8" strokeWidth={1.5} />
            <h2 className="h1" style={{ marginTop: 24 }}>Coming {course.launchEta}</h2>
            <p className="body-lg" style={{ maxWidth: 540, margin: '16px auto 0' }}>{course.description}</p>
            <Link to="/courses" className="btn btn-secondary btn-md" style={{ marginTop: 32 }}>
              See available courses
            </Link>
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="container">
            <div className="level-switcher">
              <div className="level-switcher-label">
                <Target size={14} />
                <span>Pick your level</span>
              </div>
              <div className="level-tabs">
                {LEVELS.map(l => (
                  <button
                    key={l.id}
                    className={`level-tab ${activeLevel === l.id ? 'is-active' : ''}`}
                    onClick={() => {
                      setActiveLevel(l.id)
                      trackEvent('course_level_selected', {
                        course_slug: course.slug,
                        level: l.id,
                      })
                    }}
                    style={activeLevel === l.id ? { borderColor: l.color, color: l.color } : {}}
                  >
                    <div className="lt-head">
                      <span className="lt-dot" style={{ background: l.color }} />
                      <strong>{l.label}</strong>
                    </div>
                    <span className="lt-desc">{l.desc}</span>
                    <div className="lt-meta">
                      {course.tracks[l.id].modules} modules · {course.tracks[l.id].hours}h
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="track-detail">
              <div className="track-detail-head">
                <div>
                  <h2 className="h2">{LEVELS.find(l => l.id === activeLevel).label} track</h2>
                  <p className="body-md" style={{ marginTop: 8 }}>{trackData.label}</p>
                </div>
                <button className="btn btn-primary btn-lg" onClick={startCourse}>
                  Start this track →
                </button>
              </div>

              {honesty?.prerequisites?.[activeLevel] && (
                <div className="prereq-box">
                  <Info size={14} />
                  <div>
                    <strong>Before you start:</strong>
                    <span>{honesty.prerequisites[activeLevel]}</span>
                  </div>
                </div>
              )}

              {honesty?.timeBreakdown && (
                <div className="time-honesty">
                  <span className="time-honesty-h">Real time per module:</span>
                  <span><Clock size={11} /> Video {honesty.timeBreakdown.perModule.video}</span>
                  <span><Target size={11} /> Exercise {honesty.timeBreakdown.perModule.exercise}</span>
                  <span className="time-total">→ {honesty.timeBreakdown.perModule.total}</span>
                </div>
              )}

              <div className="modules-list">
                {getModuleList(course.slug, activeLevel).map((m, i) => {
                  const inProd = m.id.startsWith('prod-')
                  return inProd ? (
                    <div key={m.id} className="module-row module-row-soon">
                      <div className="mod-num">{String(i + 1).padStart(2, '0')}</div>
                      <div className="mod-info">
                        <h4>{m.title}</h4>
                        <p>In production — content being written</p>
                      </div>
                      <div className="mod-meta">
                        <Lock size={12} /> Soon
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={m.id}
                      to={`/courses/${course.slug}/${activeLevel}/${i + 1}`}
                      className="module-row module-row-live"
                    >
                      <div className="mod-num">{String(i + 1).padStart(2, '0')}</div>
                      <div className="mod-info">
                        <h4>{m.title}</h4>
                        <p>Lesson · interactive examples · check yourself</p>
                      </div>
                      <div className="mod-meta">
                        <Clock size={12} /> {m.duration}
                        <ChevronRight size={14} style={{ marginLeft: 4, color: 'var(--blue)' }} />
                      </div>
                    </Link>
                  )
                })}
              </div>

              <div className="course-datasets">
                <h3 className="h3" style={{ marginBottom: 12 }}>
                  <Database size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                  Datasets you'll work with
                </h3>
                <div className="dataset-tags">
                  {course.datasets?.map(d => (
                    <span key={d} className="dataset-tag">{d}</span>
                  ))}
                </div>
              </div>

              <ModuleFeedback courseSlug={course.slug} moduleId={`${activeLevel}-overview`} />

              {honesty?.notForYouIf?.length > 0 && (
                <div className="not-for-you">
                  <h3 className="h3" style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <AlertCircle size={16} /> This course isn't for you if…
                  </h3>
                  <p className="body-sm" style={{ marginBottom: 14, color: 'var(--s5)' }}>
                    Honest filters so you don't waste your time.
                  </p>
                  <ul className="not-for-list">
                    {honesty.notForYouIf.map((line, i) => <li key={i}>{line}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
