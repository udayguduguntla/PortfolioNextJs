'use client'

import HeroSection from './components/HeroSection'
import ModernNavigation from './components/ModernNavigation'
import InteractiveStarBackground from './components/InteractiveStarBackground'
import { portfolioData } from '@/data/portfolio'
import Link from 'next/link'

export default function Home() {
  const featuredProjects = portfolioData.projects.filter(project => project.featured).slice(0, 2)
  const skills = Object.entries(portfolioData.skills).slice(0, 2)

  return (
    <div className="overflow-x-hidden relative min-h-screen">
      <InteractiveStarBackground variant="default" />
      <ModernNavigation />

      <div className="relative z-10 pt-20">
        <HeroSection />

        {/* Quick Highlights Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Projects Preview */}
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Featured Projects
                </h2>
                <p className="text-purple-200 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4">
                  Showcasing Innovation Through Code
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group"
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      className="block"
                    >
                      <div className="purple-card p-4 sm:p-6 lg:p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-start mb-4 sm:mb-6">
                          <div className="text-2xl sm:text-3xl lg:text-4xl mr-3 sm:mr-4 p-2 sm:p-3 bg-purple-500/20 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-200">
                            {project.category === 'Computer Vision' && '👁️'}
                            {project.category === 'Machine Learning' && '🧠'}
                            {project.category === 'Web Automation' && '🤖'}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300 mb-1 sm:mb-2 truncate">
                              {project.title}
                            </h3>
                            <span className="inline-block px-2 sm:px-3 py-1 bg-purple-500/30 text-purple-200 text-xs sm:text-sm rounded-full border border-purple-400/30">
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base line-clamp-3">
                          {project.description.substring(0, 120)}...
                        </p>
                        <div className="mt-4 sm:mt-6 flex items-center text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                          <span className="text-xs sm:text-sm font-medium">View Project</span>
                          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/projects">
                  <div className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                    View All Projects
                    <span className="ml-2 sm:ml-3 text-lg sm:text-xl">
                      →
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Core Expertise</h2>
                <p className="text-purple-200 text-sm sm:text-base lg:text-lg">Technologies I work with</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                {skills.map(([category, skillList]) => (
                  <div key={category} className="purple-card p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                      <span className="text-xl sm:text-2xl mr-2 sm:mr-3">
                        {category === 'Programming Languages' && '💻'}
                        {category === 'Frameworks & Libraries' && '🚀'}
                        {category === 'Tools & Technologies' && '⚙️'}
                        {category === 'Databases' && '🗄️'}
                      </span>
                      <span className="truncate">{category}</span>
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skillList.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-500/30 to-purple-600/30 text-purple-100 text-xs sm:text-sm font-medium rounded-full border border-purple-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                      {skillList.length > 4 && (
                        <span className="px-2 sm:px-3 py-1 text-purple-300 text-xs sm:text-sm italic">
                          +{skillList.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 glass-purple text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base lg:text-lg"
                >
                  Learn More About Me
                  <span className="ml-2 sm:ml-3 text-lg sm:text-xl">👤</span>
                </Link>
              </div>
            </div>

            {/* Recent Achievements Preview */}
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Recent Achievements</h2>
                <p className="text-purple-200 text-sm sm:text-base lg:text-lg">Latest accomplishments and recognitions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                <div className="purple-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 glass-purple rounded-full flex items-center justify-center text-purple-200 text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0">
                      🧠
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white truncate">AINCAT 2025</h3>
                      <p className="text-purple-300 text-xs sm:text-sm">National Rank #3567</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Secured national ranking in India&apos;s Biggest Career Aptitude Test conducted by Naukri.com.
                  </p>
                </div>

                <div className="purple-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 glass-purple rounded-full flex items-center justify-center text-purple-200 text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0">
                      💻
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white truncate">TCS CodeVita S12</h3>
                      <p className="text-purple-300 text-xs sm:text-sm">Global Rank #7574</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Achieved global ranking in one of the world&apos;s largest coding competitions.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/achievements"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 glass-purple text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base lg:text-lg"
                >
                  View All Achievements
                  <span className="ml-2 sm:ml-3 text-lg sm:text-xl">🏆</span>
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="purple-card p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Portfolio Overview</h2>
                <p className="text-purple-200">Key metrics and achievements</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-4xl font-bold text-purple-300 mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
                  <div className="text-white text-sm">Projects</div>
                  <div className="text-xs text-purple-400 mt-1">Completed</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-purple-300 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-white text-sm">Technologies</div>
                  <div className="text-xs text-purple-400 mt-1">Mastered</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-purple-300 mb-2 group-hover:scale-110 transition-transform duration-300">2+</div>
                  <div className="text-white text-sm">Years</div>
                  <div className="text-xs text-purple-400 mt-1">Experience</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-purple-300 mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                  <div className="text-white text-sm">Passion</div>
                  <div className="text-xs text-purple-400 mt-1">For Coding</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
