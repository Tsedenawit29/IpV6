// === src/components/Navbar.js ===
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-primary-dark text-primary dark:text-white shadow-lg transition-colors duration-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">
              <span className="text-accent">IPv6</span>
              <span className="text-primary dark:text-secondary">Awareness</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-accent transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors font-medium">About IPv6</Link></li>
              <li><Link to="/resources" className="hover:text-accent transition-colors font-medium">Resources</Link></li>
              <li><Link to="/events" className="hover:text-accent transition-colors font-medium">Events</Link></li>
              <li><Link to="/get-involved" className="hover:text-accent transition-colors font-medium">Get Involved</Link></li>
              <li><Link to="/dashboard" className="hover:text-accent transition-colors font-medium">Dashboard</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors font-medium">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors font-medium">Contact</Link></li>
            </ul>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-primary/10 dark:bg-white/10 hover:bg-accent/20 dark:hover:bg-accent/20 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <ul className="space-y-4">
              <li><Link to="/" className="block hover:text-accent transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="block hover:text-accent transition-colors font-medium">About IPv6</Link></li>
              <li><Link to="/resources" className="block hover:text-accent transition-colors font-medium">Resources</Link></li>
              <li><Link to="/events" className="block hover:text-accent transition-colors font-medium">Events</Link></li>
              <li><Link to="/get-involved" className="block hover:text-accent transition-colors font-medium">Get Involved</Link></li>
              <li><Link to="/dashboard" className="block hover:text-accent transition-colors font-medium">Dashboard</Link></li>
              <li><Link to="/blog" className="block hover:text-accent transition-colors font-medium">Blog</Link></li>
              <li><Link to="/contact" className="block hover:text-accent transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;