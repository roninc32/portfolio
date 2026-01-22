import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Development Trainee (ASI-Jumpstart)',
      company: 'Alliance Software Inc.',
      period: 'Aug 2025 — Present',
      points: [
        'Completed an intensive industry-preparation training program focusing on professional software development workflows.',
        'Gained practical exposure to agile team collaboration and industry-standard coding conventions.',
        'Participated in code reviews and debugging sessions, strengthening problem-solving skills and attention to detail in production-ready code.'
      ]
    }
  ];

  return (
    <section className="section">
      <h3 className="section-title">Experience</h3>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="exp-header">
              <div className="company-role">
                <span className="company">{exp.company}</span>
                <span className="role-divider">|</span>
                <span className="role">{exp.role}</span>
              </div>
              <span className="period">{exp.period}</span>
            </div>

            <ul className="points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        .section-title {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text-secondary);
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .experience-item {
          margin-bottom: 2rem;
        }

        .experience-item:last-child {
          margin-bottom: 0;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .company {
          font-weight: 700;
          color: var(--color-text-primary);
          font-size: 1.1rem;
        }
        
        .role-divider {
          margin: 0 0.5rem;
          color: var(--color-text-secondary);
        }

        .role {
          color: var(--color-text-primary);
          font-weight: 500;
        }

        .period {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          white-space: nowrap;
        }

        .points {
          list-style-type: disc;
          padding-left: 1.25rem;
          color: var(--color-text-primary);
        }

        .points li {
          margin-bottom: 0.25rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
