import { useState } from 'react'
import './Projects.css'
import { projects, projectCategories as categories } from '../data/portfolio'

const platformIcons = {
  iOS: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  Android: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.61 15.15c-.46 0-.84-.37-.84-.83s.38-.84.84-.84.83.38.83.84-.37.83-.83.83m-9.22 0c-.46 0-.84-.37-.84-.83s.38-.84.84-.84.83.38.83.84-.37.83-.83.83m9.42-5.89l1.67-2.89c.09-.17.03-.38-.14-.47s-.38-.03-.47.14L16.2 8.97C15.14 8.5 13.9 8.23 12.5 8.23s-2.64.28-3.7.74L7.13 6.04c-.09-.17-.3-.23-.47-.14s-.23.3-.14.47l1.67 2.89C6.26 10.6 5.19 12.38 5 14.4h14c-.19-2.02-1.26-3.8-3.19-5.14z" />
    </svg>
  ),
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title"><span>Projects</span></h2>
        <p className="section-subtitle">Apps published on App Store & Google Play</p>

        <div className="filter-tabs">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${activeFilter === c ? 'active' : ''}`}
              onClick={() => setActiveFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.name} className={`project-card ${project.highlight ? 'highlight' : ''}`}>
              {project.highlight && <div className="highlight-badge">⭐ Featured</div>}
              <div className="project-header">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-name">{project.name}</h3>
                </div>
                <div className="platform-chips">
                  {project.platforms.map((p) => (
                    <span key={p} className="platform-chip">
                      {platformIcons[p]}
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="project-footer">
                {project.apps ? (
                  project.apps.map((app) => (
                    <div key={app.label} className="app-store-group">
                      <span className="app-label">{app.label}</span>
                      <div className="app-store-links">
                        {app.playStore && (
                          <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="store-link store-link-btn">
                            <PlayStoreIcon /> Play
                          </a>
                        )}
                        {app.appStore && (
                          <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="store-link store-link-btn">
                            <AppStoreIcon /> iOS
                          </a>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    {project.storeLinks.playStore && (
                      <a href={project.storeLinks.playStore} target="_blank" rel="noopener noreferrer" className="store-link store-link-btn">
                        <PlayStoreIcon /> Google Play
                      </a>
                    )}
                    {project.storeLinks.appStore && (
                      <a href={project.storeLinks.appStore} target="_blank" rel="noopener noreferrer" className="store-link store-link-btn">
                        <AppStoreIcon /> App Store
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlayStoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
    </svg>
  )
}
function AppStoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}
