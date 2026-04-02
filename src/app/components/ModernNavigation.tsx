'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function ModernNavigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center pt-4 px-4">
        <nav 
          className={`
            backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 
            transition-all duration-300 ease-out
            ${isScrolled 
              ? 'bg-gray-900/80 shadow-2xl shadow-purple-500/10' 
              : 'bg-gray-900/60 shadow-xl'
            }
          `}
        >
          <div className="flex items-center justify-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = activeId === item.id
              
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`
                    relative px-4 py-3 rounded-xl transition-all duration-200
                    flex items-center space-x-2
                    ${isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium text-sm hidden sm:inline">
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}
