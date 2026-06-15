import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, LogOut, User as UserIcon, LayoutDashboard, Search, BookOpen, Users } from 'lucide-react'
import { Logo } from './Logo'
import { useAuth } from '../context/AuthContext'
import { LIVE_COURSES } from '../data/courses'
import { searchCourses } from '../data/searchIndex'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQ, setSearchQ] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const searchRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSignOut = () => {
    signOut()
    setMenuOpen(false)
    navigate('/')
  }

  const searchResults = searchQ.length > 0 ? searchCourses(LIVE_COURSES, searchQ) : []

  const handleSearchSelect = (slug) => {
    navigate(`/courses/${slug}`)
    setSearchQ('')
    setSearchFocused(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <Logo size={36} variant="light" />
        </Link>

        <div className={`nav-search ${searchFocused ? 'is-focused' : ''}`} ref={searchRef}>
          <Search size={15} className="nav-search-icon" />
          <input
            type="text"
            placeholder="Search courses, topics — try 'JOIN' or 'VLOOKUP'…"
            value={searchQ}
            onChange={e => setSearchQ(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 180)}
          />
          {searchQ && (
            <button className="nav-search-clear" onClick={() => setSearchQ('')}>
              <X size={13} />
            </button>
          )}
          {searchFocused && (
            <div className="search-dropdown">
              {searchQ.length === 0 ? (
                <>
                  <div className="search-section">
                    <div className="search-h">Popular courses</div>
                    {LIVE_COURSES.slice(0, 4).map(c => (
                      <button key={c.id} className="search-item" onMouseDown={() => handleSearchSelect(c.slug)}>
                        <BookOpen size={14} />
                        <span>{c.title}</span>
                        <span className="search-meta">{c.totalModules} modules</span>
                      </button>
                    ))}
                  </div>
                  <div className="search-section">
                    <div className="search-h">Quick links</div>
                    <button className="search-item" onMouseDown={() => { navigate('/mentors'); setSearchFocused(false) }}>
                      <Users size={14} /> <span>Find a mentor</span>
                    </button>
                  </div>
                </>
              ) : searchResults.length > 0 ? (
                <div className="search-section">
                  <div className="search-h">Results</div>
                  {searchResults.map(r => (
                    <button key={r.course.id} className="search-item" onMouseDown={() => handleSearchSelect(r.course.slug)}>
                      <BookOpen size={14} />
                      <span>{r.course.title}</span>
                      <span className="search-meta">
                        {r.matchingTopic && !r.isTitleHit ? `Covers: ${r.matchingTopic}` : r.course.tagline}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="search-empty">No results for "{searchQ}"</div>
              )}
            </div>
          )}
        </div>

        <div className="nav-right">
          <nav className={`nav-links ${open ? 'is-open' : ''}`}>
            <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/courses" onClick={() => setOpen(false)}>Courses</NavLink>
            <NavLink to="/quizzes" onClick={() => setOpen(false)}>Exercises</NavLink>
            <NavLink to="/mentors" onClick={() => setOpen(false)}>Mentors</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          </nav>

          <div className="nav-actions">
            {user ? (
              <div className="user-menu">
                <button className="user-trigger" onClick={() => setMenuOpen(o => !o)}>
                  <div className="user-avatar">{user.name?.[0] || '?'}</div>
                  <ChevronDown size={14} />
                </button>
                {menuOpen && (
                  <>
                    <div className="dropdown-backdrop" onClick={() => setMenuOpen(false)} />
                    <div className="user-dropdown" role="menu">
                      <div className="dropdown-header">
                        <strong>{user.name}</strong>
                        <span>{user.email || user.phone}</span>
                      </div>
                      <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="dropdown-item">
                        <LayoutDashboard size={15} /> Dashboard
                      </Link>
                      <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="dropdown-item">
                        <UserIcon size={15} /> My profile
                      </Link>
                      <button onClick={handleSignOut} className="dropdown-item dropdown-item-danger">
                        <LogOut size={15} /> Sign out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost btn-md">Sign in</Link>
                <Link to="/courses" className="btn btn-primary btn-md">Get started</Link>
              </>
            )}
          </div>

          <button className="nav-menu-btn" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
