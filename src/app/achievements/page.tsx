'use client'

import { useState } from 'react'
import { portfolioData } from '@/data/portfolio'
import AntiqueNavigation from '../components/AntiqueNavigation'
import InteractiveStarBackground from '../components/InteractiveStarBackground'
import ImageModal from '../components/ImageModal'
import achievementsData from '@/data/achievements.json'

export default function AchievementsPage() {
  const realAchievements = achievementsData.achievements
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    title: string
    type: 'image' | 'pdf'
  } | null>(null)

  const openImageModal = (imageSrc: string, title: string, type: 'image' | 'pdf') => {
    setSelectedImage({ src: imageSrc, title, type })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen relative pt-24 pb-16">
      <InteractiveStarBackground variant="achievements" />
      <AntiqueNavigation />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vintage Header */}
          <div className="text-center mb-16 ornament">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-gray-800 mb-6">
              Honors & Distinctions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-accent">
              A Chronicle of Scholarly Pursuits, Triumphs, and Distinguished Accomplishments
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Educational Journey</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="glass-purple rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                          <span className="px-4 py-2 bg-purple-500/30 text-purple-100 rounded-full text-sm font-medium border border-purple-400/30">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-lg text-purple-300 font-semibold mb-3">{edu.institution}</p>
                        <p className="text-white/80 leading-relaxed">{edu.description}</p>
                        {edu.status === 'current' && (
                          <div className="mt-4 flex items-center text-green-400">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-sm font-medium">Currently Pursuing</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real Achievements Section */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">My Achievements</h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {realAchievements.map((achievement: any) => (
                <div key={achievement.id} className="glass-enhanced interactive-glow rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover-lift">
                  <div 
                    className="h-32 sm:h-40 lg:h-48 flex items-center justify-center relative overflow-hidden"
                    style={{ background: achievement.color }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center">
                      <i className={`${achievement.icon} text-4xl sm:text-5xl lg:text-6xl text-white/90 group-hover:scale-110 transition-transform duration-300`}></i>
                      <div className="mt-2 px-3 py-1 bg-white/20 rounded-full text-white text-xs font-bold">
                        {achievement.rank}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="mb-3">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-200 text-xs font-medium rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {achievement.description.length > 120 ? `${achievement.description.substring(0, 120)}...` : achievement.description}
                    </p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-white/60 mb-3">
                      <span className="flex items-center">
                        <i className="fas fa-calendar mr-1"></i>
                        {achievement.date}
                      </span>
                      <button 
                        onClick={() => openImageModal(`/images/${achievement.image}`, achievement.title, achievement.type)}
                        className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        <i className={`fas fa-${achievement.type === 'pdf' ? 'file-pdf' : 'image'} mr-1`}></i>
                        View {achievement.type === 'pdf' ? 'PDF' : 'Image'}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {achievement.tags.slice(0, 3).map((tag: any) => (
                        <span key={tag} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-20">
            {portfolioData.achievements.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-12">
                {/* Category Header */}
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {category.category}
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto rounded-full"></div>
                </div>

                {/* Category Items */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((achievement, index) => (
                    <div
                      key={index}
                      className="glass-purple rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                    >
                      {/* Icon */}
                      <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                            {achievement.title}
                          </h3>
                          <span className="inline-block px-4 py-2 text-sm text-purple-100 font-semibold bg-purple-500/30 rounded-full border border-purple-400/30">
                            {achievement.year}
                          </span>
                        </div>
                        
                        <p className="text-white/80 leading-relaxed text-center">
                          {achievement.description}
                        </p>
                      </div>

                      {/* Progress Indicator */}
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-white/60 font-medium">Status</span>
                          <span className={`font-semibold ${
                            achievement.year === 'Ongoing' ? 'text-purple-300' : 'text-green-400'
                          }`}>
                            {achievement.year === 'Ongoing' ? 'In Progress' : 'Completed'}
                          </span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full transition-all duration-500 ${
                              achievement.year === 'Ongoing' 
                                ? 'w-3/4 bg-gradient-to-r from-purple-500 to-purple-600' 
                                : 'w-full bg-gradient-to-r from-green-500 to-green-600'
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20">
            <div className="glass-purple rounded-2xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-6">Ready to Collaborate?</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's work together to create something amazing and impactful.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm border border-white/20"
              >
                <span>Get In Touch</span>
                <i className="fas fa-arrow-right ml-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeImageModal}
          imageSrc={selectedImage.src}
          title={selectedImage.title}
          type={selectedImage.type}
        />
      )}
    </div>
  )
}