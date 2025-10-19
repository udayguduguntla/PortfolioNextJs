import { portfolioData } from '@/data/portfolio'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key accomplishments and milestones in my journey as a developer and student.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="space-y-12">
          {portfolioData.achievements.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.category}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>

              {/* Category Items */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    {/* Icon */}
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                      {achievement.icon}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {achievement.title}
                        </h4>
                        <span className="text-sm text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="text-blue-600 font-medium">
                          {achievement.year === 'Ongoing' ? 'In Progress' : 'Completed'}
                        </span>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ${
                            achievement.year === 'Ongoing' ? 'w-3/4' : 'w-full'
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
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Create Something Amazing Together?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium shadow-lg"
            >
              <span>Get In Touch</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}