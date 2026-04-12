import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import School from './components/School';
import CV from './components/CV';
import Knowledge from './components/Knowledge';
import TerminalAnimation from './components/TerminalAnimation';
import Cursor from './components/Cursor';
import SocialIcons from './components/SocialIcons';
import { LoadingProvider } from './context/LoadingProvider';
import './App.css';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Handle animation completion
  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setShowContent(true);
  };

  useEffect(() => {
    setShowAnimation(true);
    setShowContent(false);
    const safetyTimer = setTimeout(() => {
      setShowAnimation(false);
      setShowContent(true);
    }, 35000); 
    return () => clearTimeout(safetyTimer);
  }, []);

  return (
    <Router>
      <LoadingProvider>
        <Suspense>
          <main className="App main-body">
            {showAnimation && <TerminalAnimation onComplete={handleAnimationComplete} />}
            <div className={`app-content ${showContent ? 'visible' : 'hidden'}`}>
              <Cursor />
              <Navbar />
              <SocialIcons />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/school" element={<School />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/knowledge" element={<Knowledge />} />
              </Routes>
            </div>
          </main>
        </Suspense>
      </LoadingProvider>
    </Router>
  );
}

export default App;
