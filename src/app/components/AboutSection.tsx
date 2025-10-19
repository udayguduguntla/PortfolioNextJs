import { portfolioData } from '@/data/portfolio'

export default function AboutSection() {
  const highlights = [
    {
      icon: '🎯',
      title: 'Goal-Oriented',
      description: 'Focused on delivering results and achieving objectives with precision and dedication'
    },
    {
      icon: '💻',
      title: 'Technical Expertise',
      description: 'Proficient in modern web technologies, programming languages, and development frameworks'
    },
    {
      icon: '💡',
      title: 'Problem Solver',
      description: 'Creative approach to solving complex technical challenges with innovative solutions'
    },
    {
      icon: '👥',
      title: 'Team Player',
      description: 'Excellent collaboration and communication skills in diverse team environments'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                About Me
              </h2>
              <h3 className="text-xl text-blue-600 font-semibold">
                {portfolioData.personal.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {portfolioData.personal.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently pursuing <strong>Master's in Computer Applications</strong> at Narayana Engineering College, 
                I combine academic excellence with practical experience in <strong>competitive programming</strong> 
                and <strong>full-stack development</strong>.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Education</h4>
              <div className="space-y-4">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-gray-900">{edu.degree}</h5>
                      <span className="text-sm text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200 group"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">4+</div>
                <div className="text-sm opacity-90">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm opacity-90">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm opacity-90">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}