export default function ImpactSection() {
  const impactStats = [
    {
      icon: 'fas fa-users',
      number: '500+',
      label: 'People Helped',
      description: 'Through accessibility-focused applications'
    },
    {
      icon: 'fas fa-eye',
      number: '95%',
      label: 'Accuracy Rate',
      description: 'In color detection and recognition systems'
    },
    {
      icon: 'fas fa-clock',
      number: 'Real-time',
      label: 'Processing',
      description: 'Instant results for better user experience'
    }
  ]

  const testimonials = [
    {
      content: "The color detection system has been a game-changer for me. As someone with color blindness, this tool helps me identify colors accurately in my daily life.",
      author: "Sarah Johnson",
      role: "Beta Tester"
    },
    {
      content: "Uday's approach to accessibility technology is impressive. His solutions are not just functional but truly user-centered and impactful.",
      author: "Dr. Michael Chen",
      role: "Accessibility Researcher"
    }
  ]

  return (
    <section className="impact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-heart"></i>
            <span>Impact</span>
          </div>
          <h2 className="section-title">Making Technology Accessible for Everyone</h2>
          <p className="section-subtitle">Building solutions that create real-world impact</p>
        </div>
        
        <div className="impact-grid">
          {impactStats.map((stat, index) => (
            <div key={index} className="impact-card">
              <div className="impact-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="impact-number">{stat.number}</div>
              <div className="impact-label">{stat.label}</div>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .impact-section {
          padding: 6rem 0;
          background: rgba(30, 41, 59, 0.3);
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .impact-card {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          transition: all 0.3s ease;
        }

        .impact-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.1);
        }

        .impact-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          color: white;
        }

        .impact-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .impact-label {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .impact-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .testimonials {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }

        .testimonial-content {
          margin-bottom: 1.5rem;
        }

        .testimonial-content i {
          font-size: 1.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .testimonial-content p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-style: italic;
        }

        .author-info h4 {
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .author-info span {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .testimonials {
            grid-template-columns: 1fr;
          }

          .impact-card {
            padding: 1.5rem;
          }

          .impact-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .impact-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}