import React from 'react'
import CoursesGrid from '../components/CoursesGrid'

export default function Courses() {
  return (
    <div>
      <section className="section-dark" style={{ padding: '64px 0 32px' }}>
        <div className="container">
          <div className="section-label"><span>● Course catalogue</span></div>
          <h1 className="h-display" style={{ color: 'white' }}>All courses,<br/><em>three levels each.</em></h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 16, maxWidth: 640 }}>
            From your first SELECT to building production data pipelines. Pick where you are.
          </p>
        </div>
      </section>
      <CoursesGrid />
    </div>
  )
}
