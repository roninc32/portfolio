import React from 'react';

export default function About() {
    return (
        <section className="section about">
            <h3 className="section-title">About</h3>
            <p className="about-text">
                Highly motivated BSIT student with hands-on experience in full-stack development, specializing in ReactJS and ASP.NET MVC. Recently completed the ASI-Jumpstart Program at Alliance Software Inc., bridging the gap between academic theory and enterprise-level software delivery. Skilled in agile workflows, version control, and deployment automation, and seeking an internship to contribute to scalable web solutions.
            </p>

            <style>{`
        .about-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--color-text-primary);
        }
      `}</style>
        </section>
    );
}