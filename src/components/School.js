// ../School.js

import React, { useState } from 'react';
import '../css/School.css';

function School() {
  const [showTowsonClasses, setShowTowsonClasses] = useState(false);
  const [showMontgomeryClasses, setShowMontgomeryClasses] = useState(false);

  const toggleTowsonClasses = () => setShowTowsonClasses(!showTowsonClasses);
  const toggleMontgomeryClasses = () => setShowMontgomeryClasses(!showMontgomeryClasses);

  return (
    <main className="school-container">
      <header className="tech-background">
        <span className="animated-grid"></span>
        <span className="code-rain"></span>
      </header>
      
      <h2 className="section-title">Educational <span className="highlight">Journey</span></h2>
      
      <article className="school-card towson">
        <header className="school-header">
          <figure className="school-logo-container">
            <span className="school-logo towson-logo"></span>
          </figure>
          <section className="school-info">
            <h2 className="school-name">Towson University</h2>
            <p className="school-degree">Bachelor of Science, Computer Science</p>
            <p className="school-years">2022 - July 2023</p>
          </section>
        </header>
        
        <nav className="school-actions">
          <a href="https://towson.edu" className="school-website-btn" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe"></i> Visit Website
          </a>
          <button onClick={toggleTowsonClasses} className="school-courses-btn">
            {showTowsonClasses ? 'Hide Courses' : 'View My Courses'} <i className={`fas fa-chevron-${showTowsonClasses ? 'up' : 'down'}`}></i>
          </button>
        </nav>
        
        {showTowsonClasses && (
          <section className="courses-container">
            <section className="course-category">
              <h3 className="category-title">Computer Science Core</h3>
              <section className="courses-grid">
                <article className="course-card">
                  <h4>COSC 336</h4>
                  <h5>Data Structures & Algorithm Analysis</h5>
                  <p>Studied key data structures like arrays, linked lists, trees, and graphs which are critical for software development.</p>
                </article>
                <article className="course-card">
                  <h4>COSC 290</h4>
                  <h5>Principles of Computer Organization</h5>
                  <p>Learned how computers work at a low level, including digital logic, assembly language, and computer architecture.</p>
                </article>
                <article className="course-card">
                  <h4>COSC 412</h4>
                  <h5>Software Engineering</h5>
                  <p>Studied industry best practices for software development like requirements analysis, system design, testing, and project management.</p>
                </article>
                <article className="course-card">
                  <h4>COSC 439</h4>
                  <h5>Operating Systems</h5>
                  <p>Learned how operating systems work and implement process management, memory management, file systems, and more.</p>
                </article>
                <article className="course-card">
                  <h4>COSC 484</h4>
                  <h5>Web-Based Programming</h5>
                  <p>Built dynamic websites using languages like HTML, CSS, JavaScript, PHP, and SQL databases.</p>
                </article>
                <article className="course-card">
                  <h4>COSC 350</h4>
                  <h5>Data Communications & Networking</h5>
                  <p>Studied how computer networks operate, including protocols, architecture, routing, and network applications.</p>
                </article>
                <article className="course-card">
                  <h4>COSC 436</h4>
                  <h5>Object-Oriented Design & Programming</h5>
                  <p>Applied object-oriented concepts like inheritance, polymorphism, and design patterns to build robust software.</p>
                </article>
                <article className="course-card">
                  <h4>COSC 455</h4>
                  <h5>Programming Languages: Design & Implementation</h5>
                  <p>Learned how programming languages are designed, including syntax, semantics, compilers, and interpreters.</p>
                </article>
                <article className="course-card">
                  <h4>COSC 457</h4>
                  <h5>Database Management Systems</h5>
                  <p>Studied database systems, data modeling, SQL, transaction processing, concurrency control, recovery, and more.</p>
                </article>
                <article className="course-card">
                  <h4>COSC 471</h4>
                  <h5>Computer Graphics</h5>
                  <p>Learned techniques for generating and rendering 2D and 3D graphics using libraries like OpenGL.</p>
                </article>
                <article className="course-card">
                  <h4>CIS 377</h4>
                  <h5>Introduction to Cybersecurity</h5>
                  <p>Studied core cybersecurity concepts like encryption, access control, and network security.</p>
                </article>
              </section>
            </section>
            
            <section className="course-category">
              <h3 className="category-title">Other Courses</h3>
              <section className="courses-grid">
                <article className="course-card">
                  <h4>ASTR 181</h4>
                  <h5>Stars, Galaxies & Early Universe</h5>
                  <p>Learned about astronomy which helps me understand the vastness of the universe.</p>
                </article>
                <article className="course-card">
                  <h4>MATH 330</h4>
                  <h5>Intro to Statistical Methods</h5>
                  <p>Learned statistical analysis methods which are important for data science.</p>
                </article>
                <article className="course-card">
                  <h4>ENGL 317</h4>
                  <h5>Writing for Business & Industry</h5>
                  <p>Developed professional writing skills for technical documents, reports, manuals, and business communications.</p>
                </article>
                <article className="course-card">
                  <h4>HLTH 101</h4>
                  <h5>Wellness for a Diverse Society</h5>
                  <p>Studied holistic wellness and health promotion for individuals and communities.</p>
                </article>
                <article className="course-card">
                  <h4>HLTH 220</h4>
                  <h5>Sexuality in Diverse Society</h5>
                  <p>Examined diverse human sexualities, relationships, sexual health and decision making.</p>
                </article>
              </section>
            </section>
          </section>
        )}
      </article>

      <article className="school-card montgomery">
        <header className="school-header">
          <figure className="school-logo-container">
            <span className="school-logo montgomery-logo"></span>
          </figure>
          <section className="school-info">
            <h2 className="school-name">Montgomery College</h2>
            <p className="school-degree">Associates of Arts, Computer Science</p>
            <p className="school-years">2019 - 2021</p>
          </section>
        </header>
        
        <nav className="school-actions">
          <a href="https://montgomerycollege.edu" className="school-website-btn" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe"></i> Visit Website
          </a>
          <button onClick={toggleMontgomeryClasses} className="school-courses-btn">
            {showMontgomeryClasses ? 'Hide Courses' : 'View My Courses'} <i className={`fas fa-chevron-${showMontgomeryClasses ? 'up' : 'down'}`}></i>
          </button>
        </nav>
        
        {showMontgomeryClasses && (
          <section className="courses-container">
            <section className="course-category">
              <h3 className="category-title">Computer Science Courses</h3>
              <section className="courses-grid">
                <article className="course-card">
                  <h4>CMSC 140</h4>
                  <h5>Intro to Programming</h5>
                  <p>Taught me the fundamentals of coding which was essential for computer science.</p>
                </article>
                <article className="course-card">
                  <h4>CMSC 204</h4>
                  <h5>Computer Science II</h5>
                  <p>Built on object-oriented programming principles.</p>
                </article>
                <article className="course-card">
                  <h4>CMSC 207</h4>
                  <h5>Discrete Structures</h5>
                  <p>Taught me mathematical logic needed for computer science. Online classes were hard for me to understand during COVID.</p>
                </article>
                <article className="course-card">
                  <h4>CMSC 203</h4>
                  <h5>Computer Science I</h5>
                  <p>Taught me object-oriented programming, a key concept. Online classes were hard for me to understand during COVID.</p>
                </article>
              </section>
            </section>
            
            <section className="course-category">
              <h3 className="category-title">Other Courses</h3>
              <section className="courses-grid">
                <article className="course-card">
                  <h4>AOSC 100</h4>
                  <h5>Weather &amp; Climate</h5>
                  <p>Involved data analysis which was useful for data science.</p>
                </article>
                <article className="course-card">
                  <h4>ENGL 102</h4>
                  <h5>Critical Reading/Writing/Research</h5>
                  <p>Taught me professional writing and research skills.</p>
                </article>
                <article className="course-card">
                  <h4>ELAI 990</h4>
                  <h5>Advanced Integrated Skills</h5>
                  <p>Improved my reading and writing which helped with documentation.</p>
                </article>
                <article className="course-card">
                  <h4>MATH 182</h4>
                  <h5>Calculus II</h5>
                  <p>Continued teaching me mathematical analysis relevant for programming.</p>
                </article>
                <article className="course-card">
                  <h4>PSYC 102</h4>
                  <h5>General Psychology</h5>
                  <p>Taught me how humans think which helped in user-centric design.</p>
                </article>
                <article className="course-card">
                  <h4>MATH 284</h4>
                  <h5>Linear Algebra</h5>
                  <p>Taught me matrix operations used for machine learning.</p>
                </article>
                <article className="course-card">
                  <h4>COMM 108</h4>
                  <h5>Foundations of Human Communication</h5>
                  <p>Taught me communication skills useful for collaborating.</p>
                </article>
                <article className="course-card">
                  <h4>ENGL 101</h4>
                  <h5>Intro to College Writing</h5>
                  <p>Taught me writing skills needed for documentation.</p>
                </article>
                <article className="course-card">
                  <h4>ENGL 011</h4>
                  <h5>College Writing Support</h5>
                  <p>Improved my writing skills needed for documentation.</p>
                </article>
                <article className="course-card">
                  <h4>GEOG 101</h4>
                  <h5>Intro to Geography</h5>
                  <p>Used GIS software applicable for programming spatial analysis.</p>
                </article>
                <article className="course-card">
                  <h4>MATH 181</h4>
                  <h5>Calculus I</h5>
                  <p>Taught me mathematical analysis relevant for algorithm design.</p>
                </article>
                <article className="course-card">
                  <h4>ARTT 102</h4>
                  <h5>Introduction to 2D Design</h5>
                  <p>Taught me digital design principles useful for computer graphics.</p>
                </article>
                <article className="course-card">
                  <h4>CMSC 110</h4>
                  <h5>Computer Concepts</h5>
                  <p>Taught me essential computer hardware and software knowledge.</p>
                </article>
              </section>
            </section>
          </section>
        )}
      </article>
    </main>
  );
}

export default School;