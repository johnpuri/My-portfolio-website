import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-inverse">
      <div className="container">
        <Link className="navbar-brand" to="/">John's Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link neon-text-1" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-text-1" to="/school">My School</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-text-1" to="/cv">My CV</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-text-1" to="/knowledge">My Knowledge</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;