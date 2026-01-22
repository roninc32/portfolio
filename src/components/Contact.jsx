import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="section contact">
            <div className="contact-container">
                <h2 className="title">Interested in working together?</h2>
                <p className="subtitle">
                    I am always open to discussing product design work or partnership opportunities.
                </p>
                <a href="mailto:example@gmail.com" className="btn btn-primary contact-cta">
                    Say Hello
                </a>
            </div>

            <style>{`
        .contact {
          padding: 6rem 0;
          margin-top: 4rem;
          background: linear-gradient(to right, var(--color-bg), #fff);
          border-top: 1px solid var(--color-border);
        }

        .contact-container {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--color-text-primary);
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-cta {
          font-size: 1.125rem;
          padding: 1rem 2rem;
        }
      `}</style>
        </section>
    );
}