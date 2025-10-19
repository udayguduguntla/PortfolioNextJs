export default function ServicesSection() {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Full Stack Development',
      description: 'Building scalable web applications using modern technologies like React, Node.js, Python, and Flask with clean, maintainable code.',
      features: [
        'Responsive Web Design',
        'RESTful API Development',
        'Database Design & Optimization',
        'Performance Optimization'
      ]
    },
    {
      icon: 'fas fa-brain',
      title: 'AI & Machine Learning',
      description: 'Developing intelligent systems using computer vision, natural language processing, and machine learning algorithms to solve complex problems.',
      features: [
        'Computer Vision Solutions',
        'Image Recognition Systems',
        'Data Analysis & Modeling',
        'AI-Powered Applications'
      ]
    },
    {
      icon: 'fas fa-universal-access',
      title: 'Accessibility Technology',
      description: 'Creating inclusive digital experiences that make technology accessible to everyone, including people with disabilities and special needs.',
      features: [
        'Assistive Technology Development',
        'WCAG Compliance',
        'Voice-Enabled Interfaces',
        'Inclusive Design Principles'
      ]
    }
  ]

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-cogs"></i>
            <span>What I Do</span>
          </div>
          <h2 className="section-title">Turning Ideas Into Digital Reality</h2>
          <p className="section-subtitle">Specialized in creating innovative solutions that make a difference</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 6rem 0;
          background: rgba(15, 23, 42, 0.5);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-card {
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          background: rgba(30, 41, 59, 0.8);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-size: 2rem;
          color: white;
        }

        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .service-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
        }

        .service-features li {
          color: var(--text-secondary);
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}