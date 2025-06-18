// === src/components/Footer.js ===
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa';
import logo from '../assets/images/Ipv6.jpg.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About IPv6', path: '/AboutIPv6' },
      { label: 'Our Mission', path: '/OurMission' },
    ],
    resources: [
      { label: 'Resources', path: '/Resources' },
      { label: 'Blog', path: '/Blog' },
      { label: 'Events', path: '/Events' },
      { label: 'Get Involved', path: '/GetInvolved' },
    ],
    support: [
      { label: 'Contact Us', path: '/Contact' },
      { label: 'FAQ', path: '/FAQ' },
      { label: 'IPv6 Dashboard', path: '/IPv6Dashboard' },
      { label: 'Test IPv6', path: 'https://test-ipv6.com/', external: true },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/PrivacyPolicy' },
      { label: 'Terms of Service', path: '/TermsOfService' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ipv6forum', icon: <FaTwitter size={24} /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/ipv6-forum', icon: <FaLinkedinIn size={24} /> },
    { name: 'YouTube', url: 'https://www.youtube.com/@ipv6forum', icon: <FaYoutube size={24} /> },
    { name: 'GitHub', url: 'https://github.com/ipv6', icon: <FaGithub size={24} /> },
  ];

  return (
    <footer className="bg-white dark:bg-dark-bg-primary text-black dark:text-dark-text-primary">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-4 mb-8 group">
              <img 
                src={logo} 
                alt="IPv6 Logo" 
                className="h-16 w-auto transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div>
                <h3 className="text-2xl font-bold text-[#00C389]">
                  IPv6 Ethiopia
                </h3>
                <p className="text-base text-black dark:text-dark-text-secondary">Empowering the future of internet connectivity</p>
              </div>
            </div>
            <p className="text-lg text-black dark:text-dark-text-secondary mb-8">
            Promoting IPv6 adoption and education in Ethiopia through comprehensive resources, training, and community engagement.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-black dark:text-dark-text-secondary hover:text-[#00C389] dark:hover:text-[#00C389] transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="flex flex-col">
                  <h4 className="text-lg font-semibold mb-4 text-[#00C389] capitalize">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map(({ label, path, external }) => (
                      <li key={path}>
                        {external ? (
                          <a
                            href={path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-dark-text-secondary hover:text-[#00C389] dark:hover:text-[#00C389] transform hover:translate-x-1 transition-all duration-300 inline-block text-base"
                          >
                            {label}
                          </a>
                        ) : (
                          <Link
                            to={path}
                            className="text-black dark:text-dark-text-secondary hover:text-[#00C389] dark:hover:text-[#00C389] transform hover:translate-x-1 transition-all duration-300 inline-block text-base"
                          >
                            {label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-primary/10 dark:border-dark-border pt-6 text-center">
        <p className="text-sm text-black dark:text-dark-text-secondary">
          &copy; {currentYear} IPv6 Awareness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
