import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Knowledge.css';

import pythonLogo from '../assets/logos/python.svg';
import springLogo from '../assets/logos/springboot.svg';
import mysqlLogo from '../assets/logos/mysql.svg';
import nodeLogo from '../assets/logos/nodejs.svg';
import gcpLogo from '../assets/logos/gcp.svg';
import vertexaiLogo from '../assets/logos/vertexai.svg';
import githubLogo from '../assets/logos/github.svg';
import reactLogo from '../assets/logos/react.svg';
import javascriptLogo from '../assets/logos/javascript.svg';
import javaLogo from '../assets/logos/java.svg';

const skills = [
  {
    logo: javaLogo, logoClass: 'skill-logo-java', name: 'Java', color: '#f89820',
    snippet: 'public class Hello {\n  public static void\n  main(String[] args) {\n    System.out.println\n    ("Hello!");\n  }\n}',
    info: 'Object-oriented language with 7+ years experience. Enterprise apps using Java 8-17, streams, lambdas, concurrency.',
    keyPoints: ['Enterprise Application Dev', 'Microservices Architecture', 'Android Development', 'Design Patterns', 'Multithreading'],
    purpose: 'Java is my primary language for robust, scalable enterprise apps requiring strong type safety and high performance.',
  },
  {
    logo: springLogo, logoClass: 'skill-logo-spring', name: 'Spring Boot', color: '#6db33f',
    snippet: '@RestController\npublic class Hello {\n  @GetMapping("/hello")\n  public String hello() {\n    return "Hello!";\n  }\n}',
    info: 'Java framework expert with 5+ years. RESTful APIs, Spring Security, JWT authentication, microservices.',
    keyPoints: ['RESTful API Development', 'Spring Security & JWT', 'Microservices / Spring Cloud', 'JPA/Hibernate', 'Dependency Injection & AOP'],
    purpose: 'Spring Boot accelerates development by eliminating boilerplate, providing production-ready APIs with built-in security.',
  },
  {
    logo: reactLogo, logoClass: 'skill-logo-react', name: 'React', color: '#61dafb',
    snippet: 'function App() {\n  return (\n    <div>\n      <h1>Hello!</h1>\n    </div>\n  );\n}',
    info: '4+ years React experience. SPAs with hooks, Redux, Context API, React Router, and Axios API integration.',
    keyPoints: ['Single Page Applications', 'Redux & Context API', 'Custom Hooks', 'Performance Optimization', 'React Router'],
    purpose: 'React enables dynamic UIs with its component-based architecture and virtual DOM for excellent performance.',
  },
  {
    logo: gcpLogo, logoClass: 'skill-logo-gcp', name: 'Google Cloud Platform', color: '#4285f4',
    snippet: '# Deploy to Cloud Run\ngcloud run deploy \\\n  --source . \\\n  --platform managed \\\n  --region us-central1',
    info: 'Cloud architect with extensive GCP. Deployed to Cloud Run, GKE, managed Cloud SQL, CI/CD pipelines, IAM.',
    keyPoints: ['Cloud Run & GKE', 'Cloud SQL & Databases', 'IAM & Security', 'Pub/Sub Event-driven', 'Load Balancing & Scaling'],
    purpose: 'GCP provides the infrastructure backbone, allowing me to focus on development over operations.',
  },
  {
    logo: javascriptLogo, logoClass: 'skill-logo-javascript', name: 'JavaScript', color: '#f7df1e',
    // eslint-disable-next-line no-template-curly-in-string
    snippet: 'const greet = async () => {\n  const name = "World";\n  console.log(`Hello, ${name}!`);\n};\ngreet();',
    info: '6+ years. ES6+ features, async/await, Promises, closures, DOM manipulation and functional programming.',
    keyPoints: ['ES6+ Modern JS', 'Async / Promises', 'Closures & Prototypes', 'DOM Manipulation', 'Functional Programming'],
    purpose: 'JavaScript is the foundation of my frontend work and versatile enough for full-stack with Node.js.',
  },
  {
    logo: pythonLogo, logoClass: 'skill-logo-python', name: 'Python', color: '#3776ab',
    snippet: 'def hello_world():\n    print("Hello, World!")\n\nhello_world()',
    info: '4+ years. Data pipelines with NumPy/Pandas, ML with TensorFlow/scikit-learn, Django, Flask, FastAPI.',
    keyPoints: ['Data Analysis: NumPy/Pandas', 'ML: TensorFlow/scikit-learn', 'Django & Flask', 'ETL Automation', 'FastAPI'],
    purpose: "Python's simplicity makes it my go-to for data analysis, ML, and automation scripts.",
  },
  {
    logo: mysqlLogo, logoClass: 'skill-logo-mysql', name: 'MySQL', color: '#00618a',
    snippet: 'SELECT * FROM users\nWHERE status = "active"\nORDER BY created_at DESC\nLIMIT 50;',
    info: '5+ years. Schema design, query optimization, indexing, stored procedures, triggers, replication.',
    keyPoints: ['Schema Design & Normalization', 'Query Optimization', 'Stored Procedures & Triggers', 'Migrations', 'High Availability'],
    purpose: 'MySQL provides reliable, ACID-compliant data storage for complex relational data in business-critical apps.',
  },
  {
    logo: nodeLogo, logoClass: 'skill-logo-node', name: 'Node.js', color: '#339933',
    snippet: 'const express = require("express");\nconst app = express();\n\napp.get("/", (req, res) =>\n  res.send("Hello!"));\n\napp.listen(3000);',
    info: '4+ years. RESTful APIs with Express, real-time with Socket.io, GraphQL, MongoDB/Mongoose, Redis caching.',
    keyPoints: ['REST APIs with Express.js', 'Socket.io Real-time', 'GraphQL / Apollo', 'MongoDB / Mongoose', 'Redis Caching'],
    purpose: 'Node.js lets me use JavaScript across the entire stack for consistent, high-throughput backend services.',
  },
  {
    logo: vertexaiLogo, logoClass: 'skill-logo-vertexai', name: 'Vertex AI', color: '#4285f4',
    snippet: 'from google.cloud import aiplatform\n\nendpoint = aiplatform\n  .Endpoint(endpoint_name)\nprediction = endpoint\n  .predict(instances)',
    info: 'AI/ML specialist on Vertex AI. Trained/deployed custom ML models, AutoML, real-time inference, MLOps pipelines.',
    keyPoints: ['Custom ML Training & Deploy', 'AutoML for Various Data', 'Real-time Inference', 'Feature Store', 'Vertex AI Pipelines'],
    purpose: 'Vertex AI lets me build and deploy ML models at scale without managing complex infrastructure.',
  },
  {
    logo: githubLogo, logoClass: 'skill-logo-github', name: 'GitHub', color: '#ffffff',
    snippet: 'name: Deploy to GCP\non: [push]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: checkout@v3',
    info: 'CI/CD with GitHub Actions, branching strategies (Git Flow), Dependabot, CodeQL security scanning.',
    keyPoints: ['CI/CD GitHub Actions', 'Repo Management & Branching', 'Automated Dependency Updates', 'CodeQL Security', 'GitHub Projects'],
    purpose: 'GitHub is central to my workflow, automating testing and deployment while keeping teams aligned.',
  },
];

