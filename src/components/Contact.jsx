import './Contact.css'
import { personalInfo } from '../data/portfolio'

// Contact cards are built from personalInfo in data/portfolio.js
// To change email/phone/links, edit that file — no need to touch this component.
function buildContactInfo() {
  return [
    {
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <EmailIcon />,
    },
    {
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      icon: <PhoneIcon />,
    },
    {
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      icon: <LocationIcon />,
    },
    {
      label: 'LinkedIn',
      value: personalInfo.links.linkedin.replace('https://', ''),
      href: personalInfo.links.linkedin,
      icon: <LinkedInIcon />,
      external: true,
    },
    {
      label: 'GitHub',
      value: personalInfo.links.github.replace('https://', ''),
      href: personalInfo.links.github,
      icon: <GitHubIcon />,
      external: true,
    },
    {
      label: 'GitLab',
      value: personalInfo.links.gitlab.replace('https://', ''),
      href: personalInfo.links.gitlab,
      icon: <GitLabIcon />,
      external: true,
    },
  ]
}

export default function Contact() {
  const contactInfo = buildContactInfo()
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title"><span>Contact Me</span></h2>
        <p className="section-subtitle">
          I'm currently open to new opportunities. Feel free to reach out!
        </p>

        <div className="contact-layout">
          <div className="contact-text">
            <p>
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              my inbox is always open. I'll get back to you as soon as possible.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary contact-btn"
            >
              <EmailIcon /> Send an Email
            </a>
          </div>

          <div className="contact-cards">
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="contact-card"
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-card-icon">{c.icon}</span>
                <div>
                  <p className="contact-card-label">{c.label}</p>
                  <p className="contact-card-value">{c.value}</p>
                </div>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-copy">
            Designed & built by <span className="gradient-text">Ahmed Arafat</span> · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </section>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.12 12 19.79 19.79 0 0 1 1.07 3.42 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}
function GitLabIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
    </svg>
  )
}
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto', opacity: 0.4 }}>
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}
