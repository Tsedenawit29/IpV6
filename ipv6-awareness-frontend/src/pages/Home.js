// === src/pages/Home.js ===
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGlobe, FaShieldAlt, FaBolt, FaRobot, FaArrowRight, FaChartLine, FaNetworkWired, FaMobileAlt, FaCloud, FaServer, FaLock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

function Home() {
  const benefits = [
    {
      icon: <FaServer className="w-8 h-8" />,
      title: 'Larger Address Space',
      description: 'IPv6 provides 128-bit addresses, enabling virtually unlimited IP addresses.',
      stat: '340 undecillion addresses'
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      title: 'Enhanced Security',
      description: 'Built-in IPsec support and improved security features.',
      stat: '100% encrypted by default'
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: 'Better Performance',
      description: 'Improved routing efficiency and packet processing.',
      stat: '40% faster routing'
    }
  ];

  const features = [
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: 'Auto-Configuration',
      description: 'Simplified network configuration and management.'
    },
    {
      icon: <FaExclamationTriangle className="w-8 h-8" />,
      title: 'Future-Proof',
      description: 'Designed to meet the growing demands of the internet.'
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: 'Improved Routing',
      description: 'More efficient packet routing and better network performance.'
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: 'Mobile Support',
      description: 'Better support for mobile devices and IoT applications.'
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: 'Cloud Ready',
      description: 'Optimized for cloud computing and distributed systems.'
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      title: 'Enhanced Security',
      description: 'Built-in security features and better privacy protection.'
    }
  ];

  const stats = [
    { value: "40%", label: "Global Adoption", icon: <FaChartLine /> },
    { value: "100+", label: "Countries", icon: <FaGlobe /> },
    { value: "1B+", label: "Devices", icon: <FaMobileAlt /> },
    { value: "24/7", label: "Support", icon: <FaServer /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-white via-primary/10 to-primary/5 dark:from-dark-bg-primary dark:via-primary/20 dark:to-primary/10">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="inline-block p-4 rounded-2xl bg-primary/10 dark:bg-primary/20 mb-8">
                <FaGlobe className="text-6xl text-primary" />
              </div>
              <div className="space-y-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-primary"
                >
                  Welcome to the Future of Internet
                </motion.div>
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6"
                >
                  The Future is <span className="text-primary relative">
                    IPv6
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 rounded-full"></span>
                  </span>
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl mb-12 text-black/80 dark:text-white/80 leading-relaxed max-w-2xl mx-auto"
                >
                  Next generation internet protocol for a connected world
                </motion.p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6"
            >
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
                to="/resources" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform border-2 border-primary hover:bg-primary hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  View Resources
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
                </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-black/60 dark:text-white/60"
          >
            <span className="text-sm">Scroll to explore</span>
            <FaArrowRight className="w-4 h-4 transform rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 px-4 bg-white dark:bg-dark-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-black/80 dark:text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-secondary dark:to-dark-bg-primary">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-16"
          >
            Why <span className="text-primary">IPv6</span> Matters
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-yellow-500 mb-6 transform hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-black/80 dark:text-white/80 mb-6">
                  {benefit.description}
                </p>
                <div className="text-primary font-semibold">{benefit.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-16"
          >
            Key <span className="text-primary">Features</span>
          </motion.h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-start p-6 bg-white dark:bg-dark-bg-tertiary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-yellow-500 transform hover:scale-110 transition-transform duration-300 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  {feature.title}
                </h3>
                  <p className="text-black/80 dark:text-white/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
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
                to="/resources" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform border-2 border-primary hover:bg-primary hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                View Resources
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-secondary dark:to-dark-bg-primary">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-16"
          >
            IPv6 <span className="text-primary">Status</span>
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">Global Adoption</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-black/80 dark:text-white/80">Global Adoption</span>
                    <span className="text-primary font-semibold">40%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-black/80 dark:text-white/80">Mobile Networks</span>
                    <span className="text-primary font-semibold">60%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-black/80 dark:text-white/80">Enterprise Adoption</span>
                    <span className="text-primary font-semibold">35%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "35%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">Regional Overview</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaCheckCircle className="text-yellow-500 text-xl" />
                  <div>
                    <h4 className="text-black dark:text-white font-semibold">North America</h4>
                    <p className="text-black/80 dark:text-white/80">Leading in IPv6 adoption with 45% implementation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaCheckCircle className="text-yellow-500 text-xl" />
                  <div>
                    <h4 className="text-black dark:text-white font-semibold">Europe</h4>
                    <p className="text-black/80 dark:text-white/80">Strong adoption rate at 38% across major networks</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaExclamationTriangle className="text-yellow-500 text-xl" />
                  <div>
                    <h4 className="text-black dark:text-white font-semibold">Asia Pacific</h4>
                    <p className="text-black/80 dark:text-white/80">Growing adoption with 25% implementation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaExclamationTriangle className="text-yellow-500 text-xl" />
                  <div>
                    <h4 className="text-black dark:text-white font-semibold">Africa</h4>
                    <p className="text-black/80 dark:text-white/80">Early stages with 15% adoption rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
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

export default Home;