/* ---- Flip Card ---- */
function FlipCard({ skill, delay }) {
  const [flipped, setFlipped] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="flip-card-container"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="flip-front glass-card">
          <div className="flip-front-glow" style={{ '--card-color': skill.color }} />
          <div className="card-logo-wrap">
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className={`card-logo ${skill.logoClass}`}
            />
          </div>
          <h3 className="card-name">{skill.name}</h3>
          <div className="key-points-preview">
            {skill.keyPoints.slice(0, 3).map((pt, i) => (
              <span key={i} className="key-tag">{pt}</span>
            ))}
          </div>
          <p className="flip-hint">Click to explore ↩</p>
        </div>

        {/* Back */}
        <div className="flip-back glass-card">
          <div className="back-header">
            <img src={skill.logo} alt="" className="back-logo" />
            <h3>{skill.name}</h3>
          </div>
          <pre className="code-snippet"><code>{skill.snippet}</code></pre>
          <p className="back-info">{skill.info}</p>
          <p className="flip-hint" style={{marginTop: 'auto'}}>Click to flip back ↩</p>
        </div>
      </div>
    </motion.div>
  );
}

function Knowledge() {
  return (
    <section className="knowledge-page">
      {/* Page header */}
      <div className="knowledge-hero">
        <div className="knowledge-hero-bg" />
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technical <span className="highlight">Knowledge</span>
        </motion.h1>
        <motion.p
          className="knowledge-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Click any card to explore skills in depth
        </motion.p>
      </div>

      <div className="knowledge-grid">
        {skills.map((skill, i) => (
          <FlipCard key={skill.name} skill={skill} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}

export default Knowledge;