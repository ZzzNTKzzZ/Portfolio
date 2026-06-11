import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const links = [
  { id: 'home',         labelKey: 'navbar.home' },
  { id: 'skills',       labelKey: 'navbar.skills' },
  { id: 'projects',     labelKey: 'navbar.projects' },
  { id: 'experience',   labelKey: 'navbar.experience' },
  { id: 'education',    labelKey: 'navbar.education' },
  { id: 'future-goals', labelKey: 'navbar.goals' },
  { id: 'contact',      labelKey: 'navbar.contact' },
]

export default function Navbar({ currentPage, navigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IDs that live as sections inside Home, not separate pages
  const scrollIds = new Set(['home', 'skills', 'projects', 'future-goals', 'contact'])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const isHomePage = (page) =>
    page === 'home' || page === 'elora' || page === 'taskflow'

  const handleNav = (id) => {
    setMenuOpen(false)
    if (scrollIds.has(id)) {
       setActiveSection(id)
      if (isHomePage(currentPage) && currentPage !== 'elora' && currentPage !== 'taskflow') {
        // Already on home — just scroll
        scrollToSection(id)
      } else {
        // On a different page — go home first, then scroll after render
        navigate('home')
        setTimeout(() => scrollToSection(id), 80)
      }
    } else {
      navigate(id)
    }
  }

  const isActive = (id) => {
    if (id === 'projects') return currentPage === 'elora' || currentPage === 'taskflow'
    if (scrollIds.has(id)) return currentPage === 'home' && activeSection === id
    return currentPage === id
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070e1e]/95 shadow-2xl backdrop-blur-md border-b border-white/5'
          : 'bg-[#070e1e]/80 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between algin-center items-center">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="font-mono text-3xl font-bold tracking-tighter text-[#b4c5ff] hover:text-white transition-colors"
        >
          &lt;NTK /&gt;
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map(({ id, labelKey }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`text-sm font-medium transition-all duration-200 relative pb-1 ${
                isActive(id)
                  ? 'text-[#b4c5ff] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#b4c5ff] after:rounded-full'
                  : 'text-[#c3c6d7] hover:text-[#b4c5ff]'
              }`}
            >
              {t(labelKey)}
            </button>
          ))}
        </nav>

        {/* CTA & Language Switcher */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 border border-[#434655] hover:border-[#b4c5ff]/50 bg-[#141b2c]/60 px-3 py-1.5 rounded-lg text-sm font-medium text-[#c3c6d7] hover:text-[#b4c5ff] transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            aria-label="Switch Language"
          >
            <span className="material-symbols-outlined text-lg">language</span>
            <span className="font-mono text-xs">{language === 'en' ? 'EN' : 'VI'}</span>
          </button>
          
          <a
            href="https://drive.google.com/uc?export=download&id=1hehn0FBDQYN4-RzRsc8W4Fwd95w74-Ug"
            target="_blank"
            rel="noreferrer"
            className="bg-[#b4c5ff] text-[#002d84] px-5 py-2 rounded-lg text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all shadow-[0_0_15px_rgba(180,197,255,0.2)]"
          >
            {t('navbar.downloadCv')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#c3c6d7] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0c1324]/98 backdrop-blur-md border-t border-white/5 px-6 py-4 space-y-3">
          {links.map(({ id, labelKey }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`block w-full text-left py-2 text-sm font-medium transition-colors ${
                isActive(id) ? 'text-[#b4c5ff]' : 'text-[#c3c6d7] hover:text-[#b4c5ff]'
              }`}
            >
              {t(labelKey)}
            </button>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1hehn0FBDQYN4-RzRsc8W4Fwd95w74-Ug"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center bg-[#b4c5ff] text-[#002d84] px-5 py-2 rounded-lg text-sm font-semibold mt-3"
          >
            {t('navbar.downloadCv')}
          </a>
          <button
            onClick={toggleLanguage}
            className="w-full flex items-center justify-center gap-2 border border-[#434655] hover:border-[#b4c5ff]/50 bg-[#141b2c]/60 px-3 py-2 rounded-lg text-sm font-medium text-[#c3c6d7] hover:text-[#b4c5ff] transition-all cursor-pointer shadow-md mt-2"
            aria-label="Switch Language"
          >
            <span className="material-symbols-outlined text-lg">language</span>
            <span>{language === 'en' ? 'English (EN)' : 'Tiếng Việt (VI)'}</span>
          </button>
        </div>
      )}
    </header>
  )
}

