import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronLeft, BookOpen, Clock, Menu, X, CheckCircle2, Lightbulb, AlertTriangle, ArrowLeft, Home, Layers } from 'lucide-react'
import { findCourse } from '../data/courses'
import { getModule, getModuleList } from '../data/moduleContent'
import { CourseIcon } from '../components/CourseIcons'
import CodePlayground from '../components/CodePlayground'
import ModuleFeedback from '../components/ModuleFeedback'
import './ModulePage.css'

const LEVELS = [
  { id: 'beginner', label: 'Beginner', color: 'var(--green)' },
  { id: 'intermediate', label: 'Intermediate', color: 'var(--blue)' },
  { id: 'advanced', label: 'Advanced', color: 'var(--orange)' },
]

export default function ModulePage() {
  const { slug, level, moduleIndex } = useParams()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [completed, setCompleted] = useState(new Set())

  const course = findCourse(slug)
  const idx = parseInt(moduleIndex, 10) - 1
  const modules = getModuleList(slug, level)
  const module = modules[idx] || null

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`lds_completed_${slug}_${level}`) || '[]')
      setCompleted(new Set(saved))
    } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, level, moduleIndex])

  const markComplete = () => {
    if (!module) return
    const next = new Set(completed)
    next.add(module.id)
    setCompleted(next)
    try {
      localStorage.setItem(`lds_completed_${slug}_${level}`, JSON.stringify([...next]))
    } catch {}
  }

  if (!course) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Course not found.</h2>
        <Link to="/courses" className="btn btn-primary btn-md" style={{ marginTop: 20 }}>← Back to courses</Link>
      </div>
    )
  }

  if (!module) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Module not found.</h2>
        <Link to={`/courses/${slug}`} className="btn btn-primary btn-md" style={{ marginTop: 20 }}>← Back to {course.title}</Link>
      </div>
    )
  }

  const isPrev = idx > 0
  const isNext = idx < modules.length - 1
  const levelInfo = LEVELS.find(l => l.id === level) || LEVELS[0]

  const navTo = (i) => navigate(`/courses/${slug}/${level}/${i + 1}`)

  return (
    <div className="module-page">
      {/* Top bar */}
      <div className="mp-topbar">
        <div className="mp-topbar-inner">
          <button
            className="mp-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open module list"
          >
            <Menu size={18} />
            <span>Modules</span>
          </button>

          <div className="mp-breadcrumb">
            <Link to="/courses"><Home size={13} /></Link>
            <ChevronRight size={12} />
            <Link to={`/courses/${slug}`}>
              <CourseIcon slug={slug} size={16} />
              {course.title}
            </Link>
            <ChevronRight size={12} />
            <span className="mp-bc-current" style={{ color: levelInfo.color }}>
              {levelInfo.label}
            </span>
            <ChevronRight size={12} />
            <span className="mp-bc-current">Module {idx + 1}</span>
          </div>

          <div className="mp-progress-mini">
            {completed.size} / {modules.length} done
          </div>
        </div>
      </div>

      <div className="mp-layout">
        {/* Sidebar */}
        <aside className={`mp-sidebar ${sidebarOpen ? 'is-open' : ''}`}>
          <div className="mp-sidebar-head">
            <div className="mp-sidebar-title">
              <div className="mp-sidebar-icon-wrap">
                <CourseIcon slug={slug} size={28} />
              </div>
              <div>
                <h3>{course.title}</h3>
                <span className="mp-level-pill" style={{ background: levelInfo.color }}>
                  <Layers size={10} /> {levelInfo.label}
                </span>
              </div>
            </div>
            <button
              className="mp-sidebar-close"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mp-level-tabs">
            {LEVELS.map(l => (
              <Link
                key={l.id}
                to={`/courses/${slug}/${l.id}/1`}
                className={`mp-level-tab ${l.id === level ? 'is-active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <nav className="mp-module-list">
            {modules.map((m, i) => (
              <button
                key={m.id}
                className={`mp-module-link ${i === idx ? 'is-current' : ''} ${completed.has(m.id) ? 'is-done' : ''}`}
                onClick={() => { navTo(i); setSidebarOpen(false) }}
              >
                <span className="mp-mod-num">
                  {completed.has(m.id) ? <CheckCircle2 size={14} /> : String(i + 1).padStart(2, '0')}
                </span>
                <span className="mp-mod-title">{m.title}</span>
                <span className="mp-mod-time">{m.duration}</span>
              </button>
            ))}
          </nav>

          <div className="mp-sidebar-foot">
            <Link to={`/courses/${slug}`} className="mp-back-link">
              <ArrowLeft size={13} /> Course overview
            </Link>
          </div>
        </aside>

        {sidebarOpen && <div className="mp-sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}

        {/* Main content */}
        <main className="mp-content">
          <article className="mp-article">
            <div className="mp-article-head">
              <span className="mp-eyebrow">
                <BookOpen size={12} />
                Module {idx + 1} of {modules.length}
              </span>
              <h1 className="mp-title">{module.title}</h1>
              <div className="mp-meta">
                <span><Clock size={12} /> {module.duration}</span>
                <span style={{ color: levelInfo.color }}>● {levelInfo.label} track</span>
              </div>
            </div>

            <div className="mp-body">
              {module.sections.map((section, i) => <Section key={i} section={section} />)}
            </div>

            <div className="mp-complete">
              {completed.has(module.id) ? (
                <div className="mp-done-badge">
                  <CheckCircle2 size={16} /> Module marked complete
                </div>
              ) : (
                <button className="btn btn-primary btn-md" onClick={markComplete}>
                  <CheckCircle2 size={15} /> Mark as complete
                </button>
              )}
            </div>

            <ModuleFeedback courseSlug={slug} moduleId={module.id} />

            <nav className="mp-pager">
              {isPrev ? (
                <button className="mp-pager-btn mp-pager-prev" onClick={() => navTo(idx - 1)}>
                  <ChevronLeft size={14} />
                  <div>
                    <span className="mp-pager-label">Previous</span>
                    <strong>{modules[idx - 1].title}</strong>
                  </div>
                </button>
              ) : <div />}

              {isNext ? (
                <button className="mp-pager-btn mp-pager-next" onClick={() => navTo(idx + 1)}>
                  <div>
                    <span className="mp-pager-label">Next</span>
                    <strong>{modules[idx + 1].title}</strong>
                  </div>
                  <ChevronRight size={14} />
                </button>
              ) : (
                <Link to={`/courses/${slug}`} className="mp-pager-btn mp-pager-next">
                  <div>
                    <span className="mp-pager-label">You're done</span>
                    <strong>Back to course</strong>
                  </div>
                  <ChevronRight size={14} />
                </Link>
              )}
            </nav>
          </article>
        </main>
      </div>
    </div>
  )
}

/* ─── Section renderer ─── */
function Section({ section }) {
  switch (section.type) {
    case 'heading':
      return <h2 className="mp-h">{section.content}</h2>
    case 'subheading':
      return <h3 className="mp-h3">{section.content}</h3>
    case 'paragraph':
      return <p className="mp-p">{section.content}</p>
    case 'list':
      return (
        <ul className="mp-list">
          {section.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
    case 'code':
      return (
        <pre className={`mp-code mp-code-${section.language || 'sql'}`}>
          <code>{section.content}</code>
        </pre>
      )
    case 'callout':
      return (
        <div className={`mp-callout mp-callout-${section.kind || 'tip'}`}>
          {section.kind === 'warning'
            ? <AlertTriangle size={16} />
            : <Lightbulb size={16} />}
          <div>
            <strong>{section.kind === 'warning' ? 'Heads up' : 'Tip'}</strong>
            <p>{section.content}</p>
          </div>
        </div>
      )
    case 'playground':
      return <CodePlayground language={section.language} starter={section.starter} dataset={section.dataset} />
    default:
      return null
  }
}
