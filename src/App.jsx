import { useEffect, useRef } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  const glowRef = useRef()
  useScrollReveal()

  useEffect(() => {
    const onMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 350}px, ${e.clientY - 350}px)`
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}
