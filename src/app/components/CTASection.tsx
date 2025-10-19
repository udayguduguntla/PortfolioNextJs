export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">Ready to Build Something Amazing?</h2>
            <p className="cta-subtitle">
              Let&apos;s collaborate and turn your ideas into reality. I&apos;m always excited to work on innovative projects.
            </p>
          </div>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary btn-large cta-btn">
              <i className="fas fa-rocket"></i>
              Start a Project
            </a>
            <a href="#projects" className="btn btn-secondary btn-large cta-btn">
              <i className="fas fa-eye"></i>
              View My Work
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--text-primary), var(--primary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
        }

        .cta-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          min-width: 200px;
        }

        @media (max-width: 768px) {
          .cta-title {
            font-size: 2.5rem;
          }

          .cta-subtitle {
            font-size: 1.1rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  )
}