import { useState, useEffect, useRef } from 'react'
import './Skills.css'
import { skillGroups, proficiencies } from '../data/portfolio'

function AnimatedBar({ level, color }) {
  const [width, setWidth] = useState(0)
  const ref = useRef()
  const triggered = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          setTimeout(() => setWidth(level), 150)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])
  return (
    <div className="bar-track" ref={ref}>
      <div className="bar-fill"
        style={{ width: `${width}%`, background: `linear-gradient(90deg, ${color}88, ${color})`,
                 transition: `width ${level * 12}ms cubic-bezier(0.16,1,0.3,1)` }} />
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label" data-reveal>What I know</p>
        <h2 className="section-title" data-reveal data-delay="1"><span>Skills</span></h2>
        <p className="section-subtitle" data-reveal data-delay="2">Technologies and tools I work with</p>

        <div className="skills-layout">
          <div className="skill-cards">
            {skillGroups.map((group, i) => (
              <div key={group.title} className="skill-card" data-reveal="scale" data-delay={String((i % 4) + 1)}>
                <div className="skill-card-header">
                  <span className="skill-icon">{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="proficiency-bars">
            <h3 className="bars-title">Proficiency</h3>
            {proficiencies.map((p, i) => (
              <div key={p.name} className="bar-item" data-reveal data-delay={String(i + 1)}>
                <div className="bar-header">
                  <span className="bar-name">{p.name}</span>
                  <span className="bar-pct">{p.level}%</span>
                </div>
                <AnimatedBar level={p.level} color={p.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
