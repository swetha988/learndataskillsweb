import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DemoBanner from './components/DemoBanner'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Login from './pages/Login'
import Mentors from './pages/Mentors'
import MentorProfile from './pages/MentorProfile'
import About from './pages/About'
import Dashboard from './pages/Dashboard'

export default function App() {
  const location = useLocation()
  const hideChrome = ['/login'].includes(location.pathname)

  return (
    <>
      {!hideChrome && <DemoBanner />}
      {!hideChrome && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentors/:id" element={<MentorProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!hideChrome && <Footer />}
    </>
  )
}
