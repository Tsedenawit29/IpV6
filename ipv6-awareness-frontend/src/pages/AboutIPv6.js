// === src/pages/AboutIPv6.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaGlobe, FaShieldAlt, FaBolt, FaRobot, FaArrowRight, FaPlay, FaInfoCircle, FaChartLine, FaNetworkWired, FaMobileAlt, FaCloud, FaServer, FaLock, FaCheckCircle, FaExclamationTriangle, FaDownload, FaBook, FaUsers, FaTools } from 'react-icons/fa';

function AboutIPv6() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'implementation', label: 'Implementation' },
  ];

  const features = [
    {
      icon: <FaNetworkWired className="text-4xl text-accent dark:text-dark-text-accent" />,
      title: "Auto-Configuration",
      description: "Simplified network setup with automatic address configuration",
      video: "https://www.youtube.com/embed/6aT9XUK8Y3Y",
      details: [
        "Stateless Address Autoconfiguration (SLAAC)",
        "No need for DHCP in many cases",
        "Simplified network management",
        "Reduced configuration errors"
      ]
    },
    {
      icon: <FaMobileAlt className="text-4xl text-accent dark:text-dark-text-accent" />,
      title: "Mobile Support",
      description: "Seamless connectivity for mobile devices and IoT",
      video: "https://www.youtube.com/embed/7_-qWlvQQtY",
      details: [
        "Better mobility support",
        "Seamless handover between networks",
        "Improved IoT device connectivity",
        "Enhanced mobile security"
      ]
    },
    {
      icon: <FaCloud className="text-4xl text-accent dark:text-dark-text-accent" />,
      title: "Cloud Ready",
      description: "Optimized for modern cloud infrastructure",
      video: "https://www.youtube.com/embed/o5Cv9fvajrc",
      details: [
        "Native cloud support",
        "Better scalability",
        "Improved performance",
        "Enhanced security features"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaGlobe className="text-4xl text-accent dark:text-dark-text-accent" />,
      title: "Unlimited Addresses",
      description: "340 undecillion unique addresses for future growth",
      stat: "340 undecillion",
      details: "Enough addresses for every device, sensor, and application imaginable"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-accent dark:text-dark-text-accent" />,
      title: "Enhanced Security",
      description: "Built-in IPsec for better security",
      stat: "100% Secure",
      details: "End-to-end encryption and authentication built into the protocol"
    },
    {
      icon: <FaBolt className="text-4xl text-accent dark:text-dark-text-accent" />,
      title: "Better Performance",
      description: "Faster routing and lower latency",
      stat: "40% Faster",
      details: "Optimized header format and improved routing efficiency"
    },
    {
      icon: <FaRobot className="text-4xl text-accent dark:text-dark-text-accent" />,
      title: "IoT Ready",
      description: "Perfect for smart devices and IoT",
      stat: "∞ Devices",
      details: "Designed to support the growing Internet of Things ecosystem"
    }
  ];

  // Handle external links
  const handleExternalLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary">
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
              About <span className="text-primary">IPv6</span>
            </h1>
            <p className="text-lg text-black/80 dark:text-white/80 mb-8">
              The next generation of Internet Protocol, designed to replace IPv4 and address the growing need for IP addresses.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/get-involved" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/documentation" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform border-2 border-primary hover:bg-primary hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Learn More
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-white dark:bg-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
              What is IPv6?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-black/80 dark:text-white/80 mb-6">
                IPv6 (Internet Protocol version 6) is the most recent version of the Internet Protocol (IP), the communications protocol that provides an identification and location system for computers on networks and routes traffic across the Internet.
              </p>
              <p className="text-black/80 dark:text-white/80 mb-6">
                IPv6 was developed by the Internet Engineering Task Force (IETF) to deal with the long-anticipated problem of IPv4 address exhaustion. IPv6 is intended to replace IPv4.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-dark-bg-primary">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-start p-6 bg-white dark:bg-dark-bg-tertiary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-black/80 dark:text-white/80">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 px-4 bg-white dark:bg-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">
              Implementation Guide
            </h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-start p-6 bg-gray-50 dark:bg-dark-bg-tertiary rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-black/80 dark:text-white/80 mb-4">
                    {feature.description}
                  </p>
                  {feature.details && (
                    <ul className="list-disc list-inside text-black/80 dark:text-white/80 space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Make the Switch?
            </h2>
            <p className="text-black/80 dark:text-white/80 mb-12 text-lg">
              Join the IPv6 revolution and be part of the next generation of internet connectivity.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/get-involved" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform border-2 border-primary hover:bg-primary hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Contact Us
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutIPv6;
