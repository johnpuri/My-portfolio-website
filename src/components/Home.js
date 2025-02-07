import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <div>
      <div className='shape-container'></div>
      <header className='header'>
        <h1 className='logo'>Tech Explorer</h1>
        <nav className='nav'>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      <section className='hero'>
        <div className='hero-content'>
          <h2 className='hero-title'>Computer Science Graduate</h2>
          <p className='hero-description'>Transforming ideas into innovative solutions</p>
          <button className='cta-button'>Learn More</button>
        </div>
      </section>

      <section className='skills' id='skills'>
        <h2>Technical Arsenal</h2>
        <div className='skills-grid'>
          <div className='skill-card'>Full-Stack Development</div>
          <div className='skill-card'>Data Structures</div>
          <div className='skill-card'>Algorithm Design</div>
          <div className='skill-card'>Cloud Computing</div>
          <div className='skill-card'>Database Management</div>
          <div className='skill-card'>System Architecture</div>
        </div>
      </section>

      <section className='future-tech'>
        <h2>Future Aspirations</h2>
        <div className='tech-cards'>
          <div className='tech-card'>AI/ML Engineer</div>
          <div className='tech-card'>Cloud Architect</div>
          <div className='tech-card'>DevOps Specialist</div>
        </div>
      </section>
    </div>
  );
}


export default Home;