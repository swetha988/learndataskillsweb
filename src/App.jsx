import React from 'react'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DemoBanner from './components/DemoBanner'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import ModulePage from './pages/ModulePage'
import Login from './pages/Login'
import Mentors from './pages/Mentors'
import MentorProfile from './pages/MentorProfile'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'

export default function App() {
  const location = useLocation()
  const hideChrome = ['/login'].includes(location.pathname)
  const isModule = /^\/courses\/[^/]+\/(beginner|intermediate|advanced)\/\d+/.test(location.pathname)

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-9S7QPKP9QJ', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location.pathname, location.search])

  return (
    <>
      {!hideChrome && !isModule && <DemoBanner />}
      {!hideChrome && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/courses/:slug/:level/:moduleIndex" element={<ModulePage />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentors/:id" element={<MentorProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!hideChrome && !isModule && <Footer />}
    </>
  )
}
