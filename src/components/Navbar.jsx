import { useState, useEffect } from 'react'
import './Navbar.css'
import { personalInfo } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          Ahmed
          <span className="logo-slash"> /</span>
          <span className="logo-bracket">&gt;</span>
        </a>
 
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resumeLink}
              download
              className="nav-cta"
            >
              Resume
            </a>
          </li>
          <li>
            {/* <a
              href="https://www.linkedin.com/in/ahmed-arafat-064621231/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Hire Me
            </a> */}
          </li>
        </ul>
      </div>
    </nav>
  )
}
