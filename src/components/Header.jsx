import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          <div className="profile-thumb">
            {/* Placeholder for small avatar if needed, or just initials */}
            <span>RC</span>
          </div>
          <span className="name">Ronin Cabusao</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Work</a>
        </nav>

        <a href="#contact" className="btn btn-primary contact-btn">Contact Me</a>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          background: transparent;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          border-bottom: 1px solid transparent;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
          height: 70px;
        }

        .header-content {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.1rem;
          font-family: var(--font-display);
        }

        .profile-thumb {
          width: 32px;
          height: 32px;
          background: var(--color-text-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .nav-links a:hover {
          color: var(--color-text-primary);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .contact-btn { display: none; }
        }
      `}</style>
    </header>
  );
}