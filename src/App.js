import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import School from './components/School';
import CV from './components/CV';
import Knowledge from './components/Knowledge';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<School />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/knowledge" element={<Knowledge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;