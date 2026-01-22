import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="profile-header">
      <div className="header-top">
        <div className="main-info">
          <h1>Ronin Cabusao</h1>
          <h2 className="role">Software Developer</h2>
          <div className="contact-info">
            <span>Cebu City, PH</span>
            <span className="dot">•</span>
            <a href="mailto:roninc32@gmail.com">roninc32@gmail.com</a>
            <span className="dot">•</span>
            <a href="https://www.linkedin.com/in/ronin-dev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="dot">•</span>
            <a href="https://github.com/roninc32" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <style>{`
        .profile-header {
          padding-bottom: 2rem;
          border-bottom: 2px solid var(--color-text-primary);
          margin-bottom: 0;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.25rem;
          letter-spacing: -0.02em;
        }

        .role {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
          font-family: var(--font-sans);
        }

        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        .contact-info a {
          color: var(--color-text-primary);
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .contact-info a:hover {
          color: var(--color-accent);
        }

        .dot {
          color: var(--color-text-secondary);
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
          .contact-info {
            flex-direction: column;
            gap: 0.25rem;
          }
          .dot {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}