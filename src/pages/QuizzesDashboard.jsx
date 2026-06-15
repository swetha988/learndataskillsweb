import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, PlayCircle } from 'lucide-react'
import { LIVE_COURSES } from '../data/courses'
import { getCourseQuiz } from '../data/courseQuizzes'
import { CourseIcon } from '../components/CourseIcons'
import './QuizzesDashboard.css'

export default function QuizzesDashboard() {
  return (
    <div>
      <section className="section-dark" style={{ padding: '64px 0 32px' }}>
        <div className="container">
          <div className="section-label"><span>● Final Assessments</span></div>
          <h1 className="h-display" style={{ color: 'white' }}>Prove your skills,<br/><em>track by track.</em></h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 16, maxWidth: 640 }}>
            Once you complete a full course track, its final assessment unlocks here. Pass these quizzes to validate your knowledge.
          </p>
        </div>
      </section>

      <div className="courses-section">
        <div className="container quiz-dash-grid">
        {LIVE_COURSES.map(course => {
          const tracks = ['beginner', 'intermediate', 'advanced']
          return (
            <div key={course.id} className="quiz-course-card">
              <div className="quiz-course-head" style={{ background: course.bgColor }}>
                <div className="quiz-course-icon">
                  <CourseIcon slug={course.slug} size={36} />
                </div>
                <h2 className="h3" style={{ color: course.color }}>{course.title}</h2>
              </div>
              <div className="quiz-track-list">
                {tracks.map(track => {
                  const hasQuiz = !!getCourseQuiz(course.slug, track)
                  const trackLabel = course.tracks[track]?.label || track

                  return (
                    <div key={track} className={`quiz-track-item ${hasQuiz ? 'is-available' : 'is-upcoming'}`}>
                      <div className="quiz-track-info">
                        <h3 className="quiz-track-title">{track.charAt(0).toUpperCase() + track.slice(1)}</h3>
                        <p className="quiz-track-desc">{trackLabel}</p>
                      </div>
                      
                      {hasQuiz ? (
                        <Link to={`/quizzes/${course.slug}/${track}`} className="btn btn-primary btn-sm quiz-track-action">
                          <PlayCircle size={14} /> Take Quiz
                        </Link>
                      ) : (
                        <div className="quiz-track-status">
                          <Clock size={14} /> Upcoming
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}
