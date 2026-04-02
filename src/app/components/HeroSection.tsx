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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 glass-purple rounded-full text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for Opportunities
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  {portfolioData.personal.name.split(' ')[0]}
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-200 min-h-[3rem] flex items-center justify-center lg:justify-start flex-wrap">
                <span className="mr-2">A Passionate</span>
                <span className="font-semibold text-purple-300 transition-all duration-500">
                  {roles[currentRole]}
                </span>
              </div>
              
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {portfolioData.personal.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link
                href="/projects"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg text-center font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🚀 View My Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 glass-purple rounded-lg hover:bg-purple-500/30 transition-all duration-300 font-semibold text-center border-2 border-purple-400/30 text-white"
              >
                📧 Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-purple rounded-full flex items-center justify-center text-purple-200 hover:text-white transition-all duration-300 hover:scale-110"
                title="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-purple rounded-full flex items-center justify-center text-purple-200 hover:text-white transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href={portfolioData.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-purple rounded-full flex items-center justify-center text-purple-200 hover:text-white transition-all duration-300 hover:scale-110"
                title="LeetCode"
              >
                <i className="fas fa-code text-xl"></i>
              </a>
              <a
                href={portfolioData.social.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-purple rounded-full flex items-center justify-center text-purple-200 hover:text-white transition-all duration-300 hover:scale-110"
                title="CodeChef"
              >
                <i className="fas fa-trophy text-xl"></i>
              </a>
            </div>
          </div>

          {/* Profile Portrait */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 mx-auto">
              {/* Purple glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-2xl opacity-30"></div>
              
              {/* Profile frame */}
              <div className="relative w-full h-full purple-card rounded-full overflow-hidden p-4">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <Image
                      src="/images/profilePic.jpg"
                      alt={portfolioData.personal.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
                        {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
