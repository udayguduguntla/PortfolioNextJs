'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Using Font Awesome icons instead
import { portfolioData } from '@/data/portfolio'

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    'Full Stack Developer',
    'AI/ML Engineer',
    'Computer Vision Specialist',
    'Problem Solver'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for opportunities
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {portfolioData.personal.name.split(' ')[0]}
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl text-gray-600 h-12 flex items-center">
                <span className="mr-2">I'm a</span>
                <span className="font-semibold text-blue-600 transition-all duration-500">
                  {roles[currentRole]}
                </span>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {portfolioData.personal.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium text-center"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href={portfolioData.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <i className="fas fa-code text-2xl"></i>
              </a>
              <a
                href={portfolioData.social.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <i className="fas fa-trophy text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-lg animate-bounce">
                <i className="fas fa-code text-xl"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg animate-bounce animation-delay-1000">
                <i className="fas fa-brain text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about" className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <span className="text-sm mb-2">Scroll to explore</span>
            <i className="fas fa-chevron-down w-6 h-6"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}