import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Sparkles } from 'lucide-react'
import './OnboardingIntake.css'

const KEY = 'lds_onboarding_v1'

const QUESTIONS = [
  {
    id: 'goal',
    title: "What's your goal?",
    sub: "We'll suggest where to start.",
    options: [
      { id: 'analyst', label: 'Become a data analyst', icon: '📊' },
      { id: 'scientist', label: 'Become a data scientist', icon: '🔬' },
      { id: 'engineer', label: 'Become a data engineer', icon: '⚙️' },
      { id: 'curious', label: "I'm just curious", icon: '✨' },
    ],
  },
  {
    id: 'level',
    title: "What's your current level?",
    sub: "Helps us recommend the right track.",
    options: [
      { id: 'none', label: "I've never written code", icon: '🌱' },
      { id: 'some', label: 'I know some basics', icon: '🌿' },
      { id: 'comfortable', label: "I'm comfortable, want to go deeper", icon: '🌳' },
    ],
  },
  {
    id: 'hours',
    title: 'How many hours per week?',
    sub: 'Honest answer — we plan around your real life.',
    options: [
      { id: 'light', label: '1–3 hours (casual)', icon: '🕐' },
      { id: 'steady', label: '4–7 hours (steady)', icon: '🕓' },
      { id: 'intense', label: '8+ hours (career switch mode)', icon: '🕗' },
    ],
  },
]

export const getOnboarding = () => {
  try { return JSON.parse(localStorage.getItem(KEY) || 'null') } catch { return null }
}

export default function OnboardingIntake() {
  const [show, setShow] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      // small delay so the dashboard renders first
      const t = setTimeout(() => setShow(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  const handleSelect = (questionId, optionId) => {
    const newAnswers = { ...answers, [questionId]: optionId }
    setAnswers(newAnswers)
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1)
    } else {
      finish(newAnswers)
    }
  }

  const finish = (final) => {
    localStorage.setItem(KEY, JSON.stringify({ ...final, completedAt: new Date().toISOString() }))
    setShow(false)
  }

  const skip = () => {
    localStorage.setItem(KEY, JSON.stringify({ skipped: true, at: new Date().toISOString() }))
    setShow(false)
  }

  if (!show) return null
  const q = QUESTIONS[step]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="onboard-backdrop"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="onboard-modal"
        >
          <button className="onboard-skip" onClick={skip}>
            Skip <X size={14} />
          </button>

          <div className="onboard-progress">
            {QUESTIONS.map((_, i) => (
              <div
                key={i}
                className={`onboard-dot ${i === step ? 'is-active' : ''} ${i < step ? 'is-done' : ''}`}
              />
            ))}
          </div>

          <div className="onboard-pill">
            <Sparkles size={12} />
            <span>Welcome — let's personalize this</span>
          </div>

          <h2 className="onboard-h">{q.title}</h2>
          <p className="onboard-sub">{q.sub}</p>

          <div className="onboard-options">
            {q.options.map(opt => (
              <button
                key={opt.id}
                className="onboard-option"
                onClick={() => handleSelect(q.id, opt.id)}
              >
                <span className="onboard-icon">{opt.icon}</span>
                <span className="onboard-label">{opt.label}</span>
                <ArrowRight size={15} className="onboard-arrow" />
              </button>
            ))}
          </div>

          <p className="onboard-foot">
            Step {step + 1} of {QUESTIONS.length} · No wrong answers · You can change these later
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
