// === src/pages/AboutIPv6.js ===
import React from 'react';
import { motion } from 'framer-motion';

function AboutIPv6() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <motion.h2 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          About IPv6
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg mb-8 transform hover:scale-[1.02] transition-transform duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">IPv6 Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            IPv6 (Internet Protocol version 6) is the successor to IPv4, designed to solve the limitations of the previous protocol. It enables a vastly larger address space, enhances security, and ensures the scalability of the modern internet.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-xl shadow-lg mb-8 transform hover:scale-[1.02] transition-transform duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">IPv4 Limitations</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            IPv4 uses 32-bit addressing, which supports about 4.3 billion unique addresses. With the explosion of internet-connected devices, this space has been exhausted.
          </p>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/images/ipv4-exhaustion-chart.png"
              alt="IPv4 Address Exhaustion Chart"
              className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-lg mb-8 transform hover:scale-[1.02] transition-transform duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Core Features of IPv6</h3>
          <ul className="space-y-3">
            {[
              { icon: "🔢", text: "128-bit Addressing for near-unlimited unique IPs" },
              { icon: "⚡", text: "Stateless Address Auto Configuration (SLAAC)" },
              { icon: "🔒", text: "Integrated IPsec for built-in security" },
              { icon: "🚀", text: "Efficient Multicasting and streamlined routing" }
            ].map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span>{feature.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white p-8 rounded-xl shadow-lg mb-8 transform hover:scale-[1.02] transition-transform duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Applications of IPv6</h3>
          <ul className="space-y-3">
            {[
              { icon: "🌐", text: "Internet of Things (IoT) — supports billions of devices" },
              { icon: "📱", text: "Mobile Networks — better handoff and efficiency" },
              { icon: "🏢", text: "Government and Enterprise Networks — secure and scalable" }
            ].map((app, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <span className="text-2xl">{app.icon}</span>
                <span>{app.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Expert Insights</h3>
          <div className="space-y-4">
            <motion.blockquote 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="italic text-gray-600 mb-4 border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-colors duration-300"
            >
              "IPv6 is foundational to the next-generation internet. It enables innovation at a global scale." — Google Engineering Blog
            </motion.blockquote>
            <motion.blockquote 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="italic text-gray-600 border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-colors duration-300"
            >
              "Deploying IPv6 is not optional for businesses aiming to stay connected and competitive." — Cisco Networking Report
            </motion.blockquote>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutIPv6;
