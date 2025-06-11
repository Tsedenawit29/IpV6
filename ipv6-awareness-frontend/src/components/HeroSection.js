// === src/components/HeroSection.js ===
import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-white via-primary/10 to-primary dark:from-primary-dark dark:via-primary/20 dark:to-primary-dark text-primary dark:text-white py-24 transition-colors duration-200 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,0,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,0,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-primary dark:text-accent leading-tight">
            Welcome to <span className="text-accent dark:text-secondary">IPv6</span> Awareness
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-primary/80 dark:text-secondary/90 leading-relaxed">
            Empowering the future of internet connectivity through IPv6 education and adoption.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/about"
              className="group bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              to="/get-involved"
              className="group bg-white dark:bg-primary text-primary dark:text-secondary border-2 border-secondary px-8 py-4 rounded-xl font-semibold hover:bg-secondary hover:text-white dark:hover:bg-secondary dark:hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Get Involved
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;