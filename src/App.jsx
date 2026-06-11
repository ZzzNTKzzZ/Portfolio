import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Experience from './components/Experience'
import Education from './components/Education'
import EloraStore from './components/EloraStore'
import TaskFlow from './components/TaskFlow'

export default function App() {
  const [page, setPage] = useState(() => {
    try {
      return sessionStorage.getItem('portfolio_page') || 'home';
    } catch {
      return 'home';
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem('portfolio_page', page);
    } catch (e) {
      console.warn('sessionStorage is not available:', e);
    }
  }, [page]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'experience':   return <Experience navigate={setPage} />
      case 'education':    return <Education navigate={setPage} />
      case 'elora':        return <EloraStore navigate={setPage} />
      case 'taskflow':     return <TaskFlow navigate={setPage} />
      default:             return <Home navigate={setPage} />
    }
  }

  return (
    <div className="grid-bg min-h-screen relative overflow-x-hidden">
      {/* Global aurora background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="aurora-blob bg-[#b4c5ff] w-[600px] h-[600px] -top-48 -left-48" />
        <div className="aurora-blob bg-[#d2bbff] w-[500px] h-[500px] top-1/2 -right-32" />
        <div className="aurora-blob bg-[#4cd7f6] w-[400px] h-[400px] bottom-0 left-1/4" />
      </div>
      <div className="relative z-10">
        <Navbar currentPage={page} navigate={setPage} />
        <main>{renderPage()}</main>
        <Footer navigate={setPage} />
      </div>
    </div>
  )
}
