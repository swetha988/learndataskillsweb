import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, BookOpen, ArrowUpRight, Lock, Layers } from 'lucide-react'
import { LIVE_COURSES, UPCOMING_COURSES } from '../data/courses'
import { CourseIcon } from './CourseIcons'
import NotifyMeCard from './NotifyMeCard'
import './CoursesGrid.css'

export default function CoursesGrid() {
  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <div className="section-label">
          <span>● Course catalogue</span>
          <span>{LIVE_COURSES.length} courses live · {UPCOMING_COURSES.length} coming</span>
        </div>

        <h2 className="h1">
          One course, three <em>levels.</em>
        </h2>
        <p className="body-lg" style={{ maxWidth: 680, marginTop: 16, marginBottom: 48 }}>
          Every course gives you three tracks — beginner, intermediate, and advanced. Pick where you are. Move at your pace.
        </p>

        <div className="courses-grid">
          {LIVE_COURSES.map(c => (
            <Link key={c.id} to={`/courses/${c.slug}`} className="course-card">
              <div className="course-top" style={{ background: c.bgColor }}>
                <div className="course-icon-wrap">
                  <CourseIcon slug={c.slug} size={44} />
                </div>
                <span className="badge badge-cyan">
                  <Layers size={10} /> 3 levels
                </span>
              </div>

              <div className="course-body">
                <h3 className="course-title">{c.title}</h3>
                <p className="course-tagline">{c.tagline}</p>

                <div className="track-strip">
                  <div className="track-pill track-beginner">
                    <span className="dot" />
                    <span>Beginner · {c.tracks.beginner.modules}</span>
                  </div>
                  <div className="track-pill track-intermediate">
                    <span className="dot" />
                    <span>Intermediate · {c.tracks.intermediate.modules}</span>
                  </div>
                  <div className="track-pill track-advanced">
                    <span className="dot" />
                    <span>Advanced · {c.tracks.advanced.modules}</span>
                  </div>
                </div>

                <div className="course-meta">
                  <span><BookOpen size={13} /> {c.totalModules} modules</span>
                  <span><Clock size={13} /> ~{(c.tracks.beginner.hours + c.tracks.intermediate.hours + c.tracks.advanced.hours)}h total</span>
                </div>

                <div className="course-foot">
                  <span className="course-cta" style={{ color: c.color }}>
                    Open course
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="section-label" style={{ marginTop: 96 }}>
          <span>● Coming soon</span>
        </div>
        <h2 className="h1">
          More on the way. <em>Soon.</em>
        </h2>
        <p className="body-lg" style={{ maxWidth: 600, marginTop: 16, marginBottom: 48 }}>
          Machine Learning, Data Engineering, and Generative AI — coming throughout 2026.
        </p>

        <div className="courses-grid courses-grid-soon">
          {UPCOMING_COURSES.map(c => (
            <NotifyMeCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
