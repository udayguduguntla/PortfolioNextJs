'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, Code, Trophy, Mail, Github, Linkedin, Phone, Award } from 'lucide-react'

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: Code, href: '#projects' },
    { id: 'achievements', label: 'Achievements', icon: Trophy, href: '#achievements' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/udayguduguntla', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/udayguduguntla', label: 'LinkedIn' },
    { icon: Phone, href: 'tel:+916302111386', label: 'Phone' },
    { icon: Mail, href: 'mailto:udayguduguntla@gmail.com', label: 'Email' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, navItems])

  const toggleNav = () => setIsOpen(!isOpen)
  const closeNav = () => setIsOpen(false)

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id)
    closeNav()
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Floating Navigation Button - Centered */}
      <motion.div 
        className={`floating-nav ${isVisible ? 'visible' : 'hidden'}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="nav-toggle"
          onClick={toggleNav}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`nav-icon ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
      </motion.div>

      {/* Navigation Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="nav-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeNav}
          >
            <motion.div 
              className="nav-menu-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="nav-header">
                <h3 className="gradient-text">Navigation</h3>
                <motion.button 
                  className="nav-close" 
                  onClick={closeNav}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>
              
              <nav className="nav-links">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href, item.id)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </nav>
              
              <div className="nav-footer">
                <div className="nav-social">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <link.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .floating-nav {
          position: fixed;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .floating-nav.hidden {
          transform: translateX(-50%) translateY(-100px);
          opacity: 0;
        }

        .nav-toggle {
          width: 64px;
          height: 64px;
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-xl), var(--shadow-glow);
          position: relative;
          overflow: hidden;
        }

        .nav-toggle::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-primary);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }

        .nav-toggle:hover::before {
          opacity: 0.1;
        }

        .nav-toggle:hover {
          transform: scale(1.05);
          box-shadow: var(--shadow-xl), 0 0 30px rgba(59, 130, 246, 0.4);
        }

        .nav-icon {
          width: 24px;
          height: 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 1;
        }

        .nav-icon span {
          width: 100%;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-icon.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .nav-icon.active span:nth-child(2) {
          opacity: 0;
        }

        .nav-icon.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .nav-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 999;
        }

        .nav-menu-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--bg-glass);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-xl);
          padding: var(--space-xl);
          min-width: 320px;
          max-width: 90vw;
          box-shadow: var(--shadow-xl), 0 0 60px rgba(0, 0, 0, 0.5);
        }

        .nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-lg);
          padding-bottom: var(--space-md);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .nav-close {
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.5rem;
          cursor: pointer;
          padding: var(--space-xs);
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
        }

        .nav-close:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        .nav-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          margin-bottom: var(--space-lg);
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md);
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-primary);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: var(--radius-md);
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          opacity: 0.1;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-color);
          background: rgba(59, 130, 246, 0.1);
        }

        .nav-link svg {
          z-index: 1;
        }

        .nav-link span {
          z-index: 1;
        }

        .nav-social {
          display: flex;
          justify-content: center;
          gap: var(--space-md);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-primary);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }

        .social-link:hover::before {
          opacity: 0.2;
        }

        .social-link:hover {
          color: var(--primary-color);
          border-color: var(--primary-color);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }

        .social-link svg {
          z-index: 1;
        }

        @media (max-width: 768px) {
          .floating-nav {
            top: 1rem;
          }

          .nav-toggle {
            width: 56px;
            height: 56px;
          }

          .nav-menu-content {
            min-width: 280px;
            margin: 1rem;
            padding: var(--space-lg);
          }
        }
      `}</style>
    </>
  )
}