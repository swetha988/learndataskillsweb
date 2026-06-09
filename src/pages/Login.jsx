import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { LogoMark, Wordmark } from '../components/Logo'
import './Login.css'

export default function Login() {
  const [method, setMethod] = useState('choose') // choose | phone | otp
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signInWithGoogle, sendOtp, verifyOtp } = useAuth()
  const navigate = useNavigate()

  const handleGoogle = async () => {
    setError('')
    setLoading(true)
    try {
      await signInWithGoogle()
      navigate('/dashboard')
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSendOtp = async (e) => {
    e.preventDefault()
    if (!/^\+?[0-9 -]{8,}$/.test(phone)) {
      setError('Enter a valid phone number with country code')
      return
    }
    setError('')
    setLoading(true)
    try {
      await sendOtp(phone)
      setMethod('otp')
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await verifyOtp(otp)
      navigate('/dashboard')
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-pane-left">
        <Link to="/" className="login-back">
          <ArrowLeft size={16} /> Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="login-card-wrap"
        >
          <div className="login-brand">
            <LogoMark size={48} />
          </div>

          {method === 'choose' && (
            <>
              <h1 className="login-h1 h1">Welcome.</h1>
              <p className="login-sub">Sign in to track your progress and book mentor sessions.</p>

              {error && <div className="login-error">{error}</div>}

              <button
                className="oauth-btn"
                onClick={handleGoogle}
                disabled={loading}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
                {loading && <Loader2 size={16} className="spin" />}
              </button>

              <div className="login-divider"><span>or</span></div>

              <button
                className="oauth-btn oauth-phone"
                onClick={() => { setError(''); setMethod('phone') }}
                disabled={loading}
              >
                <Phone size={18} /> Continue with phone number
              </button>

              <p className="login-tos">
                By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
              </p>
            </>
          )}

          {method === 'phone' && (
            <>
              <button className="step-back" onClick={() => { setMethod('choose'); setError('') }}>
                <ArrowLeft size={14} /> Back
              </button>
              <h1 className="login-h1 h1">Enter your phone.</h1>
              <p className="login-sub">We'll send you a 6-digit code.</p>

              {error && <div className="login-error">{error}</div>}

              <form onSubmit={handleSendOtp} className="login-form">
                <label className="input-label" htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  className="input login-input"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  autoFocus
                  required
                />
                <button type="submit" className="btn btn-primary btn-lg login-submit" disabled={loading}>
                  {loading ? <><Loader2 size={16} className="spin" /> Sending...</> : 'Send OTP'}
                </button>
              </form>
            </>
          )}

          {method === 'otp' && (
            <>
              <button className="step-back" onClick={() => { setMethod('phone'); setOtp(''); setError('') }}>
                <ArrowLeft size={14} /> Change number
              </button>
              <h1 className="login-h1 h1">Enter the code.</h1>
              <p className="login-sub">
                We sent a 6-digit code to <strong>{phone}</strong>.{' '}
                <span className="demo-hint">(Demo: use <code>123456</code>)</span>
              </p>

              {error && <div className="login-error">{error}</div>}

              <form onSubmit={handleVerifyOtp} className="login-form">
                <label className="input-label" htmlFor="otp">Verification code</label>
                <input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  className="input login-input otp-input"
                  placeholder="••••••"
                  value={otp}
                  onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
                  autoFocus
                  required
                />
                <button type="submit" className="btn btn-primary btn-lg login-submit" disabled={loading || otp.length !== 6}>
                  {loading ? <><Loader2 size={16} className="spin" /> Verifying...</> : <><CheckCircle2 size={16} /> Verify & sign in</>}
                </button>
                <button type="button" className="login-resend" onClick={() => sendOtp(phone)}>
                  Resend code
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>

      <div className="login-pane-right">
        <div className="login-pane-decor">
          <div className="decor-glow" />
        </div>
        <div className="login-illustration">
          <Wordmark size={28} variant="dark" />
          <p className="illu-line">
            World-class data education, <em>made open.</em> Built for learners everywhere.
          </p>
          <div className="illu-author">
            <div className="illu-avatar">★</div>
            <div>
              <strong>3 levels per course</strong>
              <span>Beginner · Intermediate · Advanced</span>
            </div>
          </div>

          <div className="illu-stats">
            <div className="illu-stat">
              <strong>3</strong>
              <span>levels per course</span>
            </div>
            <div className="illu-stat">
              <strong>6</strong>
              <span>courses live</span>
            </div>
            <div className="illu-stat">
              <strong>1:N</strong>
              <span>group mentor sessions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
