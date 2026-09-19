import React, { lazy, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));
const CharacterModel = lazy(() => import("./Character"));

const Home = () => {
  const [isDesktopView, setIsDesktopView] = useState(
    window.innerWidth > 1024
  );

  useEffect(() => {
    let timeout;
    const resizeHandler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setSplitText();
        setIsDesktopView(window.innerWidth > 1024);
      }, 150);
    };
    setSplitText();
    window.addEventListener("resize", resizeHandler);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      {/* Single persistent Character instance across desktop and mobile */}
      <Suspense fallback={null}>
        <CharacterModel />
      </Suspense>

      {/* GSAP ScrollSmoother container structure */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
