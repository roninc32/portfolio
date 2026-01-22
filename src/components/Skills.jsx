import React from 'react';

export default function Skills() {
    const skills = [
        { category: 'Languages', items: 'JavaScript (ES6+), HTML5, CSS3, SQL, C#' },
        { category: 'Frontend', items: 'React.js, Next.js, Tailwind CSS, Redux, React Native' },
        { category: 'Backend', items: 'Node.js, Express.js, ASP.NET MVC, RESTful APIs' },
        { category: 'Database & Tools', items: 'MongoDB, Git/GitHub, Fiona, Postman, VS Code' }
    ];

    return (
        <section className="section">
            <h3 className="section-title">Skills</h3>

            <div className="skills-container">
                {skills.map((group, index) => (
                    <div key={index} className="skill-row">
                        <span className="skill-label">{group.category}:</span>
                        <span className="skill-list">{group.items}</span>
                    </div>
                ))}
            </div>

            <style>{`
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-row {
          display: flex;
          align-items: baseline;
        }

        .skill-label {
          width: 140px;
          font-weight: 600;
          color: var(--color-text-primary);
          flex-shrink: 0;
        }

        .skill-list {
          color: var(--color-text-primary);
          width: 100%;
        }

        @media (max-width: 600px) {
          .skill-row {
            flex-direction: column;
          }
          .skill-label {
            margin-bottom: 0.25rem;
          }
        }
      `}</style>
        </section>
    );
}
