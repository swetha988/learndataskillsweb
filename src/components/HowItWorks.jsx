import React from 'react'
import { BookOpen, Code2, CheckCircle2, Trophy } from 'lucide-react'
import './HowItWorks.css'

const STEPS = [
  { icon: BookOpen, n: '01', title: 'Pick your level',
    body: 'Every course has three tracks. Start where you are — no shame in starting from beginner.',
    color: '#2563EB' },
  { icon: Code2, n: '02', title: 'Practice with real data',
    body: 'Every module includes hands-on exercises with global datasets — NYC Taxi, IPL, Spotify, World Bank.',
    color: '#06B6D4' },
  { icon: CheckCircle2, n: '03', title: 'Check yourself',
    body: 'Mini-quiz after each module. Get the explanation when you miss. No grades, just learning.',
    color: '#16A34A' },
  { icon: Trophy, n: '04', title: 'Build a real project',
    body: 'Each track ends with a project. Add them to your portfolio. Talk about them in interviews.',
    color: '#EA580C' },
]

export default function HowItWorks() {
  return (
    <section className="how-section section" id="how">
      <div className="container">
        <div className="section-label"><span>● How it works</span></div>
        <h2 className="h1">
          Simple. Honest. <em>Effective.</em>
        </h2>
        <p className="body-lg" style={{ maxWidth: 600, marginTop: 16, marginBottom: 48 }}>
          No paywalls. No 50-step onboarding. Just open a course and start.
        </p>

        <div className="how-grid">
          {STEPS.map(({ icon: Icon, ...s }) => (
            <div key={s.n} className="how-card">
              <div className="how-icon" style={{ background: s.color }}>
                <Icon size={22} color="white" />
              </div>
              <div className="how-n">{s.n}</div>
              <h3 className="h3" style={{ marginBottom: 8 }}>{s.title}</h3>
              <p className="body-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
