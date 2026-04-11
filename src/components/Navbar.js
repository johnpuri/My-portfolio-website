import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/Navbar.css';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/school', label: 'Education' },
  { path: '/cv', label: 'Profile' },
  { path: '/knowledge', label: 'Knowledge' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation">
      <div className="nav-container">
        {/* Brand */}
        <Link className="nav-brand" to="/" id="nav-brand-link">
          <span className="brand-dot" />
          <span className="brand-name">John<span className="brand-accent">.</span>dev</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <li key={link.path} className="nav-item">
              <Link
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                to={link.path}
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    className="nav-active-bar"
                    layoutId="activeBar"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          id="hamburger-btn"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;