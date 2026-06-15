import React, { useState } from 'react'
import { BookOpen, Lock, Bell, Check } from 'lucide-react'
import { CourseIcon } from './CourseIcons'
import { addNotifyMe } from '../data/notifyMe'
import { trackEvent } from '../utils/analytics'

export default function NotifyMeCard({ course }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!email.includes('@') || email.length < 5) {
      setError('Add a valid email')
      return
    }
    addNotifyMe(course.slug, email)
    trackEvent('notify_me_submitted', {
      course_slug: course.slug,
      course_title: course.title,
    })
    setSubmitted(true)
  }

  return (
    <div className="course-card course-card-soon">
      <div className="course-top" style={{ background: course.bgColor }}>
        <div className="course-icon-wrap" style={{ opacity: 0.7 }}>
          <CourseIcon slug={course.slug} size={44} />
        </div>
        <span className="badge badge-soon">
          <Lock size={10} /> Coming soon
        </span>
      </div>
      <div className="course-body">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-tagline">{course.tagline}</p>
        <div className="course-meta">
          <span><BookOpen size={13} /> {course.totalModules} modules planned</span>
        </div>

        {submitted ? (
          <div className="notify-success">
            <Check size={14} />
            <span>We'll email you at <strong>{email}</strong> when this launches.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="notify-form">
            <label className="notify-label">
              <Bell size={11} /> Notify me when it launches
            </label>
            <div className="notify-row">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="notify-input"
                required
              />
              <button type="submit" className="notify-btn">
                Notify
              </button>
            </div>
            {error && <span className="notify-error">{error}</span>}
          </form>
        )}

        <div className="course-foot">
          <span className="course-eta">⏳ {course.launchEta}</span>
        </div>
      </div>
    </div>
  )
}
