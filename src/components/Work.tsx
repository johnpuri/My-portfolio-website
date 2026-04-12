import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const PROJECTS = [
  {
    num: "01",
    title: "FSM Visualisation Tool",
    category: "Full-Stack · Internship",
    tools: "React, Spring Boot, SQL Server, DOT, Graphviz",
    link: "https://github.com/johnpuri",
    image: "/images/placeholder.webp",
  },
  {
    num: "02",
    title: "JIRA Metrics Dashboard",
    category: "Enterprise · CTO Team",
    tools: "Java, Spring, Vertex AI, ReactJS, GCP",
    link: "https://github.com/johnpuri",
    image: "/images/placeholder.webp",
  },
  {
    num: "03",
    title: "GCP Intern Case Study",
    category: "ML · Data Engineering",
    tools: "Python, GCP App Engine, Web Scraping, ML",
    link: "https://github.com/johnpuri",
    image: "/images/placeholder.webp",
  },
  {
    num: "04",
    title: "Single Prime Record (SPR)",
    category: "Backend · CI/CD",
    tools: "Java, Quarkus, GCP, GitHub Actions, Cucumber",
    link: "https://github.com/johnpuri",
    image: "/images/placeholder.webp",
  },
  {
    num: "05",
    title: "Job Search Platform",
    category: "Full-Stack · Coursework (COSC 484)",
    tools: "ReactJS, Express, MongoDB, Node.js",
    link: "https://github.com/johnpuri",
    image: "/images/placeholder.webp",
  },
  {
    num: "06",
    title: "Compliance Monitor",
    category: "Backend · Regulatory Tech",
    tools: "Java, Python, SQL, Spring Boot",
    link: "https://github.com/johnpuri",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {PROJECTS.map((p) => (
            <div className="work-box" key={p.num}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{p.num}</h3>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{p.tools}</p>
              </div>
              <WorkImage image={p.image} alt={p.title} link={p.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
