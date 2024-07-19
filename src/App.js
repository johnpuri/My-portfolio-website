import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import School from './components/School';
import CV from './components/CV';
import Knowledge from './components/Knowledge';
import './App.css'; // Assuming you have some styles defined here

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">John's Portfolio</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/school">My School</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cv">My CV</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/knowledge">My Knowledge</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

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