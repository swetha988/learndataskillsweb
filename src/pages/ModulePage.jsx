import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronLeft, BookOpen, Clock, Menu, X, CheckCircle2, Lightbulb, AlertTriangle, ArrowLeft, Home, Layers, FlaskConical } from 'lucide-react'
import { findCourse } from '../data/courses'
import { getModuleList } from '../data/moduleContent'
import { CourseIcon } from '../components/CourseIcons'
import CodePlayground from '../components/CodePlayground'
import ModuleFeedback from '../components/ModuleFeedback'
import ModuleQuiz from '../components/ModuleQuiz'
import { trackEvent } from '../utils/analytics'
import './ModulePage.css'

const LEVELS = [
  { id: 'beginner', label: 'Beginner', color: 'var(--green)' },
  { id: 'intermediate', label: 'Intermediate', color: 'var(--blue)' },
  { id: 'advanced', label: 'Advanced', color: 'var(--orange)' },
]

export default function ModulePage() {
  const { slug, level, moduleIndex } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [openTopicModules, setOpenTopicModules] = useState({})
  const [completed, setCompleted] = useState(new Set())
  const [activeAnchorId, setActiveAnchorId] = useState(null)

  const course = findCourse(slug)
  const idx = parseInt(moduleIndex, 10) - 1
  const modules = getModuleList(slug, level)
  const module = modules[idx] || null
  const topicLinks = useMemo(() => getTopicLinksFromModule(module), [module])
  const moduleTopicMap = useMemo(() => {
    return Object.fromEntries(modules.map((item) => [item.id, getTopicLinksFromModule(item)]))
  }, [modules])

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`lds_completed_${slug}_${level}`) || '[]')
      setCompleted(new Set(saved))
    } catch {}
    if (module) {
      setOpenTopicModules(prev => ({ ...prev, [module.id]: true }))
      trackEvent('module_opened', {
        course_slug: slug,
        level,
        module_id: module.id,
        module_title: module.title,
        module_index: idx + 1,
      })
      if (idx === 0) {
        trackEvent('course_started', {
          course_slug: slug,
          level,
          first_module_id: module.id,
        })
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, level, moduleIndex, module, idx])

  useEffect(() => {
    if (!location.hash) return
    const anchorId = location.hash.replace('#', '')
    const target = document.getElementById(anchorId)
    if (!target) return

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.hash, moduleIndex, slug, level])

  // Track which section heading is currently in view, so the sidebar
  // can colour the one the reader is actually on right now.
  useEffect(() => {
    if (!module || topicLinks.length === 0) {
      setActiveAnchorId(null)
      return
    }

    setActiveAnchorId(topicLinks[0].anchorId)

    let observer
    const timer = setTimeout(() => {
      const headingEls = topicLinks
        .map(t => document.getElementById(t.anchorId))
        .filter(Boolean)
      if (headingEls.length === 0) return

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter(e => e.isIntersecting)
          if (visible.length === 0) return
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          )
          setActiveAnchorId(topmost.target.id)
        },
        { rootMargin: '-96px 0px -65% 0px', threshold: 0 }
      )
      headingEls.forEach(el => observer.observe(el))
    }, 0)

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
    }
  }, [module, topicLinks])

  const markComplete = () => {
    if (!module) return
    const next = new Set(completed)
    next.add(module.id)
    setCompleted(next)
    trackEvent('module_completed', {
      course_slug: slug,
      level,
      module_id: module.id,
      module_title: module.title,
      module_index: idx + 1,
    })
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

  const scrollToTopic = (anchorId) => {
    const target = document.getElementById(anchorId)
    if (!target) return

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSidebarOpen(false)
  }

  const toggleModuleTopics = (moduleId) => {
    setOpenTopicModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }))
  }

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

          <div className="mp-sidebar-scroll">
            <nav className="mp-module-list">
              {modules.map((m, i) => {
                const moduleTopics = moduleTopicMap[m.id] || []
                const isOpen = !!openTopicModules[m.id]

                return (
                  <div key={m.id} className="mp-module-group">
                    <div className="mp-module-row-wrap">
                      <button
                        className={`mp-module-link ${i === idx ? 'is-current' : ''} ${completed.has(m.id) ? 'is-done' : ''}`}
                        onClick={() => { navTo(i); setSidebarOpen(false) }}
                      >
                        <span className="mp-mod-num">
                          {completed.has(m.id)
                            ? <CheckCircle2 size={14} />
                            : m.isProject
                              ? <FlaskConical size={14} title="Hands-on project" />
                              : String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="mp-mod-title">{m.title}</span>
                        <span className="mp-mod-time">{m.duration}</span>
                      </button>

                      {moduleTopics.length > 0 && (
                        <button
                          type="button"
                          className="mp-module-topic-toggle"
                          onClick={() => toggleModuleTopics(m.id)}
                          aria-expanded={isOpen}
                          aria-label={`Toggle topics for module ${i + 1}`}
                        >
                          <ChevronRight className={`mp-topic-chevron ${isOpen ? 'is-open' : ''}`} size={15} />
                        </button>
                      )}
                    </div>

                    {isOpen && moduleTopics.length > 0 && (
                      <div className="mp-topic-list">
                        {moduleTopics.map((topic) => (
                          <button
                            key={topic.anchorId}
                            type="button"
                            className={`mp-topic-link ${m.id === module.id && topic.anchorId === activeAnchorId ? 'is-active' : ''}`}
                            onClick={() => {
                              if (m.id === module.id) {
                                scrollToTopic(topic.anchorId)
                                return
                              }

                              navigate(`/courses/${slug}/${level}/${i + 1}#${topic.anchorId}`)
                              setSidebarOpen(false)
                            }}
                          >
                            {topic.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
          </div>

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
              <h1 className="mp-title">
                {module.isProject && <FlaskConical size={22} className="mp-lab-icon-title" title="Hands-on project" />}
                {module.title}
              </h1>
              <div className="mp-meta">
                <span><Clock size={12} /> {module.duration}</span>
                <span style={{ color: levelInfo.color }}>● {levelInfo.label} track</span>
              </div>
            </div>

            <div className="mp-body">
              {module.sections.map((section, i) => {
                const isTopic = section.type === 'heading' || section.type === 'subheading'
                const anchorId = isTopic
                  ? `topic-${module.id}-${i}-${section.content
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '') || 'section'}`
                  : null

                return <Section key={i} section={section} anchorId={anchorId} />
              })}
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

            <ModuleQuiz courseSlug={slug} module={module} />

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
function Section({ section, anchorId }) {
  switch (section.type) {
    case 'heading':
      return <h2 className="mp-h" id={anchorId} tabIndex={-1}>{section.content}</h2>
    case 'subheading':
      return <h3 className="mp-h3" id={anchorId} tabIndex={-1}>{section.content}</h3>
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

function getTopicLinksFromModule(module) {
  if (!module) return []

  return module.sections.flatMap((section, sectionIndex) => {
    if (section.type !== 'heading' && section.type !== 'subheading') return []

    const sluggedTitle = section.content
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    return [{
      anchorId: `topic-${module.id}-${sectionIndex}-${sluggedTitle || 'section'}`,
      title: section.content,
    }]
  })
}
