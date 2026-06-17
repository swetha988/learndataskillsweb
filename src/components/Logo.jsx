import React from 'react'

/* ──────────────────────────────────────────────────────────────
   The Data Tree Mark — exact SVG from Brand Guidelines v1.0
   "Branching decision tree canopy · 4 leaf knowledge nodes
    · root node · trunk · 4 learners + 1 amber teacher"
   ────────────────────────────────────────────────────────────── */

export function LogoMark({ size = 36 }) {
  const id = React.useId()
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`lg-${id}`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB"/>
          <stop offset="1" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill={`url(#lg-${id})`}/>
      {/* Trunk */}
      <line x1="32" y1="36" x2="32" y2="27" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
      {/* Main branches */}
      <line x1="32" y1="27" x2="21" y2="19" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
      <line x1="32" y1="27" x2="43" y2="19" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
      {/* Sub-branches */}
      <line x1="21" y1="19" x2="15" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="21" y1="19" x2="27" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="43" y1="19" x2="37" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="43" y1="19" x2="49" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      {/* 4 leaf knowledge nodes */}
      <circle cx="15" cy="12" r="4" fill="white"/>
      <circle cx="27" cy="12" r="4" fill="white"/>
      <circle cx="37" cy="12" r="4" fill="white"/>
      <circle cx="49" cy="12" r="4" fill="white"/>
      {/* Branch junction nodes */}
      <circle cx="21" cy="19" r="3.4" fill="white" opacity="0.9"/>
      <circle cx="43" cy="19" r="3.4" fill="white" opacity="0.9"/>
      {/* Central ring (root) */}
      <circle cx="32" cy="27" r="5.2" fill="white"/>
      <circle cx="32" cy="27" r="2.2" fill={`url(#lg-${id})`}/>
      {/* Trunk base */}
      <rect x="29.5" y="36" width="5" height="9" rx="2.5" fill="white"/>
      {/* 4 learners + 1 amber teacher */}
      <circle cx="18" cy="54" r="3.5" fill="white" opacity="0.7"/>
      <circle cx="26" cy="54" r="3.8" fill="white" opacity="0.9"/>
      <circle cx="32" cy="52" r="4.8" fill="#FCD34D"/>
      <circle cx="38" cy="54" r="3.8" fill="white" opacity="0.9"/>
      <circle cx="46" cy="54" r="3.5" fill="white" opacity="0.7"/>
    </svg>
  )
}

export function Wordmark({ size = 18, variant = 'light' }) {
  const colors = {
    light: { l: 'var(--navy)', d: 'var(--blue)', s: 'var(--s4)' },
    dark:  { l: '#fff', d: '#93C5FD', s: 'rgba(255,255,255,0.5)' },
    blue:  { l: '#fff', d: '#BFDBFE', s: 'rgba(255,255,255,0.55)' }
  }
  const c = colors[variant] || colors.light
  return (
    <span style={{
      fontFamily: 'var(--font-sans)',
      fontSize: size,
      fontWeight: 800,
      letterSpacing: '-0.4px',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }}>
      <span style={{ color: c.l }}>Learn</span>
      <span style={{ color: c.d }}>Data</span>
      <span style={{ color: c.s }}>Skill</span>
    </span>
  )
}

export function Logo({ size = 36, variant = 'light' }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <LogoMark size={size} />
      <Wordmark size={size * 0.5} variant={variant} />
    </div>
  )
}
