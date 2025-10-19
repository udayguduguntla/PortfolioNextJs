export default function FeaturedProjects() {
  const mainProject = {
    title: 'Live Camera Color Detection',
    category: 'Accessibility Technology',
    description: 'Revolutionary accessibility tool that helps color-blind individuals identify colors in real-time through live camera feed with voice feedback and audio descriptions.',
    features: [
      { icon: 'fas fa-microphone', text: 'Voice Feedback' },
      { icon: 'fas fa-camera', text: 'Real-time Processing' },
      { icon: 'fas fa-universal-access', text: 'Accessibility Focused' }
    ],
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Flask'],
    stats: [
      { number: '95%', label: 'Accuracy' },
      { number: 'Real-time', label: 'Processing' }
    ],
    demoLink: '/reference-pages/demos/color-detection.html',
    githubLink: 'https://github.com/udayguduguntla'
  }

  const otherProjects = [
    {
      title: 'Smart Attendance System',
      category: 'AI & Machine Learning',
      description: 'Intelligent facial recognition system for automated attendance management with real-time detection and comprehensive reporting.',
      technologies: ['Python', 'Flask', 'Face Recognition'],
      demoLink: '/reference-pages/demos/face-attendance.html',
      githubLink: 'https://github.com/udayguduguntla',
      icon: 'fas fa-user-check'
    },
    {
      title: 'Advanced File Manager',
      category: 'Web Development',
      description: 'Complete file management system with recycle bin, favicon generator, and comprehensive file operations built with vanilla JavaScript.',
      technologies: ['JavaScript', 'CSS3', 'HTML5'],
      demoLink: '/reference-pages/demos/file-manager.html',
      githubLink: 'https://github.com/udayguduguntla',
      icon: 'fas fa-folder-open'
    }
  ]

  return (
    <section id="projects" className="featured-projects">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-rocket"></i>
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">Projects That Make a Difference</h2>
          <p className="section-subtitle">Real-world solutions built with cutting-edge technology</p>
        </div>
        
        <div className="featured-grid">
          <div className="featured-project main-project">
            <div className="project-image">
              <div className="project-overlay">
                <div className="project-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <div className="project-links">
                  <a href={mainProject.demoLink} className="project-link">
                    <i className="fas fa-play"></i>
                  </a>
                  <a href={mainProject.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-category">{mainProject.category}</div>
              <h3>{mainProject.title}</h3>
              <p>{mainProject.description}</p>
              <div className="project-features">
                {mainProject.features.map((feature, index) => (
                  <span key={index} className="feature-tag">
                    <i className={feature.icon}></i>
                    {feature.text}
                  </span>
                ))}
              </div>
              <div className="project-tech">
                {mainProject.technologies.map((tech, index) => (
                  <span key={index} className={`tech-tag ${tech.toLowerCase()}`}>{tech}</span>
                ))}
              </div>
              <div className="project-stats">
                {mainProject.stats.map((stat, index) => (
                  <div key={index} className="stat">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {otherProjects.map((project, index) => (
            <div key={index} className="featured-project">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-icon">
                    <i className={project.icon}></i>
                  </div>
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link">
                      <i className="fas fa-play"></i>
                    </a>
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`tech-tag ${tech.toLowerCase()}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-cta">
          <a href="/reference-pages/projects.html" className="btn btn-primary btn-large">
            <i className="fas fa-code"></i>
            Explore All Projects
          </a>
          <a href="/reference-pages/demos/index.html" className="btn btn-secondary btn-large">
            <i className="fas fa-play"></i>
            Try Live Demos
          </a>
        </div>
      </div>

      <style jsx>{`
        .featured-projects {
          padding: 6rem 0;
          background: rgba(15, 23, 42, 0.8);
        }

        .featured-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .featured-project {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }

        .featured-project:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .main-project {
          grid-row: span 2;
        }

        .project-image {
          height: 200px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
          position: relative;
          overflow: hidden;
        }

        .main-project .project-image {
          height: 300px;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .project-image:hover .project-overlay {
          opacity: 1;
        }

        .project-icon {
          font-size: 3rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          width: 50px;
          height: 50px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-color);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }

        .project-content {
          padding: 1.5rem;
        }

        .main-project .project-content {
          padding: 2rem;
        }

        .project-category {
          color: var(--primary-color);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .project-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .main-project .project-content h3 {
          font-size: 1.5rem;
        }

        .project-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .feature-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 0.5rem;
          color: var(--primary-color);
          font-size: 0.85rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          color: var(--text-secondary);
          font-size: 0.8rem;
        }

        .tech-tag.python { background: rgba(55, 118, 171, 0.2); color: #3776ab; }
        .tech-tag.opencv { background: rgba(92, 184, 92, 0.2); color: #5cb85c; }
        .tech-tag.flask { background: rgba(255, 255, 255, 0.2); color: #ffffff; }
        .tech-tag.javascript { background: rgba(240, 219, 79, 0.2); color: #f0db4f; }
        .tech-tag.css3 { background: rgba(21, 114, 182, 0.2); color: #1572b6; }
        .tech-tag.html5 { background: rgba(227, 79, 38, 0.2); color: #e34f26; }

        .project-stats {
          display: flex;
          gap: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .section-cta {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }

          .main-project {
            grid-row: span 1;
          }

          .project-image {
            height: 150px;
          }

          .main-project .project-image {
            height: 200px;
          }

          .section-cta {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  )
}