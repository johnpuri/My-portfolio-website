// ../School.js

import React, { useState } from 'react';
import '../css/School.css';

const School = () => {
  const [showTowsonClasses, setShowTowsonClasses] = useState(false);
  const [showMontgomeryClasses, setShowMontgomeryClasses] = useState(false);

  const toggleTowsonClasses = () => setShowTowsonClasses(!showTowsonClasses);
  const toggleMontgomeryClasses = () => setShowMontgomeryClasses(!showMontgomeryClasses);

  return (
    <div>
      <section className="section bg-yellow-500 text-black py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Towson University</h1>
          <a href="https://towson.edu" className="website_button" target="_blank" rel="noopener noreferrer">
            Go to Towson University
          </a>
          <button onClick={toggleTowsonClasses} className="dropbtn">
            Click here to see classes I took at Towson University
          </button>
          {showTowsonClasses && (
            <div className="grid">
              {/* Towson University classes */}
              <div class="column">
             <h3>ASTR 181 - Stars, Galaxies & Early Universe</h3>
            <p>Learned about astronomy which helps me understand the vastness of the universe.</p>
            <h3>COSC 336 - Data Structures & Algorithm Analysis</h3>
            <p>Studied key data structures like arrays, linked lists, trees, and graphs which are critical for software development.</p>
            <h3>MATH 330 - Intro to Statistical Methods</h3>
            <p>Learned statistical analysis methods which are important for data science.</p>
            <h3>CIS 377 - Introduction to Cybersecurity</h3>
            <p>Studied core cybersecurity concepts like encryption, access control, and network security.</p>
            <h3>COSC 290 - Principles of Computer Organization</h3>
            <p>Learned how computers work at a low level, including digital logic, assembly language, and computer architecture.</p>
            </div>
            <div class="column">
            <h3>COSC 412 - Software Engineering</h3>
            <p>Studied industry best practices for software development like requirements analysis, system design, testing, and project management.</p>
            <h3>COSC 439 - Operating Systems</h3>
            <p>Learned how operating systems work and implement process management, memory management, file systems, and more.</p>
            <h3>COSC 484 - Web-Based Programming</h3>
            <p>Built dynamic websites using languages like HTML, CSS, JavaScript, PHP, and SQL databases.</p>
            <h3>ENGL 317 - Writing for Business & Industry</h3>
            <p>Developed professional writing skills for technical documents, reports, manuals, and business communications.</p>
            <h3>COSC 350 - Data Communications & Networking</h3>
            <p>Studied how computer networks operate, including protocols, architecture, routing, and network applications.</p>
            <h3>COSC 436 - Object-Oriented Design & Programming</h3>
            <p>Applied object-oriented concepts like inheritance, polymorphism, and design patterns to build robust software.</p>
            </div>
            <div class="column">
            <h3>COSC 455 - Programming Languages: Design & Implementation</h3>
            <p>Learned how programming languages are designed, including syntax, semantics, compilers, and interpreters.</p>
            <h3>COSC 457 - Database Management Systems</h3>
            <p>Studied database systems, data modeling, SQL, transaction processing, concurrency control, recovery, and more.</p>
            <h3>COSC 471 - Computer Graphics</h3>
            <p>Learned techniques for generating and rendering 2D and 3D graphics using libraries like OpenGL.</p>
            <h3>HLTH 101 - Wellness for a Diverse Society</h3>
            <p>Studied holistic wellness and health promotion for individuals and communities.</p>
            <h3>HLTH 220 - Sexuality in Diverse Society</h3>
            <p>Examined diverse human sexualities, relationships, sexual health and decision making.</p>
         </div>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-purple-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Montgomery College</h1>
          <a href="https://www.montgomerycollege.edu/" className="website_button" target="_blank" rel="noopener noreferrer">
            Go to Montgomery College
          </a>
          <button onClick={toggleMontgomeryClasses} className="dropbtn">
            Click here to see classes I took at Montgomery College
          </button>
          {showMontgomeryClasses && (
            <div className="grid">
              {/* Montgomery College classes */}
              <div class="column">
            <h3>CMSC 140 - Intro to Programming</h3>
            <p>Taught me the fundamentals of coding which was essential for computer science.</p>
            <h3>ENGL 102 - Critical Reading/Writing/Research</h3>
            <p>Taught me professional writing and research skills.</p>
            <h3>ELAI 990 - Advanced Integrated Skills</h3>
            <p>Improved my reading and writing which helped with documentation.</p>
            <h3>MATH 182 - Calculus II </h3>
            <p>Continued teaching me mathematical analysis relevant for programming. Online classes were hard for me to understand during COVID.</p>
            <h3>PSYC 102 - General Psychology</h3>
            <p>Taught me how humans think which helped in user-centric design.</p>
            <h3>CMSC 204 - Computer Science II</h3>
            <p>Built on object-oriented programming principles.</p>
          </div>
           <div class="column">
            <h3>AOSC 100 - Weather &amp; Climate</h3>
            <p>Involved data analysis which was useful for data science.</p>
            <h3>CMSC 207 - Discrete Structures</h3>
            <p>Taught me mathematical logic needed for computer science. Online classes were hard for me to understand during COVID.</p>
            <h3>ASTR 101 - Introductory Astronomy</h3>
            <p>Involved computational modeling used in computer simulations.</p>
            <h3>MATH 284 - Linear Algebra</h3>
            <p>Taught me matrix operations used for machine learning.</p>
            <h3>COMM 108 - Foundations of Human Communication</h3>
            <p>Taught me communication skills useful for collaborating.</p>
            <h3>ENGL 101 - Intro to College Writing</h3>
            <p>Taught me writing skills needed for documentation.</p>
          </div>
           <div class="column">
            <h3>CMSC 203 - Computer Science I</h3>
            <p>Taught me object-oriented programming, a key concept. Online classes were hard for me to understand during COVID.</p>
            <h3>ENGL 011 - College Writing Support</h3>
            <p>Improved my writing skills needed for documentation.</p>
            <h3>GEOG 101 - Intro to Geography</h3>
            <p>Used GIS software applicable for programming spatial analysis.</p>
            <h3>MATH 181 - Calculus I</h3>
            <p>Taught me mathematical analysis relevant for algorithm design.</p>
            <h3>ARTT 102 - Introduction to 2D Design</h3>
            <p>Taught me digital design principles useful for computer graphics.</p>
            <h3>CMSC 110 - Computer Concepts</h3>
            <p>Taught me essential computer hardware and software knowledge.</p>
           </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default School;