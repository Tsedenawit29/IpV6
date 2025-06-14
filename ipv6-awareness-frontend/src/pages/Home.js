// === src/pages/Home.js ===
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGlobe, FaShieldAlt, FaBolt, FaRobot, FaArrowRight, FaChartLine, FaNetworkWired, FaMobileAlt, FaCloud, FaServer, FaLock, FaCheckCircle, FaExclamationTriangle, FaBook, FaUsers, FaTools, FaArrowLeft } from 'react-icons/fa';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const features = [
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global IPv6 Adoption",
      description: "Track the worldwide progress of IPv6 implementation and adoption rates across different regions."
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Educational Resources",
      description: "Access comprehensive guides, tutorials, and documentation to learn about IPv6 implementation."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community Support",
      description: "Join a vibrant community of IPv6 enthusiasts, experts, and implementers."
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Implementation Tools",
      description: "Discover tools and utilities to help with IPv6 deployment and testing."
    }
  ];

  const benefits = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Enhanced Performance",
      description: "Experience faster and more efficient network communication with IPv6's improved routing and packet processing."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Better Security",
      description: "Benefit from built-in IPsec support and improved security features in IPv6."
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Simplified Network Management",
      description: "Enjoy easier network configuration and management with IPv6's auto-configuration capabilities."
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile Support",
      description: "Better support for mobile devices and seamless roaming between networks."
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Seamless integration with cloud services and better support for modern applications."
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description: "Built-in support for end-to-end encryption and enhanced privacy features."
    }
  ];

  const stats = [
    { value: "40%", label: "Global Adoption", icon: <FaChartLine /> },
    { value: "100+", label: "Countries", icon: <FaGlobe /> },
    { value: "1B+", label: "Devices", icon: <FaMobileAlt /> },
    { value: "24/7", label: "Support", icon: <FaServer /> }
  ];

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovering, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-blob dark:bg-primary/30" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-blob animation-delay-2000 dark:bg-accent/30" />
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-blob animation-delay-4000 dark:bg-primary/30" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
              Welcome to <span className="text-primary">IPv6</span> Awareness
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Empowering the future of internet connectivity through IPv6 education and implementation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about-ipv6"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Learn More
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/get-involved"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform border-2 border-primary rounded-lg hover:scale-105 hover:shadow-lg dark:text-white dark:border-white"
              >
                <span className="relative flex items-center gap-2">
                  Get Involved
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-yellow-500 mb-2 transform hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2 dark:text-white">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Carousel */}
      <div className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Why Choose <span className="text-primary">IPv6</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover the advantages of IPv6 and how it's shaping the future of internet connectivity
            </p>
          </motion.div>

          <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="text-yellow-500 transform hover:scale-110 transition-transform duration-300">
                    {features[currentSlide].icon}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-full hover:bg-primary/10 transition-colors dark:hover:bg-primary/20"
                    >
                      <FaArrowLeft className="w-5 h-5 text-primary dark:text-white" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-full hover:bg-primary/10 transition-colors dark:hover:bg-primary/20"
                    >
                      <FaArrowRight className="w-5 h-5 text-primary dark:text-white" />
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                  {features[currentSlide].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {features[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Key <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experience the advantages of IPv6 implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border-2 border-transparent hover:border-primary/20 dark:hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-yellow-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Ready to <span className="text-primary">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join us in building a better internet with IPv6
            </p>
            <Link
              to="/get-involved"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
              <span className="relative flex items-center gap-2">
                Get Involved
                <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
