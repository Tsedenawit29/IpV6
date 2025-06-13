// === src/components/Footer.js ===
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Ipv6.jpg.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About IPv6', path: '/AboutIPv6' },
      { label: 'Our Mission', path: '/OurMission' },
    ],
    resources: [
      { label: 'Documentation', path: '/Documentation' },
      { label: 'Blog', path: '/Blog' },
      { label: 'Events', path: '/Events' },
      { label: 'Resources', path: '/Resources' },
      { label: 'Get Involved', path: '/GetInvolved' },
    ],
    support: [
      { label: 'Contact Us', path: '/Contact' },
      { label: 'FAQ', path: '/FAQ' },
      { label: 'IPv6 Dashboard', path: '/IPv6Dashboard' },
      { label: 'Test IPv6', path: '/TestIPv6' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/PrivacyPolicy' },
      { label: 'Terms of Service', path: '/TermsOfService' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: '#'
    },
  ];

  return (
    <footer className="bg-white dark:bg-dark-bg-primary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-4 mb-8 group">
              <img 
                src={logo} 
                alt="IPv6 Logo" 
                className="h-16 w-auto transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-all duration-300">
                  IPv6 Awareness
                </h3>
                <p className="text-base text-black/80 dark:text-white/80">Empowering the future of internet connectivity</p>
              </div>
            </div>
            <p className="text-lg text-black/80 dark:text-white/80 mb-8">
              Promoting IPv6 adoption and education worldwide through comprehensive resources, training, and community engagement.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-black/80 dark:text-white/80 hover:text-yellow-500 dark:hover:text-yellow-400 transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="flex flex-col">
                  <h4 className="text-lg font-semibold mb-4 text-primary capitalize">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map(({ label, path }) => (
                      <li key={path}>
                        <Link
                          to={path}
                          className="text-black/80 dark:text-white/80 hover:text-primary dark:hover:text-primary transform hover:translate-x-1 transition-all duration-300 inline-block text-base"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
        <p className="text-sm text-black/80 dark:text-white/80">
          &copy; {currentYear} IPv6 Awareness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;