'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function ModernNavigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Navigation items - easy to add/remove pages
  const navigationItems = [
    { id: 'home', label: 'Home', href: '/', icon: '🏠' },
    { id: 'about', label: 'About', href: '/about', icon: '👤' },
    { id: 'projects', label: 'Projects', href: '/projects', icon: '💻' },
    { id: 'achievements', label: 'Achievements', href: '/achievements', icon: '🏆' },
    { id: 'files', label: 'Files', href: '/files', icon: '📁' },
    { id: 'contact', label: 'Contact', href: '/contact', icon: '📧' }
  ]

  // Determine which page is currently active
  const getActiveId = () => {
    if (!pathname) return 'home'
    if (pathname === '/') return 'home'
    if (pathname === '/about') return 'about'
    if (pathname === '/projects' || pathname.startsWith('/projects/')) return 'projects'
    if (pathname === '/achievements') return 'achievements'
    if (pathname === '/files') return 'files'
    if (pathname === '/contact') return 'contact'
    return 'home'
  }

  const activeId = getActiveId()

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center pt-4 px-4">
          <nav 
            className={`
              backdrop-blur-xl border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 
              transition-all duration-300 ease-out w-full max-w-fit
              ${isScrolled 
                ? 'bg-gray-900/80 shadow-2xl shadow-purple-500/10' 
                : 'bg-gray-900/60 shadow-xl'
              }
            `}
          >
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-1">
              {navigationItems.map((item) => {
                const isActive = activeId === item.id
                
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`
                      relative px-3 lg:px-4 py-2 lg:py-3 rounded-xl transition-all duration-200
                      flex items-center space-x-2
                      ${isActive 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <span className="text-base lg:text-lg">{item.icon}</span>
                    <span className="font-medium text-sm">
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center justify-between w-full">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-lg">🏠</span>
                <span className="font-semibold text-white">Portfolio</span>
              </Link>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-20 left-4 right-4 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = activeId === item.id
                
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                      ${isActive 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
