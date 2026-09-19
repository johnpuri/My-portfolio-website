import { PropsWithChildren, useEffect } from "react";
import "./styles/Landing.css";
import { initialFX } from "./utils/initialFX";

const Landing = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      initialFX();
    }, 150);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              JOHN
              <br />
              <span>PURIFICATION</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Software</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Engineer</div>
              <div className="landing-h2-2">Cloud Dev</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Cloud Dev</div>
              <div className="landing-h2-info-1">Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
