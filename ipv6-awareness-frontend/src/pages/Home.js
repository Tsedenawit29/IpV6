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
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-white via-primary/10 to-primary dark:from-dark-bg-primary dark:via-dark-bg-secondary dark:to-dark-bg-primary text-primary dark:text-dark-text-primary py-32 transition-colors duration-200 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,0,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,157,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,157,0.08),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="inline-block p-4 rounded-2xl bg-accent/10 dark:bg-dark-bg-tertiary mb-8">
                <FaGlobe className="text-6xl text-accent dark:text-dark-text-accent" />
              </div>
              <div className="space-y-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-accent dark:text-dark-text-accent"
                >
                  Welcome to the Future of Internet
                </motion.div>
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl md:text-8xl font-bold mb-8 text-primary dark:text-dark-text-primary leading-tight"
                >
                  The Future is <span className="text-accent dark:text-dark-text-accent relative">
                    IPv6
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 dark:bg-dark-text-accent/50 rounded-full"></span>
                  </span>
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl mb-12 text-primary/80 dark:text-dark-text-secondary leading-relaxed max-w-2xl mx-auto"
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
              <div className="flex items-center gap-4">
                <Link to="/about-ipv6" className="btn btn-primary">
                  Learn More
                </Link>
                <Link to="/test-ipv6" className="btn btn-outline">
                  Test Your IPv6
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Stats Section */}
      <section className="py-12 px-4 bg-white dark:bg-dark-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent dark:text-dark-text-accent mb-2">{stat.value}</div>
                <div className="text-primary/80 dark:text-dark-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary dark:text-dark-text-primary mb-12">
            Why IPv6 Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-accent dark:text-dark-text-accent mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary dark:text-dark-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-primary/80 dark:text-dark-text-secondary mb-4">
                  {benefit.description}
                </p>
                <div className="text-accent dark:text-dark-text-accent font-semibold">{benefit.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-secondary dark:to-dark-bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary dark:text-dark-text-primary mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-accent dark:text-dark-text-accent mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary dark:text-dark-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary/80 dark:text-dark-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="flex items-center gap-4">
              <Link to="/get-involved" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/resources" className="btn btn-outline">
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-primary dark:text-dark-text-primary"
          >
            IPv6 Status
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-dark-bg-tertiary rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Global IPv6 Adoption Map" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent dark:from-dark-bg-primary/90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Global View</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <FaCheckCircle className="text-accent dark:text-dark-text-accent text-xl" />
                    <span className="text-white/90">Growing adoption worldwide</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaExclamationTriangle className="text-yellow-400 text-xl" />
                    <span className="text-white/90">More work needed in some regions</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-primary dark:text-dark-text-primary mb-6">Current Status</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-primary/80 dark:text-dark-text-secondary">Global Adoption</span>
                  <span className="text-accent dark:text-dark-text-accent font-semibold">40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary/80 dark:text-dark-text-secondary">Countries with IPv6</span>
                  <span className="text-accent dark:text-dark-text-accent font-semibold">100+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary/80 dark:text-dark-text-secondary">Active IPv6 Devices</span>
                  <span className="text-accent dark:text-dark-text-accent font-semibold">1B+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#004D00] dark:text-white mb-6">
            Ready to Make the Switch?
          </h2>
          <p className="text-lg text-[#004D00]/80 dark:text-[#009900]/80 mb-8 max-w-2xl mx-auto">
            Join the growing community of organizations embracing IPv6 for a better internet future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-4">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/about-ipv6" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
