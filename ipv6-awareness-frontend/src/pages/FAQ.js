import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBook, FaUsers, FaTools, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

  const resources = [
    {
      title: "Documentation",
      description: "Detailed guides and technical documentation for IPv6 implementation",
      icon: <FaBook className="w-8 h-8" />,
      link: "/documentation"
    },
    {
      title: "Community",
      description: "Join our community of IPv6 experts and enthusiasts",
      icon: <FaUsers className="w-8 h-8" />,
      link: "/community"
    },
    {
      title: "Tools",
      description: "Implementation tools and utilities for IPv6 deployment",
      icon: <FaTools className="w-8 h-8" />,
      link: "/tools"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
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
            <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find answers to common questions about IPv6
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="py-16 bg-white dark:bg-gray-800">
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
                  className="w-full flex items-center justify-between p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border-2 border-transparent hover:border-primary/20 dark:hover:border-primary/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-left text-black dark:text-white">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white dark:bg-gray-700 rounded-b-xl border-2 border-t-0 border-gray-100 dark:border-gray-600">
                        <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Resources */}
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
              Additional <span className="text-primary">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore more resources to learn about IPv6
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary/40 transition-all duration-300"
                >
                  <div className="text-yellow-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {resource.description}
                  </p>
                  <Link
                    to={resource.link}
                    className="inline-flex items-center text-primary dark:text-white hover:text-primary-dark dark:hover:text-gray-300 transition-colors duration-300"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 