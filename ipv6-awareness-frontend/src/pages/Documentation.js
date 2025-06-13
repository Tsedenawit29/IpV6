import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBook, FaCode, FaNetworkWired, FaShieldAlt, FaTools } from 'react-icons/fa';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg-primary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-white via-primary/10 to-primary/5 dark:from-dark-bg-primary dark:via-primary/20 dark:to-primary/10">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="container mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              IPv6 <span className="text-primary">Documentation</span>
            </h1>
            <p className="text-lg text-black/80 dark:text-white/80 mb-8">
              Comprehensive technical documentation and guides for implementing IPv6 in your network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4 bg-white dark:bg-dark-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docs.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white dark:bg-dark-bg-tertiary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-primary mb-4">
                    {doc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {doc.title}
                  </h3>
                  <p className="text-black/80 dark:text-white/80 mb-6">
                    {doc.description}
                  </p>
                  <Link 
                    to={doc.link}
                    className="group inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    Read More
                    <FaArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              Need Help?
            </h2>
            <p className="text-black/80 dark:text-white/80 mb-12 text-lg">
              Our support team is ready to help you with your IPv6 implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Contact Support
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/faq" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform border-2 border-primary hover:bg-primary hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  View FAQ
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const docs = [
  {
    icon: <FaBook className="w-8 h-8" />,
    title: "Getting Started",
    description: "Basic concepts and initial setup guide for IPv6 implementation.",
    link: "/docs/getting-started"
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Technical Reference",
    description: "Detailed technical specifications and reference documentation.",
    link: "/docs/technical-reference"
  },
  {
    icon: <FaNetworkWired className="w-8 h-8" />,
    title: "Network Configuration",
    description: "Guide to configuring your network for IPv6 deployment.",
    link: "/docs/network-configuration"
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Security Guide",
    description: "Best practices for securing your IPv6 implementation.",
    link: "/docs/security"
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: "Tools & Utilities",
    description: "Essential tools and utilities for IPv6 management.",
    link: "/docs/tools"
  },
  {
    icon: <FaBook className="w-8 h-8" />,
    title: "Best Practices",
    description: "Recommended practices for IPv6 implementation and management.",
    link: "/docs/best-practices"
  }
];

export default Documentation; 