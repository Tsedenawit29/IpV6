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
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-white via-primary/10 to-primary/5 dark:from-dark-bg-primary dark:via-dark-bg-secondary dark:to-dark-bg-primary text-black dark:text-white overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/80 dark:from-dark-bg-primary/90 dark:to-dark-bg-primary/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,196,124,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,157,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,196,124,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,157,0.05),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 dark:bg-dark-text-accent/20 rounded-full"
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
                  className="inline-block p-4 rounded-2xl bg-primary/10 dark:bg-dark-bg-tertiary backdrop-blur-sm mb-8"
                >
                  <FaInfoCircle className="text-6xl text-primary dark:text-dark-text-accent" />
                </motion.div>
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-semibold text-primary dark:text-dark-text-accent"
                  >
                    <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                      Understanding IPv6
                    </span>
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6"
                  >
                    The Next Generation{' '}
                    <span className="relative inline-block group">
                      <span className="text-primary dark:text-dark-text-accent">Internet Protocol</span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 dark:bg-dark-text-accent/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-black/80 dark:text-white/80 leading-relaxed"
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white dark:bg-primary-dark'
                    : 'bg-white dark:bg-dark-bg-tertiary text-black dark:text-white hover:bg-gray-50 dark:hover:bg-dark-bg-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#00C47C] dark:text-white mb-6">
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
                          <h3 className="text-xl font-bold text-[#00C47C] dark:text-white mb-2">
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
                <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg">
                      <div className="text-accent dark:text-dark-text-accent mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-black/80 dark:text-white/80 mb-4">
                        {benefit.description}
                      </p>
                      <div className="text-accent dark:text-dark-text-accent font-semibold">{benefit.stat}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'implementation' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Implementation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg">
                      <div className="text-accent dark:text-dark-text-accent mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-black/80 dark:text-white/80 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="text-black/80 dark:text-white/80 flex items-center">
                            <span className="text-accent dark:text-dark-text-accent mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutIPv6;
