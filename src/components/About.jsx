import { useState, useEffect, useRef } from 'react'
import './About.css'
import { personalInfo, aboutStats } from '../data/portfolio'

function CountUp({ value }) {
  const [display, setDisplay] = useState(value)
  const ref = useRef()
  const started = useRef(false)
  useEffect(() => {
    const match = value.match(/^([\d.]+)(.*)$/)
    if (!match) return
    const target = parseFloat(match[1])
    const suffix = match[2]
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const t0 = performance.now()
          const tick = (now) => {
            const p = Math.min((now - t0) / 1500, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(Math.ceil(target * eased) + suffix)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])
  return <span ref={ref} className="stat-number">{display}</span>
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <p className="section-label" data-reveal>Who I am</p>
        <h2 className="section-title" data-reveal data-delay="1"><span>About Me</span></h2>
        <p className="section-subtitle" data-reveal data-delay="2">A brief introduction</p>

        <div className="about-grid">
          <div className="about-text" data-reveal="left">
            <p>
              I'm a <strong>Flutter Developer</strong> based in Cairo, Egypt, with a Bachelor's in
              Computer and Control Systems Engineering from Mansoura University.
            </p>
            <p>
              I specialize in building <strong>scalable, cross-platform mobile applications</strong> using
              Flutter and Dart. My engineering background gives me a strong foundation in
              algorithms, architecture, and clean code principles.
            </p>
            <p>
              I'm passionate about crafting apps that are not only functional but also
              performant and delightful to use. I apply <strong>Clean Architecture</strong> and
              <strong> BLoC pattern</strong> to keep codebases maintainable and testable.
            </p>
            <p>
              Outside of coding, I stay current with the Flutter ecosystem, contribute to
              open-source projects, and continuously level up through certifications and courses.
            </p>
            <div className="about-links">
              <a href={`mailto:${personalInfo.email}`} className="about-link">
                <EmailIcon /> {personalInfo.email}
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>

          <div className="about-stats" data-reveal="right">
            {aboutStats.map((s, i) => (
              <div key={i} className="stat-card" data-reveal="scale" data-delay={String(i + 1)}>
                {s.icon ? (
                  <>
                    <span className="stat-icon">{s.icon}</span>
                    <span className="stat-label">{s.label}</span>
                    <span className="stat-sublabel">{s.sublabel}</span>
                  </>
                ) : (
                  <>
                  <CountUp value={s.number} />
                    <span className="stat-label">{s.label}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
