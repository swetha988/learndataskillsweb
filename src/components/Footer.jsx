import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Eye, Type } from 'lucide-react'
import { Logo } from './Logo'
import { LIVE_COURSES } from '../data/courses'
import './Footer.css'

export default function Footer() {
  const [highContrast, setHighContrast] = useState(false)
  const [dyslexiaFont, setDyslexiaFont] = useState(false)

  useEffect(() => {
    const hc = localStorage.getItem('lds_a11y_hc') === '1'
    const df = localStorage.getItem('lds_a11y_df') === '1'
    setHighContrast(hc)
    setDyslexiaFont(df)
    document.documentElement.classList.toggle('a11y-high-contrast', hc)
    document.documentElement.classList.toggle('a11y-dyslexia-font', df)
  }, [])

  const toggleHC = () => {
    const next = !highContrast
    setHighContrast(next)
    localStorage.setItem('lds_a11y_hc', next ? '1' : '0')
    document.documentElement.classList.toggle('a11y-high-contrast', next)
  }

  const toggleDF = () => {
    const next = !dyslexiaFont
    setDyslexiaFont(next)
    localStorage.setItem('lds_a11y_df', next ? '1' : '0')
    document.documentElement.classList.toggle('a11y-dyslexia-font', next)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo size={40} variant="dark" />
            <p className="footer-mission">
              World-class data education, made open. Every course, every track, every project — built for learners around the world.
            </p>
            <p className="footer-founders">
              Built by <strong>Sravan</strong> &amp; <strong>Swetha</strong> in Hyderabad. Real humans — talk to us.
            </p>
            <div className="footer-meta">
              <a href="mailto:support@ahoosocial.com" className="footer-meta-row">
                <Mail size={14} /> support@ahoosocial.com
              </a>
              <div className="footer-meta-row">
                <MapPin size={14} /> Hyderabad, India
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-h">Learn</h4>
            {LIVE_COURSES.slice(0, 6).map(c => (
              <Link key={c.id} to={`/courses/${c.slug}`}>{c.title}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4 className="footer-h">Platform</h4>
            <Link to="/courses">All courses</Link>
            <Link to="/mentors">Find a mentor</Link>
            <Link to="/about">About us</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-h">Connect</h4>
            <a href="https://learndataskill.com" target="_blank" rel="noopener noreferrer">Website</a>
            <a href="mailto:support@ahoosocial.com">Email</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        <div className="footer-a11y">
          <span className="a11y-label">Accessibility:</span>
          <button
            className={`a11y-btn ${highContrast ? 'is-on' : ''}`}
            onClick={toggleHC}
            aria-pressed={highContrast}
          >
            <Eye size={13} /> High contrast {highContrast ? 'on' : 'off'}
          </button>
          <button
            className={`a11y-btn ${dyslexiaFont ? 'is-on' : ''}`}
            onClick={toggleDF}
            aria-pressed={dyslexiaFont}
          >
            <Type size={13} /> Dyslexia-friendly font {dyslexiaFont ? 'on' : 'off'}
          </button>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} LearnDataSkills.</span>
          <span>Built with care · Open to all</span>
        </div>
      </div>
    </footer>
  )
}
