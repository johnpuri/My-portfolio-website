// ../CV.js

import React from 'react';
import '../css/CV.css';

const CV = () => {
  return (
    <div className="a4-page">
      <header id="header">
        <h1>John Purification</h1>
        <a href="mailto:johnpuri33@gmail.com" target="_blank" rel="noopener noreferrer">
          johnpuri33@gmail.com
        </a>
      </header>

      <div className="header1">
        <a href="https://www.linkedin.com/in/john-purification/" target="_blank" rel="noopener noreferrer">LinkedIn</a> •
        <a href="https://github.com/johnpuri" target="_blank" rel="noopener noreferrer">GitHub</a>
        <p>johnpuri33@gmail.com • Silver Spring, MD</p>
      </div>

      <section>
        <h2 className="alert">EDUCATION</h2>
        <h3 id="course-name">Bachelor of Science in Computer Science</h3>
        <ul>
          <li>Relevant courses completed: Data Structure and algorithm, Web Programming, DMBS, Statistics, Object-Oriented Programming</li>
        </ul>

        <h3 id="course-name">Associates of Arts in Computer Science</h3>
        <ul>
          <li>Relevant courses completed: Discrete math, Calculus, Linear Algebra, SQL on Oracle Cloud, Advanced Java, Data Science</li>
        </ul>
      </section>

      <section>
        <h2 className="alert">SKILLS</h2>
        <ul>
          <li id="course-name">Java, JavaScript, HTML, CSS, NodeJS, MySQL</li>
          <li id="course-name">Front-End Frameworks: ReactJS</li>
          <li id="course-name">Beginner: Python, F#, C++, Express, MongoDB</li>
          <li id="course-name">Microsoft Office Suite (Word, Excel, etc.)</li>
          <li>Fast learning and willingness of achieving knowledge</li>
          <li>Customer Service and teamwork in agile environment</li>
          <li>Mechanical Technical Skills, including automotive and industrial setting</li>
          <li id="course-name">Languages: English, Bangla (Native), French (Fluent) & Hindi (Fluent)</li>
        </ul>
      </section>

      <section>
        <h2 className="alert">EXPERIENCE</h2>
        <h3>Team Member --Digital Learning Center, Montgomery College, Silver Spring, MD</h3>
        <ul>
          <li>Helped students with their digital aid in person and virtually with computer knowledge and usage.</li>
          <li>Communication and leadership experience with users, teams, and management to collect requirements, define usage, and technical support.</li>
          <li>Curiosity and interested in problem solving skills through logic and algorithms.</li>
        </ul>

        <h3>Deutsche Bank Analyst Program - Technology, Data, and Innovation, Cary, NC</h3>
        <ul>
          <li>Worked as a part of a creative, collaborative, and innovative team in the Technology, Data, and Innovation (TDI) department of Deutsche Bank.</li>
          <li>Contributed to the modernization and development of engineering solutions to reduce complexity and risk and drive business growth.</li>
          <li>Analyze business data within the organization's database to inform plans and deliveries, enhancing infrastructure capabilities and functions using standard design patterns for strategic DB frameworks like Fabric, Autobahn, GLUE.</li>
        </ul>
      </section>

      <section>
        <h2 className="alert">RELEVANT COMPUTER SCIENCE PROJECTS</h2>
        <ul>
          <li>CMSC 204: Morse code convertor using generic class & binary tree, Dijkstra's shortest path algorithm with implementation with GUI</li>
          <li>CMSC 203: Usage of polymorphism and inheritance for a beverage shop program, Junit testing, Cryptography using ASCII table, Cipher and Bellaso Substitution</li>
          <li>COSC 484: Built a job search website using ReactJS, JS, Express and MongoDB</li>
          <li>COSC 457: Used database fundamentals and GUI using MySQL & Java Swing</li>
        </ul>
      </section>

      <section>
        <h2 className="alert">CAMPUS INVOLVEMENT</h2>
        <ul>
          <li>South Asian Students Association (Montgomery College)</li>
          <li>International Students Association -- Board Member (Towson University)</li>
          <li>Software engineering club (Towson University)</li>
        </ul>
      </section>

      <section>
        <h3 className="alert">Declaration</h3>
        <p>I hereby declare that the details furnished above are true and correct to the best of my knowledge and belief.</p>
      </section>
    </div>
  );
};

export default CV;