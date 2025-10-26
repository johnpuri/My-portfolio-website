import React, { useState } from 'react';
import '../css/Home.css';
import ContactModal from './ContactModal';

function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <main className="home-container">
      <section className="tech-background">
        <span className="animated-grid"></span>
        <span className="code-rain"></span>
      </section>
      
      <header className='header'>
        <h1 className='logo'>Tech <span className="highlight">Explorer</span></h1>
      </header>

      <section className='hero'>
        <section className='hero-content'>
          <span className="tech-badge">Software Engineer</span>
          <h2 className='hero-title'>Computer Science <span className="gradient-text">Graduate</span></h2>
          <p className='hero-description'>
            <span className="typing-text">Transforming ideas into innovative solutions</span>
          </p>
          <section className="button-container">
            <a href="https://github.com/johnpuri?tab=repositories" target="_blank" rel="noopener noreferrer">
              <button className='cta-button primary'>View Projects</button>
            </a>
            <button className='cta-button secondary' onClick={openContactModal}>Contact Me</button>
          </section>
        </section>
      </section>
      
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      <section className='skills' id='skills'>
        <h2 className="section-title">Technical <span className="highlight">Arsenal</span></h2>
        <section className='skills-grid'>
          <article className='skill-card'>
            <span className="skill-icon">⚛️</span>
            <h3>Full-Stack Development</h3>
            <section className="tech-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </section>
          </article>
          <article className='skill-card'>
            <span className="skill-icon">🔄</span>
            <h3>Data Structures</h3>
            <section className="tech-tags">
              <span>Arrays</span>
              <span>Trees</span>
              <span>Graphs</span>
            </section>
          </article>
          <article className='skill-card'>
            <span className="skill-icon">🧩</span>
            <h3>Algorithm Design</h3>
            <section className="tech-tags">
              <span>Sorting</span>
              <span>Searching</span>
              <span>Optimization</span>
            </section>
          </article>
          <article className='skill-card'>
            <span className="skill-icon">☁️</span>
            <h3>Cloud Computing</h3>
            <section className="tech-tags">
              <span>AWS</span>
              <span>Azure</span>
              <span>GCP</span>
            </section>
          </article>
          <article className='skill-card'>
            <span className="skill-icon">🗄️</span>
            <h3>Database Management</h3>
            <section className="tech-tags">
              <span>SQL</span>
              <span>NoSQL</span>
              <span>ORM</span>
            </section>
          </article>
          <article className='skill-card'>
            <span className="skill-icon">🏗️</span>
            <h3>System Architecture</h3>
            <section className="tech-tags">
              <span>Microservices</span>
              <span>Serverless</span>
              <span>API Design</span>
            </section>
          </article>
        </section>
      </section>

      <section className='future-tech'>
        <h2 className="section-title">Future <span className="highlight">Aspirations</span></h2>
        <section className='tech-cards'>
          <article className='tech-card'>
            <span className="tech-icon">🤖</span>
            <h3>AI/ML Engineer</h3>
          </article>
          <article className='tech-card'>
            <span className="tech-icon">🌐</span>
            <h3>Cloud Architect</h3>
          </article>
          <article className='tech-card'>
            <span className="tech-icon">⚙️</span>
            <h3>DevOps Specialist</h3>
          </article>
        </section>
      </section>
    </main>
  );
}


export default Home;