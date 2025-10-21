import HeroSection from './components/HeroSection'
import AntiqueNavigation from './components/AntiqueNavigation'
import InteractiveStarBackground from './components/InteractiveStarBackground'
import { portfolioData } from '@/data/portfolio'
import Link from 'next/link'

export default function Home() {
  const featuredProjects = portfolioData.projects.filter(project => project.featured).slice(0, 2)
  const skills = Object.entries(portfolioData.skills).slice(0, 2)

  return (
    <div className="overflow-x-hidden relative min-h-screen">
      <InteractiveStarBackground variant="default" />
      <AntiqueNavigation />

      <div className="relative z-10">
        <HeroSection />

        {/* Quick Highlights Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Projects Preview */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-purple-200 text-lg">Showcasing Innovation Through Code</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="purple-card p-6 hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {project.category === 'Computer Vision' && '👁️'}
                        {project.category === 'Machine Learning' && '🧠'}
                        {project.category === 'Web Automation' && '🤖'}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-purple-300 text-sm">{project.category}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description.substring(0, 120)}...
                    </p>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-8 py-4 glass-purple text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-lg"
                >
                  View All Projects
                  <span className="ml-3 text-xl">→</span>
                </Link>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Core Expertise</h2>
                <p className="text-purple-200 text-lg">Technologies I work with</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {skills.map(([category, skillList]) => (
                  <div key={category} className="purple-card p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-2xl mr-3">
                        {category === 'Programming Languages' && '💻'}
                        {category === 'Frameworks & Libraries' && '🚀'}
                        {category === 'Tools & Technologies' && '⚙️'}
                        {category === 'Databases' && '🗄️'}
                      </span>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-purple-600/30 text-purple-100 text-sm font-medium rounded-full border border-purple-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                      {skillList.length > 4 && (
                        <span className="px-3 py-1 text-purple-300 text-sm italic">
                          +{skillList.length - 4} more...
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 glass-purple text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-lg"
                >
                  Learn More About Me
                  <span className="ml-3 text-xl">👤</span>
                </Link>
              </div>
            </div>

            {/* Recent Achievements Preview */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Recent Achievements</h2>
                <p className="text-purple-200 text-lg">Latest accomplishments and recognitions</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="purple-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 glass-purple rounded-full flex items-center justify-center text-purple-200 text-xl mr-4">
                      🧠
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">AINCAT 2025</h3>
                      <p className="text-purple-300 text-sm">National Rank #3567</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Secured national ranking in India's Biggest Career Aptitude Test conducted by Naukri.com among thousands of participants.
                  </p>
                </div>

                <div className="purple-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 glass-purple rounded-full flex items-center justify-center text-purple-200 text-xl mr-4">
                      💻
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">TCS CodeVita Season 12</h3>
                      <p className="text-purple-300 text-sm">Global Rank #7574</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Achieved global ranking in one of the world's largest coding competitions, demonstrating exceptional problem-solving skills.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/achievements"
                  className="inline-flex items-center px-8 py-4 glass-purple text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-lg"
                >
                  View All Achievements
                  <span className="ml-3 text-xl">🏆</span>
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