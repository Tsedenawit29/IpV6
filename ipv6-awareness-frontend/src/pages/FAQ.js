import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaBook, FaUsers, FaTools } from 'react-icons/fa';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What is IPv6?",
      answer: "IPv6 (Internet Protocol version 6) is the most recent version of the Internet Protocol, designed to replace IPv4. It provides a vastly larger address space, improved security features, and better support for modern internet requirements."
    },
    {
      question: "Why do we need IPv6?",
      answer: "IPv6 is necessary because IPv4 addresses are running out. IPv6 provides a much larger address space (128-bit vs 32-bit), better security features, improved routing efficiency, and better support for modern internet requirements like IoT devices and mobile networks."
    },
    {
      question: "How do I implement IPv6?",
      answer: "Implementing IPv6 involves several steps: 1) Check your hardware and software compatibility, 2) Configure your network devices to support IPv6, 3) Update your DNS settings, 4) Test your implementation, and 5) Monitor and maintain your IPv6 deployment."
    },
    {
      question: "Is IPv6 backward compatible with IPv4?",
      answer: "IPv6 is not directly backward compatible with IPv4, but there are several transition mechanisms available, including dual-stack operation, tunneling, and translation services that allow IPv6 and IPv4 networks to communicate with each other."
    },
    {
      question: "What are the security implications of IPv6?",
      answer: "IPv6 includes built-in support for IPsec, which provides authentication and encryption at the IP layer. However, it also introduces new security considerations that need to be addressed, such as neighbor discovery security and proper firewall configuration."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-black">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about IPv6 implementation and adoption
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between"
                >
                  <h3 className="text-xl font-bold text-black text-left">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-b-xl mt-2">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-black">
              Need More <span className="text-primary">Information</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our comprehensive resources to learn more about IPv6
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl"
              >
                <FaBook className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Documentation</h3>
                <p className="text-gray-600">Detailed guides and technical documentation</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl"
              >
                <FaUsers className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600">Join our community of IPv6 experts</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl"
              >
                <FaTools className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Tools</h3>
                <p className="text-gray-600">Implementation tools and utilities</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 