import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGlobe, FaShieldAlt, FaBolt, FaRobot, FaArrowRight, FaNetworkWired, FaServer, FaTools, FaMobileAlt, FaCloud, FaInfoCircle, FaLock, FaChartLine, FaUsers, FaCode, FaDatabase, FaShieldVirus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Bubble component for the animated background
const Bubble = ({ delay, size, x, y }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.1, 0.2, 0.1],
      scale: [1, 1.2, 1],
      x: [x, x + 20, x],
      y: [y, y - 20, y],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute rounded-full bg-white/10 backdrop-blur-sm"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
    }}
  />
);

function AboutIPv6() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <FaInfoCircle className="text-4xl text-yellow-500" />,
      features: [
        {
          title: 'What is IPv6?',
          description: 'IPv6 is the most recent version of the Internet Protocol, designed to replace IPv4 and address its limitations.',
          icon: <FaGlobe className="text-4xl text-yellow-500" />,
          details: [
            '128-bit address space',
            'Improved header format',
            'Built-in security features',
            'Better routing efficiency'
          ]
        },
        {
          title: 'Address Space',
          description: 'Provides 340 undecillion unique addresses, ensuring the internet can grow for generations to come.',
          icon: <FaNetworkWired className="text-4xl text-yellow-500" />,
          details: [
            '340 trillion trillion trillion addresses',
            'Eliminates need for NAT',
            'Simplifies network management',
            'Enables true end-to-end connectivity'
          ]
        },
        {
          title: 'Protocol Structure',
          description: 'Features a streamlined header format and improved routing efficiency.',
          icon: <FaServer className="text-4xl text-yellow-500" />,
          details: [
            'Simplified header format',
            'Improved routing efficiency',
            'Better support for extensions',
            'Enhanced QoS capabilities'
          ]
        }
      ]
    },
    {
      id: 'benefits',
      title: 'Benefits',
      icon: <FaShieldAlt className="text-4xl text-yellow-500" />,
      features: [
        {
          title: 'Enhanced Security',
          description: 'Built-in IPsec support for end-to-end encryption and authentication.',
          icon: <FaLock className="text-4xl text-yellow-500" />,
          details: [
            'Mandatory IPsec support',
            'End-to-end encryption',
            'Improved authentication',
            'Better privacy features'
          ]
        },
        {
          title: 'Better Performance',
          description: 'Improved routing efficiency and reduced network overhead.',
          icon: <FaChartLine className="text-4xl text-yellow-500" />,
          details: [
            'Faster routing',
            'Reduced latency',
            'Better packet handling',
            'Improved QoS support'
          ]
        },
        {
          title: 'IoT Ready',
          description: 'Perfect for the growing Internet of Things ecosystem.',
          icon: <FaRobot className="text-4xl text-yellow-500" />,
          details: [
            'Massive address space',
            'Auto-configuration',
            'Better mobility support',
            'Enhanced multicast'
          ]
        }
      ]
    },
    {
      id: 'implementation',
      title: 'Implementation',
      icon: <FaTools className="text-4xl text-yellow-500" />,
      features: [
        {
          title: 'Easy Migration',
          description: 'Dual-stack approach allows gradual transition from IPv4.',
          icon: <FaCode className="text-4xl text-yellow-500" />,
          details: [
            'Dual-stack support',
            'Tunneling options',
            'Translation services',
            'Gradual deployment'
          ]
        },
        {
          title: 'Mobile Support',
          description: 'Better mobility support with seamless handover between networks.',
          icon: <FaMobileAlt className="text-4xl text-yellow-500" />,
          details: [
            'Seamless mobility',
            'Better handover',
            'Reduced latency',
            'Improved connectivity'
          ]
        },
        {
          title: 'Cloud Ready',
          description: 'Optimized for modern cloud infrastructure and services.',
          icon: <FaCloud className="text-4xl text-yellow-500" />,
          details: [
            'Cloud-native support',
            'Container compatibility',
            'Microservices ready',
            'Scalable architecture'
          ]
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sections[currentSection].features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sections[currentSection].features.length) % sections[currentSection].features.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-primary/10 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/90 via-primary/80 to-primary-dark dark:from-dark-bg-primary dark:via-primary/90 dark:to-primary-dark text-white overflow-hidden">
        {/* Animated Bubbles Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <Bubble
              key={i}
              delay={i * 0.2}
              size={Math.random() * 100 + 50}
              x={Math.random() * 100}
              y={Math.random() * 100}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 dark:from-dark-bg-primary/90 dark:to-primary-dark/90"></div>
        
        <div className="container mx-auto px-4 relative z-10 mt-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  className="inline-block p-4 rounded-2xl bg-accent/20 dark:bg-accent/30 backdrop-blur-sm mb-8"
                >
                  <FaInfoCircle className="text-6xl text-yellow-500" />
                </motion.div>
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-semibold text-[#228B22]"
                  >
                    Understanding IPv6
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-6xl md:text-7xl font-bold leading-tight"
                  >
                    The Next Generation{' '}
                    <span className="relative inline-block group">
                      <span className="text-yellow-500 dark:text-[#32CD32]">Internet Protocol</span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500/50 dark:bg-[#32CD32]/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/90 dark:text-white leading-relaxed"
                  >
                    Discover the future of internet addressing and connectivity
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/5 dark:bg-dark-bg-tertiary/20 backdrop-blur-sm p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent dark:from-accent/30 dark:to-transparent"></div>
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
                          <div className="p-6 rounded-xl bg-white/10 dark:bg-dark-bg-tertiary/30 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-dark-bg-tertiary/40 transition-all duration-300">
                            <div className="text-4xl text-yellow-500 mb-3 transform group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <div className="text-white/90 dark:text-white font-semibold">
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
      </section>

      {/* Content Sections */}
      <div className="relative mt-20">
        {/* Section Content */}
        {sections.map((section, sectionIndex) => (
          <section key={section.id} id={section.id} className="py-20 bg-white dark:bg-dark-bg-primary">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-12"
                >
                  <div className="flex items-center gap-4">
                    {section.icon}
                    <h2 className="text-4xl font-bold text-[#228B22] dark:text-[#32CD32]">{section.title}</h2>
                  </div>

                  <div className="relative">
                    <button
                      onClick={prevSlide}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white dark:bg-dark-bg-tertiary shadow-lg hover:bg-gray-50 dark:hover:bg-dark-bg-secondary transition-colors"
                    >
                      <FaChevronLeft className="text-[#228B22] dark:text-[#32CD32] text-xl" />
                    </button>

                    <div className="overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${sectionIndex}-${currentSlide}`}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          className="bg-white dark:bg-dark-bg-secondary rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <div className="space-y-6">
                            <div className="text-yellow-500">
                              {section.features[currentSlide].icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-[#228B22] dark:text-[#32CD32]">
                              {section.features[currentSlide].title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-lg">
                              {section.features[currentSlide].description}
                            </p>
                            <ul className="space-y-3">
                              {section.features[currentSlide].details.map((detail, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                  <span className="w-2 h-2 rounded-full bg-[#228B22] dark:bg-[#32CD32]"></span>
                                  <span className="text-lg">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <button
                      onClick={nextSlide}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white dark:bg-dark-bg-tertiary shadow-lg hover:bg-gray-50 dark:hover:bg-dark-bg-secondary transition-colors"
                    >
                      <FaChevronRight className="text-[#228B22] dark:text-[#32CD32] text-xl" />
                    </button>
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex justify-center gap-2 mt-8">
                    {section.features.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index ? 'bg-[#228B22] dark:bg-[#32CD32] w-8' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#228B22]">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our resources and get started with IPv6 today
            </p>
            <Link
              to="/resources"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-[#228B22] hover:bg-[#1a6b1a] rounded-lg hover:scale-105 hover:shadow-lg"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-[#1a6b1a] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-[#228B22] border-2 border-[#1a6b1a] group-hover:bg-[#1a6b1a]"></span>
              <span className="relative flex items-center gap-2">
                View Resources
                <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutIPv6; 