import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NeuralCanvas from './NeuralCanvas';
import ContactModal from './ContactModal';
import '../css/Home.css';

/* ---- Typewriter for multiple roles ---- */
const ROLES = ['Software Engineer', 'Cloud Architect', 'Full-Stack Developer', 'AI/ML Enthusiast'];

function TypewriterRoles() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="typewriter-text">
      {text}<span className="typewriter-cursor">|</span>
    </span>
  );
}

/* ---- 3D Tilt Card ---- */
function TiltCard({ children, className }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -12;
    const rotY = ((x - cx) / cx) * 12;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.04,1.04,1.04)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  };

  return (
    <article
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </article>
  );
}

/* ---- Skills Section ---- */
const SKILLS = [
  { icon: '⚛️', title: 'Full-Stack Development', tags: ['React', 'Node.js', 'MongoDB'] },
  { icon: '🔄', title: 'Data Structures', tags: ['Arrays', 'Trees', 'Graphs'] },
  { icon: '🧩', title: 'Algorithm Design', tags: ['Sorting', 'Searching', 'Optimization'] },
  { icon: '☁️', title: 'Cloud Computing', tags: ['AWS', 'Azure', 'GCP'] },
  { icon: '🗄️', title: 'Database Management', tags: ['SQL', 'NoSQL', 'ORM'] },
  { icon: '🏗️', title: 'System Architecture', tags: ['Microservices', 'Serverless', 'API Design'] },
];

const ASPIRATIONS = [
  { icon: '🤖', title: 'AI/ML Engineer', desc: 'Building intelligent systems' },
  { icon: '🌐', title: 'Cloud Architect', desc: 'Designing scalable infrastructure' },
  { icon: '⚙️', title: 'DevOps Specialist', desc: 'Automating engineering workflows' },
];

/* ---- Section Fade-in Wrapper ---- */
function FadeInSection({ children, delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---- Main Home Component ---- */
function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="home-container">
      {/* === HERO === */}
      <section className="hero-section">
        {/* 3D Canvas Background */}
        <div className="hero-canvas-wrap">
          <NeuralCanvas />
        </div>

        {/* Gradient overlay */}
        <div className="hero-gradient-overlay" />

        <div className="hero-content-wrap">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="badge-dot" />
            Software Engineer
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Hi, I'm <span className="hero-name gradient-text">John</span>
          </motion.h1>

          <motion.div
            className="hero-role-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <TypewriterRoles />
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Computer Science Graduate · Deutsche Bank Technology Analyst
            <br />
            Transforming ideas into innovative, scalable solutions.
          </motion.p>

          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            <a
              href="https://github.com/johnpuri?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn primary"
              id="hero-view-projects-btn"
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <button
              className="cta-btn secondary"
              id="hero-contact-btn"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="scroll-arrow" />
        </motion.div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* === SKILLS === */}
      <section className="skills-section" id="skills">
        <FadeInSection>
          <h2 className="section-title">
            Technical <span className="highlight">Arsenal</span>
          </h2>
        </FadeInSection>

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <FadeInSection key={skill.title} delay={i * 0.08}>
              <TiltCard className="skill-card glass-card">
                <div className="skill-card-glow" />
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.title}</h3>
                <div className="tech-tags">
                  {skill.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </TiltCard>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* === FUTURE ASPIRATIONS === */}
      <section className="aspirations-section">
        <FadeInSection>
          <h2 className="section-title">
            Future <span className="highlight">Aspirations</span>
          </h2>
        </FadeInSection>

        <div className="aspirations-grid">
          {ASPIRATIONS.map((asp, i) => (
            <FadeInSection key={asp.title} delay={i * 0.12}>
              <div className="aspiration-card glass-card">
                <div className="aspiration-orbit">
                  <span className="aspiration-icon">{asp.icon}</span>
                </div>
                <h3>{asp.title}</h3>
                <p>{asp.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;