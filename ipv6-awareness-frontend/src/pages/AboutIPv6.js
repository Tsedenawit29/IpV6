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
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/90 via-primary/80 to-primary-dark dark:from-dark-bg-primary dark:via-dark-bg-secondary dark:to-dark-bg-primary text-white overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 dark:from-dark-bg-primary/90 dark:to-dark-bg-primary/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,0,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,157,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,157,0.08),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 dark:bg-dark-text-accent/30 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 2 + 1
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block p-4 rounded-2xl bg-accent/20 dark:bg-dark-bg-tertiary backdrop-blur-sm mb-8"
                >
                  <FaInfoCircle className="text-6xl text-accent dark:text-dark-text-accent" />
                </motion.div>
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-semibold text-accent dark:text-dark-text-accent"
                  >
                    <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                      Understanding IPv6
                    </span>
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-6xl md:text-7xl font-bold leading-tight"
                  >
                    The Next Generation{' '}
                    <span className="relative inline-block group">
                      <span className="text-accent dark:text-dark-text-accent">Internet Protocol</span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 dark:bg-dark-text-accent/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/90 dark:text-dark-text-secondary leading-relaxed"
                  >
                    Discover the future of internet addressing and connectivity
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-6"
                >
                </motion.div>
              </motion.div>

              {/* Right Column - Interactive Elements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/5 dark:bg-dark-bg-tertiary backdrop-blur-sm p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent dark:from-dark-text-accent/20"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                    <div className="grid grid-cols-2 gap-8">
                      {[
                        { icon: <FaGlobe />, label: "Global Reach" },
                        { icon: <FaShieldAlt />, label: "Enhanced Security" },
                        { icon: <FaBolt />, label: "Better Performance" },
                        { icon: <FaRobot />, label: "IoT Ready" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="group cursor-pointer"
                        >
                          <div className="p-6 rounded-xl bg-white/10 dark:bg-dark-bg-secondary backdrop-blur-sm hover:bg-white/20 dark:hover:bg-dark-bg-tertiary transition-all duration-300">
                            <div className="text-4xl text-accent dark:text-dark-text-accent mb-3 transform group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <div className="text-white/90 dark:text-dark-text-primary font-semibold">
                              {item.label}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <section className="py-20 bg-white dark:bg-dark-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`btn ${
                    activeTab === tab.id
                      ? 'btn-primary'
                      : 'btn-outline'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-dark-bg-secondary rounded-xl shadow-lg p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-primary dark:text-dark-text-primary mb-6">
                    What is IPv6?
                  </h2>
                  <p className="text-lg text-primary/80 dark:text-dark-text-secondary leading-relaxed">
                    IPv6 (Internet Protocol version 6) is the most recent version of the Internet Protocol, designed to replace IPv4. It provides a vastly larger address space and improved features for the modern internet.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-accent dark:text-dark-text-accent">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary dark:text-dark-text-primary mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-primary/80 dark:text-dark-text-secondary">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-primary dark:text-dark-text-primary mb-6">
                    Key Benefits
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-accent dark:text-dark-text-accent">
                            {benefit.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary dark:text-dark-text-primary mb-2">
                              {benefit.title}
                            </h3>
                            <p className="text-primary/80 dark:text-dark-text-secondary mb-4">
                              {benefit.description}
                            </p>
                            <div className="text-accent dark:text-dark-text-accent font-semibold">
                              {benefit.stat}
                            </div>
                            <p className="text-primary/60 dark:text-dark-text-secondary text-sm mt-2">
                              {benefit.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'implementation' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-primary dark:text-dark-text-primary mb-6">
                    Implementation Guide
                  </h2>
                  <p className="text-lg text-primary/80 dark:text-dark-text-secondary leading-relaxed">
                    Learn how to implement IPv6 in your network and prepare for the future of internet connectivity.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg"
                    >
                      <div className="text-accent dark:text-dark-text-accent mb-4">
                        <FaDownload className="text-4xl" />
                      </div>
                      <h3 className="text-xl font-bold text-primary dark:text-dark-text-primary mb-2">
                        Get Started
                      </h3>
                      <p className="text-primary/80 dark:text-dark-text-secondary mb-4">
                        Download our implementation guide and start your IPv6 journey.
                      </p>
                      <button
                        onClick={() => handleExternalLink('https://example.com/ipv6-guide')}
                        className="text-accent dark:text-dark-text-accent hover:underline"
                      >
                        Download Guide →
                      </button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg"
                    >
                      <div className="text-accent dark:text-dark-text-accent mb-4">
                        <FaBook className="text-4xl" />
                      </div>
                      <h3 className="text-xl font-bold text-primary dark:text-dark-text-primary mb-2">
                        Documentation
                      </h3>
                      <p className="text-primary/80 dark:text-dark-text-secondary mb-4">
                        Access detailed documentation and technical specifications.
                      </p>
                      <button
                        onClick={() => handleExternalLink('https://example.com/ipv6-docs')}
                        className="text-accent dark:text-dark-text-accent hover:underline"
                      >
                        View Docs →
                      </button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg"
                    >
                      <div className="text-accent dark:text-dark-text-accent mb-4">
                        <FaUsers className="text-4xl" />
                      </div>
                      <h3 className="text-xl font-bold text-primary dark:text-dark-text-primary mb-2">
                        Community
                      </h3>
                      <p className="text-primary/80 dark:text-dark-text-secondary mb-4">
                        Join our community for support and collaboration.
                      </p>
                      <button
                        onClick={() => handleExternalLink('https://example.com/ipv6-community')}
                        className="text-accent dark:text-dark-text-accent hover:underline"
                      >
                        Join Community →
                      </button>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutIPv6;
