import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShieldAlt, FaGlobe, FaNetworkWired, FaLock } from 'react-icons/fa';

const AboutIPv6 = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-accent/10 dark:from-dark-bg-primary dark:via-primary/10 dark:to-accent/20"></div>
        <div className="absolute inset-0 hero-pattern"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white"
            >
              Understanding <span className="text-primary">IPv6</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              The next generation of Internet Protocol that's revolutionizing how we connect to the digital world
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                to="/resources" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Explore Resources
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/documentation" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform bg-transparent hover:bg-primary-dark hover:text-white rounded-lg hover:scale-105 hover:shadow-lg border-2 border-primary"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-primary group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  View Documentation
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg-primary dark:to-dark-bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What is IPv6?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              IPv6 is the most recent version of the Internet Protocol, designed to replace IPv4 and address its limitations.
              It provides a vastly expanded address space and improved features for the modern internet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/ipv6-diagram.jpg" 
                  alt="IPv6 Network Diagram" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FaGlobe className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Global Reach</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    IPv6 enables the connection of countless devices to the internet, supporting the growing IoT ecosystem.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FaShieldAlt className="text-2xl text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Enhanced Security</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built-in security features and improved encryption capabilities for better data protection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FaNetworkWired className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Efficient Routing</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Simplified header structure and improved routing efficiency for better network performance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white dark:bg-dark-bg-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover the powerful features that make IPv6 the future of internet connectivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGlobe className="text-3xl text-accent" />,
                title: "Larger Address Space",
                description: "128-bit address space providing virtually unlimited IP addresses"
              },
              {
                icon: <FaShieldAlt className="text-3xl text-primary" />,
                title: "Built-in Security",
                description: "IPsec support for enhanced network security and encryption"
              },
              {
                icon: <FaNetworkWired className="text-3xl text-accent" />,
                title: "Improved Routing",
                description: "Simplified header structure for better routing efficiency"
              },
              {
                icon: <FaLock className="text-3xl text-primary" />,
                title: "Auto-configuration",
                description: "Stateless address autoconfiguration for easier network setup"
              },
              {
                icon: <FaGlobe className="text-3xl text-accent" />,
                title: "Better Performance",
                description: "Reduced processing overhead and improved packet handling"
              },
              {
                icon: <FaShieldAlt className="text-3xl text-primary" />,
                title: "Future-Proof",
                description: "Designed to meet the needs of tomorrow's internet"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-white dark:bg-dark-bg-secondary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore our comprehensive resources and documentation to dive deeper into IPv6
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/resources" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Explore Resources
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/documentation" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform bg-transparent hover:bg-primary-dark hover:text-white rounded-lg hover:scale-105 hover:shadow-lg border-2 border-primary"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-primary group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  View Documentation
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

export default AboutIPv6;
