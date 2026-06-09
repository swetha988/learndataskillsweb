import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Play, CheckCircle2, TrendingUp, BookOpen, Award } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-decor" aria-hidden="true">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <div className="hero-pill">
            <Sparkles size={13} />
            <span>Three levels per course. Real-world datasets.</span>
          </div>

          <h1 className="hero-headline">
            World-class data education,
            <br/>
            <em>made open.</em>
          </h1>

          <p className="hero-sub">
            Learn SQL, Python, Excel, Power BI and Tableau through hands-on lessons. Pick your level — beginner, intermediate, or advanced. Practice with real datasets from around the world.
          </p>

          <div className="hero-ctas">
            <Link to="/courses" className="btn btn-primary btn-lg">
              Browse courses
              <ArrowRight size={18} />
            </Link>
            <a href="#how" className="btn btn-secondary btn-lg">
              <Play size={16} fill="currentColor" />
              How it works
            </a>
          </div>

          <div className="hero-meta">
            <div className="meta-item">
              <strong>9</strong>
              <span>courses · live & upcoming</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <strong>3</strong>
              <span>tracks per course</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <strong>Global</strong>
              <span>real-world datasets</span>
            </div>
          </div>
        </motion.div>

        {/* NEW visual: learning progress dashboard card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hero-visual"
        >
          <div className="learning-card">
            <div className="lc-head">
              <div className="lc-head-left">
                <div className="lc-eyebrow">Your learning path</div>
                <div className="lc-title">SQL for Data</div>
              </div>
              <div className="lc-progress">
                <div className="lc-progress-ring">
                  <svg viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15" stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="none"/>
                    <circle cx="18" cy="18" r="15" stroke="#06B6D4" strokeWidth="3" fill="none"
                      strokeDasharray="94.2" strokeDashoffset="33"
                      strokeLinecap="round" transform="rotate(-90 18 18)"/>
                  </svg>
                  <div className="lc-progress-val">65%</div>
                </div>
              </div>
            </div>

            <div className="lc-tracks">
              <div className="lc-track lc-track-done">
                <div className="lc-track-bar">
                  <div className="lc-track-fill" style={{ width: '100%' }} />
                </div>
                <div className="lc-track-meta">
                  <CheckCircle2 size={13} />
                  <strong>Beginner</strong>
                  <span>6 of 6 modules</span>
                </div>
              </div>
              <div className="lc-track lc-track-active">
                <div className="lc-track-bar">
                  <div className="lc-track-fill" style={{ width: '50%' }} />
                </div>
                <div className="lc-track-meta">
                  <span className="lc-dot lc-dot-pulse" />
                  <strong>Intermediate</strong>
                  <span>3 of 6 modules</span>
                </div>
              </div>
              <div className="lc-track">
                <div className="lc-track-bar">
                  <div className="lc-track-fill" style={{ width: '0%' }} />
                </div>
                <div className="lc-track-meta">
                  <span className="lc-dot" />
                  <strong>Advanced</strong>
                  <span>0 of 6 modules</span>
                </div>
              </div>
            </div>

            <div className="lc-stats">
              <div className="lc-stat">
                <BookOpen size={14} />
                <div>
                  <strong>9</strong>
                  <span>modules done</span>
                </div>
              </div>
              <div className="lc-stat">
                <TrendingUp size={14} />
                <div>
                  <strong>12d</strong>
                  <span>learning streak</span>
                </div>
              </div>
              <div className="lc-stat">
                <Award size={14} />
                <div>
                  <strong>1</strong>
                  <span>track complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating "next up" card */}
          <div className="lc-next">
            <div className="lc-next-label">Up next</div>
            <div className="lc-next-row">
              <div className="lc-next-icon">▶</div>
              <div>
                <strong>JOINs explained</strong>
                <span>Module 4 · ~12 min</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
