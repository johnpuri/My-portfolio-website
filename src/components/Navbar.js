import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          John's Portfolio
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/school') ? 'active' : ''}`} 
                to="/school"
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/cv') ? 'active' : ''}`} 
                to="/cv"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/knowledge') ? 'active' : ''}`} 
                to="/knowledge"
                onClick={() => setIsOpen(false)}
              >
                Knowledge
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;