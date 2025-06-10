// === src/pages/Home.js ===
import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaShieldAlt, FaBolt, FaRobot } from 'react-icons/fa';

function Home() {
  const benefits = [
    {
      icon: <FaGlobe className="text-4xl text-blue-500" />,
      title: "Unlimited Addressing",
      description: "From billions to trillions of devices"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-500" />,
      title: "Built-in Security",
      description: "IPsec baked into the core"
    },
    {
      icon: <FaBolt className="text-4xl text-yellow-500" />,
      title: "Improved Speed",
      description: "Simplified routing = faster performance"
    },
    {
      icon: <FaRobot className="text-4xl text-purple-500" />,
      title: "Future-Ready",
      description: "Designed for IoT, mobile, and smart tech"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4"
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Unlock the Internet of Tomorrow with IPv6
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Experience lightning-fast, secure, and infinitely scalable connectivity — built for the future.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
              Learn How IPv6 Changes Everything
            </button>
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300">
              Run IPv6 Test
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why IPv6?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Statistics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Live Adoption Statistics
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Global IPv6 Adoption</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                {/* Add your world map visualization here */}
                <div className="flex items-center justify-center text-gray-500">
                  World Map Visualization
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Adoption by Region</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                {/* Add your charts here */}
                <div className="flex items-center justify-center text-gray-500">
                  Regional Statistics Chart
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Test Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Test Your IPv6 Readiness</h2>
            <p className="text-gray-600 mb-8">
              Check if your network and devices are ready for the IPv6 revolution
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto">
              <span className="mr-2">🔍</span>
              Test Your IPv6
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
