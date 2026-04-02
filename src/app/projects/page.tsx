'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { portfolioData } from '@/data/portfolio'
import ModernNavigation from '../components/ModernNavigation'
import InteractiveStarBackground from '../components/InteractiveStarBackground'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const router = useRouter()
  
  const categories = ['all', 'Computer Vision', 'Machine Learning', 'Web Automation']
  
  const filteredProjects = selectedCategory === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === selectedCategory)

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`)
  }

  return (
    <div className="min-h-screen relative pt-24 pb-16">
      <InteractiveStarBackground variant="projects" />
      <ModernNavigation />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              My Projects
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto px-4">
              Real solutions for real problems. Explore my portfolio of innovative projects that showcase 
              my expertise in full-stack development, AI/ML, and computer vision.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-xs sm:text-sm lg:text-base ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg transform scale-105 animate-pulse-glow'
                    : 'glass-purple text-white/80 hover:bg-white/20 hover:text-white shadow-md hover:shadow-lg'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 px-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-enhanced interactive-glow rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Project Header */}
                <div className="relative h-40 sm:h-48 lg:h-64 bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center">
                  {project.featured && (
                    <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs sm:text-sm font-bold rounded-full animate-pulse-glow">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="text-4xl sm:text-6xl lg:text-8xl opacity-60 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                    {project.category === 'Computer Vision' && '👁️'}
                    {project.category === 'Machine Learning' && '🧠'}
                    {project.category === 'Web Automation' && '🤖'}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                      {project.description.length > 120 ? `${project.description.substring(0, 120)}...` : project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-purple-500/30 text-purple-100 text-xs sm:text-sm font-medium rounded-full border border-purple-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 sm:px-3 py-1 bg-purple-500/30 text-purple-100 text-xs sm:text-sm font-medium rounded-full border border-purple-400/30">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Features - Show only first 3 on mobile */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start text-white/80 text-xs sm:text-sm">
                          <span className="text-purple-300 mr-2 sm:mr-3 mt-1">•</span>
                          {feature.length > 60 ? `${feature.substring(0, 60)}...` : feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 sm:px-6 py-2 sm:py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-200 text-center font-medium backdrop-blur-sm border border-white/20 text-xs sm:text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github mr-1 sm:mr-2"></i>
                      <span className="hidden sm:inline">View Code</span>
                      <span className="sm:hidden">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-200 text-center font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs sm:text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt mr-1 sm:mr-2"></i>
                      <span className="hidden sm:inline">Live Demo</span>
                      <span className="sm:hidden">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center">
            <div className="glass-purple rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Explore More Projects</h3>
              <p className="text-xl mb-8 opacity-90">
                Check out my GitHub profile for more projects and contributions to open source.
              </p>
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm border border-white/20"
              >
                <i className="fab fa-github mr-3 text-2xl"></i>
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
