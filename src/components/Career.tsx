import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Analyst Intern — TDI</h4>
                <h5>Deutsche Bank · Cary, NC</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Spearheaded integration of a Finite State Machine (FSM) visualisation tool
              using Excel, DOT, and Graphviz-React. Built a full-stack solution with SQL
              Server, Spring Boot API, and ReactJS. Created an intern case study using Python
              web scraping and GCP ML with App Engine deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Analyst — TDI</h4>
                <h5>Deutsche Bank · Cary, NC</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked with the CTO team on Vertex AI + GitHub integration and a JIRA metrics
              dashboard (Java, Spring, ReactJS). Managed the Single Prime Record (SPR)
              application using Quarkus, GCP, and GitHub Actions CI/CD workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer — TDI</h4>
                <h5>Deutsche Bank · Cary, NC</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building and maintaining Compliance monitoring services in Java, Python, and SQL.
              Driving infrastructure-as-code and cloud automation (Terraform, GCP) and
              enrolled in GCP ACE, Data Engineering, and Terraform training paths.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
