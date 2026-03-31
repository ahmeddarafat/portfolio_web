import './Education.css'
import { education, certificates } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="edu-section">
      <div className="container">
        <p className="section-label">My background</p>
        <h2 className="section-title"><span>Education & Certificates</span></h2>
        <p className="section-subtitle">Academic foundation and continuous learning</p>

        <div className="edu-grid">
          <div className="edu-block">
            <h3 className="block-title">
              <span className="block-icon">🏛️</span> Education
            </h3>
            {education.map((e, i) => (
              <div key={i} className="edu-card">
                <div className="edu-icon">{e.icon}</div>
                <div className="edu-info">
                  <h4 className="edu-degree">{e.degree}</h4>
                  <p className="edu-major">{e.major}</p>
                  <p className="edu-school">{e.school}</p>
                  <div className="edu-footer">
                    <span className="edu-period">{e.period}</span>
                    <span className="edu-grade">{e.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cert-block">
            <h3 className="block-title">
              <span className="block-icon">📜</span> Certificates
            </h3>
            <div className="cert-list">
              {certificates.map((c, i) => {
                const Tag = c.link ? 'a' : 'div'
                const linkProps = c.link
                  ? { href: c.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {}
                return (
                  <Tag key={i} className={`cert-card${c.link ? ' cert-card-link' : ''}`} {...linkProps}>
                    <span className="cert-icon">{c.icon}</span>
                    <div className="cert-info">
                      <p className="cert-name">{c.name}</p>
                      <span className="cert-date">{c.date}</span>
                    </div>
                    {c.link ? <ExternalIcon /> : <CheckIcon />}
                  </Tag>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#54C5F8" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
