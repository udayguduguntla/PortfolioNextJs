import { portfolioData } from '@/data/portfolio'

export default function SkillsSection() {
  const skillCategories = Object.entries(portfolioData.skills)

  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return '💻'
      case 'Web Technologies':
        return '🌐'
      case 'AI/ML & Computer Vision':
        return '🧠'
      case 'Tools & Frameworks':
        return '🛠️'
      default:
        return '⚡'
    }
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build innovative solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(([category, skills]) => (
            <div
              key={category}
              className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-200">
                  {getSkillIcon(category)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl mb-4">🚀</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Always Learning</h4>
            <p className="text-gray-600">
              Continuously expanding my skillset with the latest technologies and best practices.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Problem Focused</h4>
            <p className="text-gray-600">
              I choose the right tools for each project, prioritizing efficiency and maintainability.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-3xl mb-4">🤝</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaborative</h4>
            <p className="text-gray-600">
              Experienced in working with teams and contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}