import React, { useState, useEffect } from 'react'
import { Info, X } from 'lucide-react'
import './DemoBanner.css'

export default function DemoBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('lds_demo_banner_dismissed')
    if (!dismissed) setShow(true)
  }, [])

  const dismiss = () => {
    localStorage.setItem('lds_demo_banner_dismissed', '1')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="demo-banner" role="status">
      <div className="container demo-banner-inner">
        <Info size={15} />
        <span>
          <strong>Demo mode.</strong> Your progress, bookings, and mentor profile save only in this browser. Full accounts launch later in 2026.
        </span>
        <button className="demo-banner-close" onClick={dismiss} aria-label="Dismiss">
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
