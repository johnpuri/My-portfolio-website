import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm John Purification, a Software Engineer and Cloud Infrastructure
          specialist at Deutsche Bank (TDI). I design and maintain production-grade
          cloud systems on GCP, automate deployments through GitHub Actions
          CI/CD workflows, and build full-stack services using Java, Spring Boot,
          Python, and ReactJS. I'm passionate about scalable microservices,
          infrastructure-as-code with Terraform, and leveraging AI/ML (Vertex AI)
          to unlock real business value.
        </p>
      </div>
    </div>
  );
};

export default About;
