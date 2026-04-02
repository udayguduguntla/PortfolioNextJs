'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

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

  const navigationItems = [
    { 
      id: 'home', 
      label: 'Home', 
      href: '/', 
      icon: '🏠',
      description: 'Portfolio Home'
    },
    { 
      id: 'about', 
      label: 'About', 
      href: '/about', 
      icon: '👤',
      description: 'About Me'
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      href: '/projects', 
      icon: '💻',
      description: 'My Projects'
    },
    { 
      id: 'achievements', 
      label: 'Achievements', 
      href: '/achievements', 
      icon: '🏆',
      description: 'Achievements'
    },
    { 
      id: 'files', 
      label: 'Files', 
      href: '/files', 
      icon: '📁',
      description: 'Documents & Assets'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      href: '/contact', 
      icon: '📧',
      description: 'Get In Touch'
    }
  ]

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
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex justify-center pt-4 px-4">
        <motion.nav 
          className={`
            backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 
            transition-all duration-300 ease-out
            ${isScrolled 
              ? 'bg-gray-900/80 shadow-2xl shadow-purple-500/10' 
              : 'bg-gray-900/60 shadow-xl'
            }
          `}
          layout
        >
          <div className="flex items-center justify-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = activeId === item.id
              
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="relative group"
                >
                  <motion.div
                    className={`
                      relative px-4 py-3 rounded-xl transition-all duration-200
                      flex items-center space-x-3 justify-center
                      ${isActive 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Active background */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl"
                          layoutId="activeTab"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Hover background */}
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    )}

                    {/* Content */}
                    <div className="relative flex items-center space-x-2">
                      <motion.span 
                        className="text-lg"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="font-medium text-sm hidden sm:inline">
                        {item.label}
                      </span>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                      <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap border border-gray-700">
                        {item.description}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-l border-t border-gray-700"></div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </motion.nav>
      </div>
    </motion.div>
  )
}
