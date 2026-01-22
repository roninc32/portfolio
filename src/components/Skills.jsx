import React from 'react';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'ASP.NET MVC', 'C#', 'SQL']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Agile', 'MSSQL', 'REST APIs']
    }
  ];

  return (
    <section id="skills" className="section">
      <h3 className="section-title">Skills</h3>

      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h4 className="skill-category">{skillGroup.category}</h4>
            <div className="skill-items">
              {skillGroup.items.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .skill-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .skill-category {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin: 0;
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          display: inline-block;
          padding: 0.4rem 0.8rem;
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          font-size: 0.9rem;
          color: var(--color-text-primary);
          transition: all var(--transition-fast);
        }

        .skill-tag:hover {
          background-color: var(--color-accent);
          color: white;
          border-color: var(--color-accent);
        }

        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
