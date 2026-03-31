import { useState, useEffect } from 'react'
import './Hero.css'
import { personalInfo } from '../data/portfolio'

const devTitles = [personalInfo.title, 'Mobile Engineer', 'BLoC Architect', 'Clean Code Advocate']
const [firstName, ...rest] = personalInfo.name.split(' ')
const lastName = rest.join(' ')

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-blob blob1" />
        <div className="hero-blob blob2" />
        <div className="grid-overlay" />
        <Particles />
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">
            <span className="code-tag">&lt;</span>
            Hello, World!
            <span className="code-tag"> /&gt;</span>
          </p>
          <h1 className="hero-name">
            {firstName} <span className="gradient-text">{lastName}</span>
          </h1>
          <h2 className="hero-title">
            <span className="flutter-icon">
              <FlutterLogo />
            </span>
            <Typewriter words={devTitles} />
          </h2>
          <p className="hero-summary">{personalInfo.summary}</p>

          <div className="hero-badges">
            <span className="badge">📍 {personalInfo.location}</span>
            {personalInfo.openToWork && (
              <span className="badge badge-green">🟢 Open to work</span>
            )}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <FlutterLargeIcon />
            </div>
          </div>
          <div className="floating-chip chip1"><span>Flutter</span></div>
          <div className="floating-chip chip2"><span>Dart</span></div>
          <div className="floating-chip chip3"><span>BLoC</span></div>
          <div className="floating-chip chip4"><span>Clean Arch</span></div>
        </div>
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <span className="scroll-dot" />
      </a>
    </section>
  )
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: `${(i * 5.5 + 2) % 100}%`,
  y: `${(i * 7.3 + 5) % 100}%`,
  size: (i % 3) + 1.5,
  dur: `${(i % 4) + 4}s`,
  delay: `${(i * 0.4) % 3}s`,
}))

function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size,
                   animationDuration: p.dur, animationDelay: p.delay }}
        />
      ))}
    </div>
  )
}

function Typewriter({ words }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[idx]
    let timeout
    if (!deleting) {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 45)
      } else {
        setDeleting(false)
        setIdx((i) => (i + 1) % words.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, idx, words])

  return <span>{text}<span className="type-cursor">|</span></span>
}

function FlutterLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <path d="M13 29L26 16H48L35 29L48 42H26L13 29Z" fill="#54C5F8" />
      <path d="M26 42L35 29L26 16L13 29L26 42Z" fill="#01579B" opacity="0.5" />
      <path d="M13 29L0 16H22L13 29Z" fill="#54C5F8" />
    </svg>
  )
}

function FlutterLargeIcon() {
  return (
    <svg width="90" height="90" viewBox="0 0 48 48" fill="none">
      <path d="M13 29L26 16H48L35 29L48 42H26L13 29Z" fill="#54C5F8" />
      <path d="M26 42L35 29L26 16L13 29L26 42Z" fill="#01579B" opacity="0.6" />
      <path d="M13 29L0 16H22L13 29Z" fill="#54C5F8" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
