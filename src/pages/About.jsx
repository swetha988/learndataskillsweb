import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Globe, Target, Users, Mail, ArrowRight } from 'lucide-react'

const VALUES = [
  { icon: Heart, title: 'Open by default', body: 'No paywalls. No locked content. Every learner deserves access to world-class data education.' },
  { icon: Globe, title: 'Global examples', body: 'We use datasets from around the world — NYC, London, Mumbai, São Paulo. Data is universal.' },
  { icon: Target, title: 'Three levels, one path', body: 'Beginner to advanced in every course. Move at your pace. Skip what you know.' },
  { icon: Users, title: 'Alumni mentor newcomers', body: 'People who finished our courses help those just starting. The cycle continues.' },
]

const FOUNDERS = [
  {
    name: 'Sravan',
    role: 'Co-Founder',
    initial: 'S',
    bio: '10+ years in corporate tech. Saw too many talented people priced out of good data education. Started LearnDataSkills to fix that.'
  },
  {
    name: 'Swetha',
    role: 'Operations Lead',
    initial: 'W',
    bio: 'Manages the internship program, course quality, and learner experience. Believes great execution beats clever ideas every time.'
  }
]

export default function About() {
  return (
    <div>
      <section className="section-dark" style={{ padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent 65%)', top: -120, right: -120, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="section-label"><span>● About us</span></div>
          <h1 className="h-display" style={{ color: 'white', marginBottom: 24, maxWidth: 900 }}>
            We're building the <em>open library</em> of data education.
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 680 }}>
            World-class courses, working mentors, real datasets. No subscriptions, no upsells. Just learning.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="section-label"><span>● Why we built this</span></div>
          <h2 className="h1" style={{ marginBottom: 24 }}>
            Good data education shouldn't <em>cost a salary.</em>
          </h2>
          <div style={{ display: 'grid', gap: 16, fontSize: 17, lineHeight: 1.7, color: 'var(--s5)' }}>
            <p>
              Bootcamps cost ₹1.5 lakh. University degrees cost more. YouTube tutorials are scattered, outdated, and rarely structured. The people who need data skills most — career switchers, students from tier-2 cities, working professionals without budgets — get the worst deal.
            </p>
            <p>
              We made LearnDataSkills to flip that. Six full courses, three levels each, hands-on projects with global datasets, and 1:1 mentor sessions — all free, all open. The mentors are alumni who learned here and now help the next learner.
            </p>
            <p>
              It's a small thing. But it scales.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="section-label"><span>● What we stand for</span></div>
          <h2 className="h1" style={{ marginBottom: 48 }}>Our values.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {VALUES.map(({ icon: Icon, ...v }) => (
              <div key={v.title} className="card">
                <Icon size={24} color="var(--blue)" strokeWidth={1.8} style={{ marginBottom: 16 }} />
                <h3 className="h3" style={{ marginBottom: 8 }}>{v.title}</h3>
                <p className="body-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-label"><span>● Who's behind this</span></div>
          <h2 className="h1" style={{ marginBottom: 48 }}>The team.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {FOUNDERS.map(f => (
              <div key={f.name} style={{ display: 'flex', gap: 20, padding: 28, background: 'var(--bg)', border: '1.5px solid var(--s2)', borderRadius: 'var(--r-xl)' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--blue), var(--cyan))',
                  color: 'white', fontSize: 26, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>{f.initial}</div>
                <div>
                  <h3 className="h3">{f.name}</h3>
                  <p style={{ fontSize: 12, color: 'var(--blue)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>{f.role}</p>
                  <p className="body-sm">{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <h2 className="h1" style={{ color: 'white', marginBottom: 16 }}>
            Get in <em>touch.</em>
          </h2>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 32 }}>
            Feedback, ideas, mentor applications, partnership requests — we read every email.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:support@ahoosocial.com" className="btn btn-primary btn-lg">
              <Mail size={16} /> support@ahoosocial.com
            </a>
            <Link to="/courses" className="btn btn-on-dark btn-lg">
              Browse courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
