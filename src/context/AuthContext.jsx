import React, { createContext, useContext, useState, useEffect } from 'react'

/* ──────────────────────────────────────────────────────────────
   AuthContext — Phase 1 mock authentication
   Persists user in localStorage. Replace with Firebase Auth
   in Phase 2 (Google OAuth + Phone OTP via Firebase).
   ────────────────────────────────────────────────────────────── */

const AuthContext = createContext(null)
export const useAuth = () => useContext(AuthContext)

const STORAGE_KEY = 'lds_user_v1'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setUser(JSON.parse(saved))
    } catch (e) { /* ignore */ }
    setLoading(false)
  }, [])

  const persist = (u) => {
    setUser(u)
    if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u))
    else localStorage.removeItem(STORAGE_KEY)
  }

  // Mock Google sign-in — instant success with demo profile
  const signInWithGoogle = async () => {
    await new Promise(r => setTimeout(r, 800))
    const u = {
      id: 'g_' + Date.now(),
      name: 'Demo Learner',
      email: 'demo@learndataskill.com',
      avatar: null,
      method: 'google',
      joinedAt: new Date().toISOString(),
      enrolledCourses: [],
      completedModules: []
    }
    persist(u)
    return u
  }

  // Mock phone OTP — accepts any 6-digit code (use 123456 in demo)
  const sendOtp = async (phone) => {
    await new Promise(r => setTimeout(r, 600))
    sessionStorage.setItem('pending_phone', phone)
    return { sent: true, phone }
  }

  const verifyOtp = async (otp) => {
    await new Promise(r => setTimeout(r, 600))
    if (otp !== '123456') throw new Error('Invalid OTP. Try 123456 for demo.')
    const phone = sessionStorage.getItem('pending_phone') || ''
    const u = {
      id: 'p_' + Date.now(),
      name: 'Learner ' + phone.slice(-4),
      phone,
      avatar: null,
      method: 'phone',
      joinedAt: new Date().toISOString(),
      enrolledCourses: [],
      completedModules: []
    }
    persist(u)
    sessionStorage.removeItem('pending_phone')
    return u
  }

  const signOut = () => persist(null)

  const updateUser = (changes) => {
    if (!user) return
    persist({ ...user, ...changes })
  }

  return (
    <AuthContext.Provider value={{
      user, loading, signInWithGoogle, sendOtp, verifyOtp, signOut, updateUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}
