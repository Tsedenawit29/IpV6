// === src/components/Navbar.js ===
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/images/logo.jpg';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Mission', path: '/our-mission' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-dark-bg-primary/95 backdrop-blur-md shadow-lg' 
        : 'bg-white dark:bg-dark-bg-primary'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
          <img 
  src={logo} 
  alt="IPv6 Logo" 
  className="h-[80px] w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
/>

            {/* <div className="flex flex-col">
              <span className="text-xl font-bold text-primary dark:text-dark-text-primary group-hover:text-[#228B22] transition-colors">
                IPv6
              </span>
              <span className="text-sm text-primary/80 dark:text-dark-text-secondary group-hover:text-[#228B22] transition-colors">
                Awareness
              </span>
            </div> */}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {[
                { path: '/', label: 'Home' },
                { path: '/AboutIPv6', label: 'About IPv6' },
                { path: '/resources', label: 'Resources' },
                { path: '/events', label: 'Events' },
                { path: '/GetInvolved', label: 'Get Involved' },
                { path: '/IPv6Dashboard', label: 'Dashboard' },
                { path: '/blog', label: 'Blog' },
                { path: '/contact', label: 'Contact' }
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`relative px-2 py-1 font-medium transition-colors ${
                      isActive(path)
                        ? 'text-[#00C389]'
                        : 'text-black dark:text-white hover:text-[#00C389]'
                    }`}
                  >
                    {label}
                    {isActive(path) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00C389]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <button
  onClick={toggleDarkMode}
  className="p-2 rounded-lg bg-primary/10 dark:bg-dark-bg-secondary hover:bg-[#00C389]/20 dark:hover:bg-[#00C389]/20 transition-colors duration-200"
  aria-label="Toggle dark mode"
>
  {darkMode ? (
    // Moon icon (dark mode active)
    <svg
      className="w-5 h-5 text-[#00C389]"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M17.293 13.293a8 8 0 01-10.586-10.586A8.001 8.001 0 0010 18a8 8 0 007.293-4.707z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    // Sun icon (light mode active)
    <svg
      className="w-5 h-5 text-[#00C389]"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 3.5a.75.75 0 01.75.75V5a.75.75 0 01-1.5 0V4.25A.75.75 0 0110 3.5zm0 11a.75.75 0 01.75.75V16a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm6.5-5.5a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5a.75.75 0 01.75-.75zM3.5 10a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 013.5 10zm10.854-4.354a.75.75 0 011.06 1.06l-.354.354a.75.75 0 11-1.06-1.06l.354-.354zM4.94 15.06a.75.75 0 001.06-1.06l-.354-.354a.75.75 0 10-1.06 1.06l.354.354zm10.12 1.06a.75.75 0 01-1.06-1.06l.354-.354a.75.75 0 011.06 1.06l-.354.354zM5.646 5.646a.75.75 0 011.06 0l.354.354a.75.75 0 11-1.06 1.06L5.646 6.707a.75.75 0 010-1.06zM10 6a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  )}
</button>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-bg-tertiary hover:bg-gray-200 dark:hover:bg-dark-bg-secondary transition-colors duration-200"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-[#00C389]" />
              ) : (
                <FaMoon className="w-5 h-5 text-[#00C389]" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-bg-tertiary hover:bg-gray-200 dark:hover:bg-dark-bg-secondary transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-[#00C389]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white dark:bg-dark-bg-secondary`}>
          <ul className="py-4 space-y-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/AboutIPv6', label: 'About IPv6' },
              { path: '/resources', label: 'Resources' },
              { path: '/events', label: 'Events' },
              { path: '/GetInvolved', label: 'Get Involved' },
              { path: '/IPv6Dashboard', label: 'Dashboard' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive(path)
                      ? 'bg-[#00C389]/10 text-[#00C389]'
                      : 'text-black dark:text-white hover:bg-[#00C389]/10 hover:text-[#00C389]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-bg-primary shadow-lg border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="grid grid-cols-2 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-200 text-center ${
                      location.pathname === link.path
                        ? 'text-[#00C389] dark:text-[#00C389]'
                        : 'text-gray-600 dark:text-gray-300 hover:text-[#00C389] dark:hover:text-[#00C389]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
