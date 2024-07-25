import React from 'react';
import '../css/Knowledge.css';

import javaLogo from '../assets/logos/java.svg';
import reactLogo from '../assets/logos/react.svg';
import javascriptLogo from '../assets/logos/javascript.svg';
import htmlLogo from '../assets/logos/html.svg';
import pythonLogo from '../assets/logos/python.svg';
import mysqlLogo from '../assets/logos/mysql.svg';
import nodejsLogo from '../assets/logos/nodejs.svg';
import springbootLogo from '../assets/logos/springboot.svg';

const SkillCard = ({ logo, snippet, name, description, logoClass }) => (
  <div className="skill-card">
    <img src={logo} alt={name} className={`skill-img ${logoClass}`} />
    <div className="skill-snippet">{snippet}</div>
    <h2 className="skill-name">{name}</h2>
    <p className="skill-info">{description}</p>
  </div>
);

const Knowledge = () => {
  const Knowledge = [
    {
      logo: javaLogo,
      snippet: "System.out.println(\"Hello, Java!\");",
      name: "Java",
      description: "Java is the language I used the most. I've worked with java Swing for GUI development, SpringBoot for API calls, some OOP assignments and many personal projects. At Deutsche Bank, I worked on their backend which is 100% Java and Spring based.",
    },
    {
      logo: reactLogo,
      snippet: "<div>Hello, React!</div>",
      name: "React",
      description: "I Used React for UI development for my school, personal and at Deutsche Bank. Global Receipt Platform's Front-end is made of React which we had to development.",
    },
    {
      logo: javascriptLogo,
      snippet: "console.log('Hello, JavaScript!');",
      name: "JavaScript",
      description: "I learned Javascript along with react. It was helpful for a lot of my assignments and front-end contribution.",
    },
    {
      logo: htmlLogo,
      snippet: "<h1>Hello, HTML!</h1>",
      name: "HTML",
      description: "I used HTML in some of my School and personal project. This one is pretty easy to learn",
    },
    {
      logo: pythonLogo,
      snippet: "print('Hello, Python!')",
      name: "Python",
      description: "I learned python from my own interest. Data science interested me after arrival of AI. At Deutsche Bank's intern case study, we had to analyze some data with Google's NLP. I worked with Flask and GCP's (Google Cloud Platform) NLP model.",
      logoClass: "skill-img-python",
    },
    {
      logo: mysqlLogo,
      snippet: "SELECT * FROM users;",
      name: "MySQL",
      description: "I used mySql from various purpose. I used mySql server mostly for school project and at Deutsche Bank. At the Bank, we had to create, join and make queries from the database.",
      logoClass: "skill-img-mysql",
    },
    {
      logo: nodejsLogo,
      snippet: "const http = require('http');",
      name: "NODE",
      description: "NodeJs is the technology I learned mostly from Deutsche Bank. Bank's UI is 100% related to this.",
      logoClass: "skill-img-node",
    },
    {
      logo: springbootLogo,
      snippet: "@SpringBootApplication",
      name: "Spring Boot",
      description: "Spring framework was relatively new to me. I learn this from my collegues and my manager at work.",
      logoClass: "skill-img-SpringBoot",
    },
  ];

  return (
    <section className="skill-section">
      <h1 className="heading">skills</h1>
      <div className="skills-container">
        {Knowledge.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Knowledge;