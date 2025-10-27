import React from 'react';
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

const SkillCard = ({ logo, logoClass, snippet, name, info, keyPoints = [], purpose = "" }) => {
  return (
    <article className="skill-card">
      <header className="skill-logo-container">
        <img src={logo} alt={`${name} logo`} className={`skill-logo ${logoClass}`} />
      </header>
      <pre className="skill-snippet"><code>{snippet}</code></pre>
      <section className="skill-content">
        <h3 className="skill-name">{name}</h3>
        <p className="skill-info">{info}</p>
        {keyPoints.length > 0 && (
          <ul className="skill-key-points">
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        {purpose && (
          <div className="skill-purpose">
            <h4 className="purpose-title">Why I Use This</h4>
            <p className="purpose-text">{purpose}</p>
          </div>
        )}
      </section>
    </article>
  );
};

const skills = [
  {
    logo: javaLogo,
    logoClass: 'skill-logo-java',
    snippet: 'public class HelloWorld {\n  public static void main\n(String[] args) {\n    System.out.println("Hello, \nWorld!");\n  }\n}',
    name: 'Java',
    info: 'Object-oriented programming language with 7+ years of experience. Developed enterprise applications using Java 8-17 features including streams, lambdas, and concurrency. Built microservices with Spring framework and created Android applications. Implemented design patterns like Singleton, Factory, and Observer for robust architecture.',
    keyPoints: [
      'Enterprise Application Development',
      'Microservices Architecture',
      'Android Development',
      'Design Patterns Implementation',
      'Multithreading & Concurrency'
    ],
    purpose: 'I rely on Java for building robust, scalable enterprise applications that require strong type safety and performance. Its platform independence allows me to deploy solutions across different environments, while its extensive ecosystem provides libraries for virtually any task. Java\'s object-oriented nature helps me create maintainable, modular code for complex business requirements.'
  },
  {
    logo: springLogo,
    logoClass: 'skill-logo-spring',
    snippet: '@RestController\npublic class HelloController {\n    @GetMapping("/hello")\n    public String hello() {\n        return "Hello, World!";\n    }\n}',
    name: 'Spring Boot',
    info: 'Java framework expert with 5+ years experience. Developed RESTful APIs with Spring Boot, implemented security using Spring Security with JWT authentication, and created microservices with Spring Cloud. Integrated with JPA/Hibernate for database operations and used Spring Data for repository management. Implemented dependency injection and AOP for clean, maintainable code.',
    keyPoints: [
      'RESTful API Development',
      'Spring Security & JWT Authentication',
      'Microservices with Spring Cloud',
      'JPA/Hibernate Integration',
      'Dependency Injection & AOP'
    ],
    purpose: 'Spring Boot accelerates my development process by eliminating boilerplate code and providing convention-over-configuration. I use it to rapidly build production-ready microservices and APIs with built-in security features. Its dependency injection framework helps me create loosely coupled components, while Spring Cloud simplifies distributed system challenges.'
  },
  {
    logo: reactLogo,
    logoClass: 'skill-logo-react',
    snippet: 'function App() {\n  return (\n    <div className="App">\n      <h1>Hello, World!</h1>\n    </div>\n  );\n}',
    name: 'React',
    info: 'Frontend development with 4+ years React experience. Built responsive SPAs using functional components and hooks (useState, useEffect, useContext, useReducer). Implemented state management with Redux and Context API, created custom hooks for reusable logic, and optimized performance with React.memo and useMemo. Experienced with React Router for navigation and Axios for API integration.',
    keyPoints: [
      'Single Page Applications (SPAs)',
      'Redux & Context API State Management',
      'Custom Hooks Development',
      'Performance Optimization',
      'React Router & API Integration'
    ],
    purpose: 'React enables me to create dynamic, responsive user interfaces with a component-based architecture that promotes reusability. Its virtual DOM efficiently updates only what needs to change, resulting in better performance. I leverage React\'s ecosystem to build complex frontends that provide excellent user experiences across devices.'
  },
  {
    logo: gcpLogo,
    logoClass: 'skill-logo-gcp',
    snippet: '# Deploy to Cloud Run\ngcloud run deploy --source .\n--platform managed\n--region us-central1',
    name: 'Google Cloud Platform',
    info: 'Cloud architect with extensive GCP experience. Deployed containerized applications to Cloud Run and GKE, managed databases with Cloud SQL (PostgreSQL), and implemented CI/CD pipelines. Utilized IAM for security, Cloud Storage for file management, and Pub/Sub for event-driven architecture. Configured load balancing, auto-scaling, and implemented monitoring with Cloud Monitoring and Logging.',
    keyPoints: [
      'Cloud Run & GKE Deployments',
      'Cloud SQL & Database Management',
      'IAM & Security Implementation',
      'Event-driven Architecture with Pub/Sub',
      'Load Balancing & Auto-scaling'
    ],
    purpose: 'GCP provides the infrastructure backbone for my applications, allowing me to focus on development rather than operations. I utilize its serverless options to reduce maintenance overhead and costs. GCP\'s global network ensures low-latency access for users worldwide, while its security features help me protect sensitive data and comply with regulations.'
  },
  {
    logo: javascriptLogo,
    logoClass: 'skill-logo-javascript',
    snippet: 'const greeting = () => {\n  const name = "World";\n  console.log(`Hello, ${name}!`);\n};\n\ngreeting();',
    name: 'JavaScript',
    info: 'Advanced JavaScript developer with 6+ years experience. Mastered ES6+ features including arrow functions, destructuring, async/await, and modules. Implemented complex asynchronous operations with Promises, created closures for data encapsulation, and utilized prototypal inheritance. Experienced with DOM manipulation, event handling, and AJAX for dynamic web applications. Proficient in functional programming concepts.',
    keyPoints: [
      'ES6+ Features & Modern JavaScript',
      'Asynchronous Programming with Promises',
      'Closures & Prototypal Inheritance',
      'DOM Manipulation & Event Handling',
      'Functional Programming Concepts'
    ],
    purpose: 'JavaScript is essential for creating interactive web experiences and is the foundation of my frontend development. Its versatility allows me to work across the entire stack with Node.js. I leverage modern JavaScript features to write clean, maintainable code that runs efficiently in browsers and servers alike.'
  },
  {
    logo: pythonLogo,
    logoClass: 'skill-logo-python',
    snippet: 'def hello_world():\n    print("Hello, World!")',
    name: 'Python',
    info: 'Python developer with 4+ years experience across multiple domains. Implemented data analysis pipelines with NumPy, Pandas, and Matplotlib. Developed machine learning models using TensorFlow, Keras, and scikit-learn. Built web applications with Django and Flask frameworks. Created automation scripts for ETL processes and utilized Python for backend API development with FastAPI.',
    keyPoints: [
      'Data Analysis with NumPy & Pandas',
      'Machine Learning with TensorFlow & scikit-learn',
      'Web Development with Django & Flask',
      'ETL Process Automation',
      'API Development with FastAPI'
    ],
    purpose: 'Python\'s simplicity and readability make it my go-to language for data analysis and machine learning projects. Its extensive libraries like NumPy and Pandas help me process and visualize complex datasets efficiently. For automation tasks, Python\'s straightforward syntax allows me to quickly create scripts that save time and reduce manual work.'
  },
  {
    logo: mysqlLogo,
    logoClass: 'skill-logo-mysql',
    snippet: 'SELECT * FROM users\nWHERE status = "active"\nORDER BY created_at DESC;',
    name: 'MySQL',
    info: 'Database expert with 5+ years MySQL experience. Designed normalized database schemas, optimized complex queries for performance, and implemented indexing strategies. Created stored procedures, triggers, and views for business logic. Managed database migrations, implemented backup and recovery procedures, and ensured data integrity with constraints. Experienced with database replication and clustering for high availability.',
    keyPoints: [
      'Database Schema Design & Normalization',
      'Query Optimization & Indexing',
      'Stored Procedures, Triggers & Views',
      'Database Migration & Maintenance',
      'Replication & High Availability'
    ],
    purpose: 'MySQL provides the reliable data storage foundation for my applications, with ACID compliance ensuring data integrity. I use it for projects requiring complex relationships between data and transactions. Its maturity means excellent documentation, community support, and proven performance at scale, making it ideal for business-critical applications.'
  },
  {
    logo: nodeLogo,
    logoClass: 'skill-logo-node',
    snippet: 'const express = require("express");\nconst app = express();\n\napp.get("/hello", (req, res) => {\n    res.send("Hello, World!");\n});\n\napp.listen(3000);',
    name: 'Node.js',
    info: 'Backend developer with 4+ years Node.js experience. Built scalable RESTful APIs with Express.js, implemented real-time applications using Socket.io, and created GraphQL APIs with Apollo Server. Utilized middleware for authentication, validation, and error handling. Integrated with MongoDB using Mongoose and implemented caching with Redis. Experienced with event-driven architecture and asynchronous programming patterns.',
    keyPoints: [
      'RESTful API Development with Express.js',
      'Real-time Applications with Socket.io',
      'GraphQL API Implementation',
      'MongoDB Integration with Mongoose',
      'Caching Strategies with Redis'
    ],
    purpose: 'Node.js enables me to use JavaScript across the entire stack, streamlining development and allowing code sharing between frontend and backend. Its event-driven, non-blocking architecture makes it perfect for building high-throughput APIs and real-time applications. The vast npm ecosystem provides ready-made solutions for common development challenges.'
  },
  {
    logo: vertexaiLogo,
    logoClass: 'skill-logo-vertexai',
    snippet: 'from google.cloud import aiplatform\n\nendpoint = aiplatform.Endpoint\n(endpoint_name)\nprediction = endpoint.predict\n(instances=instances)',
    name: 'Vertex AI',
    info: 'AI/ML specialist with Vertex AI expertise. Trained and deployed custom machine learning models on Google\'s Vertex AI platform. Implemented AutoML for tabular data, image classification, and natural language processing tasks. Created prediction endpoints for real-time inference, utilized feature store for feature management, and implemented MLOps practices with Vertex AI Pipelines. Experienced with model monitoring and continuous training.',
    keyPoints: [
      'Custom ML Model Training & Deployment',
      'AutoML for Various Data Types',
      'Real-time Inference Endpoints',
      'Feature Store Management',
      'MLOps with Vertex AI Pipelines'
    ],
    purpose: 'Vertex AI allows me to build and deploy machine learning models at scale without managing complex infrastructure. I use it to create intelligent features in applications, from recommendation systems to natural language processing. Its AutoML capabilities help me deliver ML solutions even for specialized domains where I might not have deep expertise.'
  },
  {
    logo: githubLogo,
    logoClass: 'skill-logo-github',
    snippet: 'name: Deploy to GCP\non: [push]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2',
    name: 'GitHub',
    info: 'DevOps engineer with advanced GitHub knowledge. Implemented CI/CD workflows with GitHub Actions for automated testing, building, and deployment to cloud platforms. Managed repositories with branching strategies (Git Flow, GitHub Flow) and implemented code review processes. Created automated dependency updates with Dependabot, utilized GitHub Packages for artifact storage, and implemented security scanning with CodeQL.',
    keyPoints: [
      'CI/CD Workflows with GitHub Actions',
      'Repository Management & Branching Strategies',
      'Automated Dependency Updates',
      'Security Scanning with CodeQL',
      'Project Management with GitHub Projects'
    ],
    purpose: 'GitHub is central to my development workflow, providing version control and collaboration tools that keep projects organized. I leverage GitHub Actions to automate testing and deployment, ensuring consistent quality and faster releases. Its project management features help me track progress and coordinate with team members, while security tools like CodeQL help identify vulnerabilities early.'
  }
];

function Knowledge() {
  return (
    <section className="skills-section">
      <header className="tech-background">
        <span className="animated-grid"></span>
        <span className="code-rain"></span>
      </header>
      
      <h2 className="section-title">Technical <span className="highlight">Knowledge</span></h2>
      
      <main className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index}
            logo={skill.logo}
            logoClass={skill.logoClass}
            snippet={skill.snippet}
            name={skill.name}
            info={skill.info}
          />
        ))}
      </main>
    </section>
  );
}

export default Knowledge;