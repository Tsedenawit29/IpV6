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
      icon: <FaNetworkWired className="text-4xl text-accent" />,
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
      icon: <FaMobileAlt className="text-4xl text-accent" />,
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
      icon: <FaCloud className="text-4xl text-accent" />,
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
      icon: <FaGlobe className="text-4xl text-accent" />,
      title: "Unlimited Addresses",
      description: "340 undecillion unique addresses for future growth",
      stat: "340 undecillion",
      details: "Enough addresses for every device, sensor, and application imaginable"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-accent" />,
      title: "Enhanced Security",
      description: "Built-in IPsec for better security",
      stat: "100% Secure",
      details: "End-to-end encryption and authentication built into the protocol"
    },
    {
      icon: <FaBolt className="text-4xl text-accent" />,
      title: "Better Performance",
      description: "Faster routing and lower latency",
      stat: "40% Faster",
      details: "Optimized header format and improved routing efficiency"
    },
    {
      icon: <FaRobot className="text-4xl text-accent" />,
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
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-primary-dark dark:to-primary/10">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/90 via-primary/80 to-primary-dark text-white overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,0,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.15),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full"
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
                  className="inline-block p-4 rounded-2xl bg-accent/20 backdrop-blur-sm mb-8"
                >
                  <FaInfoCircle className="text-6xl text-accent" />
                </motion.div>
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-semibold text-accent"
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
                      <span className="text-accent">Internet Protocol</span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/90 leading-relaxed"
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
                  <button className="group bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="flex items-center gap-2">
                      Learn More
                      <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="flex items-center gap-2">
                      Watch Video
                      <FaPlay className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                    </span>
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Column - Interactive Elements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
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
                          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                            <div className="text-4xl text-accent mb-3 transform group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <div className="text-white/90 font-semibold">
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
      <section className="py-12 px-4 bg-white dark:bg-primary/5">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-primary shadow-lg'
                    : 'bg-white dark:bg-primary/5 text-primary/80 dark:text-secondary/80 hover:bg-accent/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary dark:text-accent">What is IPv6?</h2>
                  <p className="text-lg text-primary/80 dark:text-secondary/80">
                    IPv6 is the most recent version of the Internet Protocol, designed to replace IPv4. 
                    It provides a vastly larger address space, improved security, and better support for 
                    modern internet requirements.
                  </p>
                  <div className="bg-white dark:bg-primary/5 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-primary dark:text-accent">Key Differences</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-accent mt-1" />
                        <span className="text-primary/80 dark:text-secondary/80">128-bit address space vs IPv4's 32-bit</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-accent mt-1" />
                        <span className="text-primary/80 dark:text-secondary/80">Built-in security features</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-accent mt-1" />
                        <span className="text-primary/80 dark:text-secondary/80">Improved header format</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/7_-qWlvQQtY"
                    title="IPv6 Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex items-center gap-4">
                  <Link to="/test-ipv6" className="btn btn-primary">
                    Test Your IPv6
                  </Link>
                  <Link to="/resources" className="btn btn-outline">
                    View Resources
                  </Link>
                </div>
              </motion.div>
            )}

            {activeTab === 'benefits' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-white dark:bg-primary/5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-6"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="text-accent mb-4">{benefit.icon}</div>
                        <div className="text-2xl font-bold text-accent mb-2">{benefit.stat}</div>
                        <h3 className="text-xl font-semibold mb-2 text-primary dark:text-accent">{benefit.title}</h3>
                        <p className="text-primary/80 dark:text-secondary/80 mb-4">{benefit.description}</p>
                        <p className="text-sm text-primary/60 dark:text-secondary/60">{benefit.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-white dark:bg-primary/5 rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-primary dark:text-accent">Why IPv6 Matters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-primary/80 dark:text-secondary/80">
                        IPv6 is essential for the future of the internet. With the exponential growth of connected devices,
                        IPv4's limited address space is no longer sufficient. IPv6 provides the necessary infrastructure
                        for the Internet of Things, cloud computing, and future technological innovations.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <FaCheckCircle className="text-accent" />
                          <span>Future-proof addressing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCheckCircle className="text-accent" />
                          <span>Enhanced security</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FaCheckCircle className="text-accent" />
                          <span>Better performance</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                      <iframe
                        className="w-full aspect-video"
                        src="https://www.youtube.com/embed/o5Cv9fvajrc"
                        title="Why IPv6 Matters"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Link to="/get-involved" className="btn btn-primary">
                    Get Involved
                  </Link>
                  <Link to="/contact" className="btn btn-outline">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            )}

            {activeTab === 'implementation' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-primary/5 rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="text-accent">{feature.icon}</div>
                          <h3 className="text-2xl font-semibold text-primary dark:text-accent">{feature.title}</h3>
                        </div>
                        <p className="text-lg text-primary/80 dark:text-secondary/80">{feature.description}</p>
                        <ul className="space-y-3">
                          {feature.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <FaCheckCircle className="text-accent mt-1" />
                              <span className="text-primary/80 dark:text-secondary/80">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative rounded-xl overflow-hidden shadow-xl">
                        <iframe
                          className="w-full aspect-video"
                          src={feature.video}
                          title={feature.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <div className="flex items-center gap-4">
                  <a
                    href="https://tools.ietf.org/html/rfc8200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read RFC 8200
                  </a>
                  <a
                    href="https://tools.ietf.org/html/rfc2460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Read RFC 2460
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://tools.ietf.org/html/rfc4291"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read RFC 4291
                  </a>
                  <a
                    href="https://tools.ietf.org/html/rfc4861"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Read RFC 4861
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutIPv6;
