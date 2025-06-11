// === src/components/Navbar.js ===
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/images/Ipv6.jpg.png';

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About IPv6' },
    { path: '/resources', label: 'Resources' },
    { path: '/events', label: 'Events' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-primary-dark/95 backdrop-blur-md shadow-lg' 
        : 'bg-white dark:bg-primary-dark'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="IPv6 Logo" 
              className="h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent group-hover:from-accent-light group-hover:to-accent transition-all duration-300">
                IPv6
              </span>
              <span className="text-sm text-primary/80 dark:text-secondary/80 group-hover:text-accent/80 transition-colors">
                Awareness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`relative px-2 py-1 font-medium transition-all duration-300 ${
                      isActive(path)
                        ? 'text-accent'
                        : 'text-primary/80 dark:text-secondary/80 hover:text-accent'
                    }`}
                  >
                    {label}
                    {isActive(path) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-100 transition-transform" />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transform transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-primary/10 dark:bg-white/10 hover:bg-accent/20 dark:hover:bg-accent/20 transition-all duration-300 transform hover:scale-110"
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
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <ul className="py-4 space-y-4">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(path)
                      ? 'bg-accent/10 text-accent'
                      : 'text-primary/80 dark:text-secondary/80 hover:bg-primary/10 dark:hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="px-4 py-2">
              <button
                onClick={toggleDarkMode}
                className="w-full p-2 rounded-lg bg-primary/10 dark:bg-white/10 hover:bg-accent/20 dark:hover:bg-accent/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span className="text-primary/80 dark:text-secondary/80">
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;