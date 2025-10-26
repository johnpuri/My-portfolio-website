// ../CV.js

import React from 'react';
import '../css/CV.css';

function CV() {
  return (
    <main className="resume-container">
      <header className="tech-background">
        <span className="animated-grid"></span>
        <span className="code-rain"></span>
      </header>
      
      <h2 className="section-title">Professional <span className="highlight">Profile</span></h2>
      
      <section className="cv-section personal-info">
        <header className="section-header">
          <h2>PERSONAL INFORMATION</h2>
          <span className="section-line"></span>
        </header>
        <article className="cv-item centered-info">
          <div className="info-item">
            <i className="fas fa-user"></i>
            <span><strong>Name:</strong> John Purification</span>
          </div>
          <div className="info-row">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span><strong>Email:</strong> johnpuri33@gmail.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span><strong>Location:</strong> Raleigh, NC</span>
            </div>
          </div>
          <div className="info-item">
            <i className="fab fa-linkedin"></i>
            <span><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/john-purification/" target="_blank" rel="noopener noreferrer" className="white-link">linkedin.com/in/john-purification <i className="fas fa-external-link-alt link-icon"></i></a></span>
          </div>
          <div className="info-item">
            <i className="fab fa-github"></i>
            <span><strong>GitHub:</strong> <a href="https://github.com/johnpuri" target="_blank" rel="noopener noreferrer" className="white-link">github.com/johnpuri <i className="fas fa-external-link-alt link-icon"></i></a></span>
          </div>
        </article>
      </section>

      <section className="cv-content">
        <section className="cv-section">
          <header className="section-header">
            <h2>EDUCATION</h2>
            <span className="section-line"></span>
          </header>
          <article className="education-item">
            <header className="education-header">
              <h3>Bachelor of Science, Computer Science</h3>
              <span className="education-date">2022 – July 2023</span>
            </header>
            <p className="education-institution">Towson University, Towson, MD</p>
            <p className="education-details">Relevant courses: Data Structure and algorithm, Web Programming, Calculus etc.</p>
          </article>
          <article className="education-item">
            <header className="education-header">
              <h3>Associates of Arts, Computer Science</h3>
              <span className="education-date">2019 – 2021</span>
            </header>
            <p className="education-institution">Montgomery College, Takoma Park, MD</p>
          </article>
        </section>

        <section className="cv-section">
          <div className="section-header">
            <h2>SKILLS</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-container">
            <div className="skill-category">
              <div className="skill-item">
                <i className="fas fa-code"></i>
                <span>Java, JavaScript, HTML, CSS, NodeJS, MySQL</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-laptop-code"></i>
                <span>Front-End Frameworks: ReactJS</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-code-branch"></i>
                <span>Beginner: Python, F#, C++, Express, MongoDB</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-file-alt"></i>
                <span>Microsoft Office Suite (Word, Excel, etc.)</span>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-item">
                <i className="fas fa-cloud"></i>
                <span>Cloud: Intermediate in Google Cloud Platform (GCP) and Terraform cloud</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-users"></i>
                <span>Customer Service and teamwork in agile environment</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-brain"></i>
                <span>Fast learning and willingness of achieving knowledge</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-language"></i>
                <span>Languages: English, Bangla (Native) & French (Fluent)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <div className="section-header">
            <h2>EXPERIENCES</h2>
            <div className="section-line"></div>
          </div>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Deutsche Bank Grad Analyst - Technology, Data, and Innovation</h3>
              <span className="experience-date">Feb 2024-Present</span>
            </div>
            <p className="experience-location">Cary, NC</p>
            <ul className="experience-details">
              <li>Worked with the CTO team on developing Vertex AI integration with GitHub and building a dashboard to track JIRA metrics for CB Tech using java, spring, Vertex API, ReactJS etc.</li>
              <li>Managed Single Prime Record (SPR) application for PTA to manage all automated procedures to finalize a trade using Java, Quarkus, GCP, GitHub workflow and Cucumber.</li>
              <li>Managed and developed applications and services for Compliance team to monitor adherence to regulatory policies using Java (including relevant frameworks), Python, and SQL.</li>
              <li>Gained experience in agile development, microservices, and big data technologies.</li>
              <li>Enrolled in GCP ACE, Data engineering and Terraform training sprint.</li>
            </ul>
          </div>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Deutsche Bank Analyst Intern Program - Technology, Data, and Innovation</h3>
              <span className="experience-date">June-Sept 2023</span>
            </div>
            <p className="experience-location">Cary, NC</p>
            <ul className="experience-details">
              <li>Spearheaded integration of a Finite State Machine (FSM) visualization tool using Excel, DOT, and Graphviz-React to enhance user experience.</li>
              <li>Developed full-stack solution with SQL Server, Spring Boot API, and React JS for FSM tool integration.</li>
              <li>Created intern case study using Python web scraping and GCP machine learning with App Engine deployment.</li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <div className="section-header">
            <h2>RELEVANT COMPUTER SCIENCE PROJECTS</h2>
            <div className="section-line"></div>
          </div>
          <ul className="projects-list">
            <li className="project-item">
              <span className="project-title">CMSC 204:</span> Morse code converter using generic class & binary tree, Dijkstra's shortest path algorithm with implementation with Gui.
            </li>
            <li className="project-item">
              <span className="project-title">CMSC 203:</span> Usage of polymorphism and inheritance for a beverage shop program, Junit testing, Cryptography using ASCII table, Cipher and Bellaso Substitution.
            </li>
            <li className="project-item">
              <span className="project-title">COSC 484:</span> Built a job search website using ReactJS, JS, Express and MongoDB.
            </li>
            <li className="project-item">
              <span className="project-title">COSC 457:</span> Used database fundamentals and GUI using MySQL & Java Swing.
            </li>
          </ul>
        </section>

        <section className="cv-section">
          <div className="section-header">
            <h2>CAMPUS INVOLVEMENT</h2>
            <div className="section-line"></div>
          </div>
          <ul className="involvement-list">
            <li className="involvement-item">
              <span className="involvement-org">South Asian Students Association</span>
              <span className="involvement-period">Spring 2019-Fall 2021</span>
              <span className="involvement-location">(Montgomery College)</span>
            </li>
            <li className="involvement-item">
              <span className="involvement-org">International Students Association – Board Member</span>
              <span className="involvement-period">Fall 2022-Spring 2023</span>
              <span className="involvement-location">(Towson University)</span>
            </li>
            <li className="involvement-item">
              <span className="involvement-org">Software engineering club</span>
              <span className="involvement-location">(Towson University)</span>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default CV;