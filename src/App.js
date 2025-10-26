import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import School from './components/School';
import CV from './components/CV';
import Knowledge from './components/Knowledge';
import TerminalAnimation from './components/TerminalAnimation';
import './App.css';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Handle animation completion
  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setShowContent(true);
  };

  // Show animation on every page load
  useEffect(() => {
    // Always show the animation on page load
    setShowAnimation(true);
    setShowContent(false);
    
    // Safety timeout - force content to show after 35 seconds in case animation gets stuck
    const safetyTimer = setTimeout(() => {
      setShowAnimation(false);
      setShowContent(true);
    }, 35000); // Increased safety timer
    
    return () => clearTimeout(safetyTimer);
  }, []);

  return (
    <Router>
      <main className="App">
        {showAnimation && <TerminalAnimation onComplete={handleAnimationComplete} />}
        <div className={`app-content ${showContent ? 'visible' : 'hidden'}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/school" element={<School />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/knowledge" element={<Knowledge />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;