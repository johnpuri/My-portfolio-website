import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // used in SchoolCard
import '../css/School.css';

const TOWSON_COURSES = {
  'Computer Science Core': [
    { code: 'COSC 336', name: 'Data Structures & Algorithm Analysis', desc: 'Studied key data structures like arrays, linked lists, trees, and graphs which are critical for software development.' },
    { code: 'COSC 290', name: 'Principles of Computer Organization', desc: 'Learned how computers work at a low level, including digital logic, assembly language, and computer architecture.' },
    { code: 'COSC 412', name: 'Software Engineering', desc: 'Studied industry best practices for software development like requirements analysis, system design, testing, and project management.' },
    { code: 'COSC 439', name: 'Operating Systems', desc: 'Learned how operating systems implement process management, memory management, file systems, and more.' },
    { code: 'COSC 484', name: 'Web-Based Programming', desc: 'Built dynamic websites using HTML, CSS, JavaScript, PHP, and SQL databases.' },
    { code: 'COSC 350', name: 'Data Communications & Networking', desc: 'Studied how computer networks operate, including protocols, architecture, routing, and applications.' },
    { code: 'COSC 436', name: 'Object-Oriented Design & Programming', desc: 'Applied OOP concepts like inheritance, polymorphism, and design patterns to build robust software.' },
    { code: 'COSC 455', name: 'Programming Languages: Design & Implementation', desc: 'Learned how programming languages are designed, including syntax, semantics, compilers, and interpreters.' },
    { code: 'COSC 457', name: 'Database Management Systems', desc: 'Studied database systems, data modeling, SQL, transaction processing, concurrency control, and recovery.' },
    { code: 'COSC 471', name: 'Computer Graphics', desc: 'Learned techniques for generating and rendering 2D and 3D graphics using libraries like OpenGL.' },
    { code: 'CIS 377', name: 'Introduction to Cybersecurity', desc: 'Studied core cybersecurity concepts like encryption, access control, and network security.' },
  ],
  'Other Courses': [
    { code: 'ASTR 181', name: 'Stars, Galaxies & Early Universe', desc: 'Learned about astronomy and the vastness of the universe.' },
    { code: 'MATH 330', name: 'Intro to Statistical Methods', desc: 'Learned statistical analysis methods important for data science.' },
    { code: 'ENGL 317', name: 'Writing for Business & Industry', desc: 'Developed professional writing skills for technical documents, reports, and business communications.' },
    { code: 'HLTH 101', name: 'Wellness for a Diverse Society', desc: 'Studied holistic wellness and health promotion.' },
    { code: 'HLTH 220', name: 'Sexuality in Diverse Society', desc: 'Examined diverse human sexualities, relationships, and sexual health.' },
  ],
};

const MONTGOMERY_COURSES = {
  'Computer Science Courses': [
    { code: 'CMSC 140', name: 'Intro to Programming', desc: 'Taught me the fundamentals of coding, essential for computer science.' },
    { code: 'CMSC 204', name: 'Computer Science II', desc: 'Built on object-oriented programming principles.' },
    { code: 'CMSC 207', name: 'Discrete Structures', desc: 'Taught me mathematical logic needed for computer science.' },
    { code: 'CMSC 203', name: 'Computer Science I', desc: 'Taught me object-oriented programming, a key concept.' },
  ],
  'Other Courses': [
    { code: 'AOSC 100', name: 'Weather & Climate', desc: 'Involved data analysis useful for data science.' },
    { code: 'ENGL 102', name: 'Critical Reading/Writing/Research', desc: 'Taught professional writing and research skills.' },
    { code: 'ELAI 990', name: 'Advanced Integrated Skills', desc: 'Improved reading and writing for documentation.' },
    { code: 'MATH 182', name: 'Calculus II', desc: 'Mathematical analysis relevant for programming.' },
    { code: 'PSYC 102', name: 'General Psychology', desc: 'Taught human thinking for user-centric design.' },
    { code: 'MATH 284', name: 'Linear Algebra', desc: 'Matrix operations used for machine learning.' },
    { code: 'COMM 108', name: 'Foundations of Human Communication', desc: 'Communication skills for collaboration.' },
    { code: 'ENGL 101', name: 'Intro to College Writing', desc: 'Writing skills for documentation.' },
    { code: 'ENGL 011', name: 'College Writing Support', desc: 'Improved writing skills for documentation.' },
    { code: 'GEOG 101', name: 'Intro to Geography', desc: 'GIS software applicable for spatial analysis.' },
    { code: 'MATH 181', name: 'Calculus I', desc: 'Mathematical analysis for algorithm design.' },
    { code: 'ARTT 102', name: 'Introduction to 2D Design', desc: 'Digital design principles for computer graphics.' },
    { code: 'CMSC 110', name: 'Computer Concepts', desc: 'Essential computer hardware and software knowledge.' },
  ],
};

function CourseGrid({ categories }) {
  return (
    <div className="course-categories">
      {Object.entries(categories).map(([cat, courses]) => (
        <div key={cat} className="course-category">
          <h3 className="category-title">{cat}</h3>
          <div className="courses-grid">
            {courses.map((c, i) => (
              <motion.article
                key={c.code}
                className="course-card glass-card"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                <span className="course-code">{c.code}</span>
                <h4 className="course-name">{c.name}</h4>
                <p className="course-desc">{c.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SchoolCard({ name, degree, years, websiteUrl, logoClass, courses, accentColor }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.article
      ref={ref}
      className="school-card glass-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      style={{ '--school-accent': accentColor }}
    >
      <div className="school-card-accent-bar" />

      <header className="school-header">
        <div className={`school-logo-badge ${logoClass}`}>
          <span className="school-initial">{name.charAt(0)}</span>
        </div>
        <div className="school-info">
          <h2 className="school-name">{name}</h2>
          <p className="school-degree">{degree}</p>
          <span className="school-years">{years}</span>
        </div>
      </header>

      <div className="school-actions">
        <a href={websiteUrl} className="school-website-btn" target="_blank" rel="noopener noreferrer">
          🌐 Visit Website
        </a>
        <button
          className="school-courses-btn"
          onClick={() => setExpanded(!expanded)}
          id={`toggle-${logoClass}`}
        >
          {expanded ? 'Hide' : 'View My'} Courses
          <span className={`chevron ${expanded ? 'up' : 'down'}`}>›</span>
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="courses-expanded">
              <CourseGrid categories={courses} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function School() {
  return (
    <main className="school-page">
      <section className="school-hero">
        <div className="school-hero-bg" />
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Educational <span className="highlight">Journey</span>
        </motion.h1>
        <motion.p
          className="school-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Two institutions that shaped my computer science foundation
        </motion.p>
      </section>

      <div className="school-cards-wrap">
        <SchoolCard
          name="Towson University"
          degree="Bachelor of Science, Computer Science"
          years="2022 – July 2023"
          websiteUrl="https://towson.edu"
          logoClass="towson-badge"
          courses={TOWSON_COURSES}
          accentColor="#ffc300"
        />
        <SchoolCard
          name="Montgomery College"
          degree="Associates of Arts, Computer Science"
          years="2019 – 2021"
          websiteUrl="https://montgomerycollege.edu"
          logoClass="montgomery-badge"
          courses={MONTGOMERY_COURSES}
          accentColor="#00a3e0"
        />
      </div>
    </main>
  );
}

export default School;