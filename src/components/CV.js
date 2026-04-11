import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/CV.css';

/* ---- Fade-in helper ---- */
function FadeIn({ children, delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---- Timeline Item ---- */
function TimelineItem({ title, date, location, details, delay = 0, type = 'work' }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={`timeline-dot ${type}`}>
        <div className="timeline-dot-inner" />
      </div>
      <div className="timeline-connector" />
      <div className="timeline-card glass-card">
        <div className="timeline-card-header">
          <h3>{title}</h3>
          <span className="timeline-date">{date}</span>
        </div>
        {location && <p className="timeline-location">{location}</p>}
        {details && (
          <ul className="timeline-details">
            {details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

/* ---- Skill Bar ---- */
function SkillBar({ label, level, delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div ref={ref} className="skill-bar-wrap">
      <div className="skill-bar-label">
        <span>{label}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

function CV() {
  return (
    <main className="cv-page">
      {/* Page header */}
      <section className="cv-hero">
        <div className="cv-hero-bg" />
        <FadeIn>
          <h1 className="section-title">
            Professional <span className="highlight">Profile</span>
          </h1>
        </FadeIn>
      </section>

      <div className="cv-content-wrap">

        {/* ---- Personal Info ---- */}
        <FadeIn delay={0.1}>
          <section className="cv-section personal-info-card glass-card">
            <h2 className="cv-section-title">Personal Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">👤</span>
                <div><strong>Name</strong><p>John Purification</p></div>
              </div>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div><strong>Email</strong><p>johnpuri33@gmail.com</p></div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div><strong>Location</strong><p>Raleigh, NC</p></div>
              </div>
              <div className="info-item">
                <span className="info-icon">💼</span>
                <div>
                  <strong>LinkedIn</strong>
                  <p>
                    <a href="https://www.linkedin.com/in/john-purification/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/john-purification ↗
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🐙</span>
                <div>
                  <strong>GitHub</strong>
                  <p>
                    <a href="https://github.com/johnpuri" target="_blank" rel="noopener noreferrer">
                      github.com/johnpuri ↗
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ---- Education Timeline ---- */}
        <FadeIn delay={0.15}>
          <h2 className="cv-section-heading">
            <span className="section-heading-dot" />Education
          </h2>
        </FadeIn>

        <div className="timeline">
          <div className="timeline-line" />
          <TimelineItem
            title="Bachelor of Science, Computer Science"
            date="2022 – July 2023"
            location="Towson University, Towson, MD"
            details={['Relevant courses: Data Structure and Algorithm, Web Programming, Calculus, Cybersecurity, Computer Graphics, etc.']}
            delay={0.1}
            type="edu"
          />
          <TimelineItem
            title="Associates of Arts, Computer Science"
            date="2019 – 2021"
            location="Montgomery College, Takoma Park, MD"
            details={['Foundational programming, Discrete Structures, Calculus I & II, Linear Algebra']}
            delay={0.2}
            type="edu"
          />
        </div>

        {/* ---- Experience Timeline ---- */}
        <FadeIn delay={0.1}>
          <h2 className="cv-section-heading">
            <span className="section-heading-dot" />Experience
          </h2>
        </FadeIn>

        <div className="timeline">
          <div className="timeline-line" />
          <TimelineItem
            title="Deutsche Bank Grad Analyst — Technology, Data & Innovation"
            date="Feb 2024 – Present"
            location="Cary, NC"
            details={[
              'Worked with the CTO team on developing Vertex AI integration with GitHub and building a dashboard to track JIRA metrics for CB Tech using Java, Spring, Vertex API, ReactJS, etc.',
              'Managed Single Prime Record (SPR) application for PTA to manage all automated procedures to finalize a trade using Java, Quarkus, GCP, GitHub workflow and Cucumber.',
              'Managed and developed applications and services for Compliance team to monitor adherence to regulatory policies using Java, Python, and SQL.',
              'Gained experience in agile development, microservices, and big data technologies.',
              'Enrolled in GCP ACE, Data Engineering and Terraform training sprint.',
            ]}
            delay={0.1}
            type="work"
          />
          <TimelineItem
            title="Deutsche Bank Analyst Intern — Technology, Data & Innovation"
            date="June – Sept 2023"
            location="Cary, NC"
            details={[
              'Spearheaded integration of a Finite State Machine (FSM) visualization tool using Excel, DOT, and Graphviz-React to enhance user experience.',
              'Developed full-stack solution with SQL Server, Spring Boot API, and React JS for FSM tool integration.',
              'Created intern case study using Python web scraping and GCP machine learning with App Engine deployment.',
            ]}
            delay={0.2}
            type="work"
          />
        </div>

        {/* ---- Skills ---- */}
        <FadeIn delay={0.1}>
          <h2 className="cv-section-heading">
            <span className="section-heading-dot" />Skills
          </h2>
        </FadeIn>

        <div className="skills-bars-grid">
          <FadeIn delay={0.1}>
            <div className="skills-bars-card glass-card">
              <h3>Languages & Frameworks</h3>
              <SkillBar label="Java" level={90} delay={0.1} />
              <SkillBar label="JavaScript / ReactJS" level={85} delay={0.15} />
              <SkillBar label="Spring Boot" level={80} delay={0.2} />
              <SkillBar label="Python" level={70} delay={0.25} />
              <SkillBar label="HTML / CSS" level={88} delay={0.3} />
              <SkillBar label="SQL / MySQL" level={78} delay={0.35} />
              <SkillBar label="Node.js" level={65} delay={0.4} />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="skills-bars-card glass-card">
              <h3>Cloud & DevOps</h3>
              <SkillBar label="Google Cloud Platform (GCP)" level={75} delay={0.1} />
              <SkillBar label="GitHub / GitHub Actions" level={82} delay={0.15} />
              <SkillBar label="Terraform" level={55} delay={0.2} />
              <SkillBar label="Docker / Kubernetes" level={60} delay={0.25} />
              <SkillBar label="Vertex AI" level={68} delay={0.3} />
              <h3 style={{marginTop: '20px'}}>Soft Skills</h3>
              <SkillBar label="Agile / Scrum" level={85} delay={0.35} />
              <SkillBar label="Languages: English, Bangla, French" level={92} delay={0.4} />
            </div>
          </FadeIn>
        </div>

        {/* ---- CS Projects ---- */}
        <FadeIn delay={0.1}>
          <h2 className="cv-section-heading">
            <span className="section-heading-dot" />CS Projects
          </h2>
        </FadeIn>

        <div className="projects-grid">
          {[
            { code: 'CMSC 204', desc: 'Morse code converter using generic class & binary tree, Dijkstra\'s shortest path algorithm with Gui.' },
            { code: 'CMSC 203', desc: 'Polymorphism and inheritance for a beverage shop, JUnit testing, Cryptography using ASCII, Cipher and Bellaso Substitution.' },
            { code: 'COSC 484', desc: 'Built a job search website using ReactJS, JS, Express and MongoDB.' },
            { code: 'COSC 457', desc: 'Database fundamentals and GUI using MySQL & Java Swing.' },
          ].map((p, i) => (
            <FadeIn key={p.code} delay={i * 0.1}>
              <div className="project-card glass-card">
                <span className="project-code">{p.code}</span>
                <p>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ---- Campus Involvement ---- */}
        <FadeIn delay={0.1}>
          <h2 className="cv-section-heading">
            <span className="section-heading-dot" />Campus Involvement
          </h2>
        </FadeIn>

        <div className="involvement-grid">
          {[
            { org: 'South Asian Students Association', period: 'Spring 2019 – Fall 2021', school: 'Montgomery College' },
            { org: 'International Students Association – Board Member', period: 'Fall 2022 – Spring 2023', school: 'Towson University' },
            { org: 'Software Engineering Club', period: '', school: 'Towson University' },
          ].map((inv, i) => (
            <FadeIn key={inv.org} delay={i * 0.1}>
              <div className="involvement-card glass-card">
                <h3>{inv.org}</h3>
                {inv.period && <span className="inv-period">{inv.period}</span>}
                <span className="inv-school">{inv.school}</span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </main>
  );
}

export default CV;