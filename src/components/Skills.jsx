import React from 'react';

export default function Projects() {
    const projects = [
        {
            title: 'CasaHeights',
            stack: 'C#, ASP.NET MVC, MSSQL',
            points: [
                'Web-based community management portal streamlining residential operations.',
                'Features a conflict-free Facility Booking System and an Issue Reporting Module for maintenance tracking.'
            ]
        },
        {
            title: 'Captain Lucas',
            stack: 'ReactJS, Tailwind CSS, Vercel',
            points: [
                'Fully responsive digital invitation web app with a custom mobile-first aviation design.',
                'Deployed via Vercel for high availability, utilizing React components for a dynamic user experience.'
            ]
        }
    ];

    return (
        <section className="section">
            <h3 className="section-title">Selected Projects</h3>

            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <div className="project-header">
                            <span className="project-title">{project.title}</span>
                            <span className="separator">|</span>
                            <span className="project-stack">{project.stack}</span>
                        </div>
                        <ul className="project-points">
                            {project.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <style>{`
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .project-header {
          display: flex;
          gap: 0.5rem;
          align-items: baseline;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .project-title {
          font-weight: 700;
          color: var(--color-text-primary);
          font-size: 1.05rem;
        }

        .separator {
          color: var(--color-text-secondary);
        }

        .project-stack {
          font-family: var(--font-sans);
          font-style: italic;
          color: var(--color-text-secondary);
          font-size: 0.95rem;
        }

        .project-points {
          list-style-type: disc;
          padding-left: 1.25rem;
          color: var(--color-text-primary);
        }

        .project-points li {
          margin-bottom: 0.25rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>
        </section>
    );
}