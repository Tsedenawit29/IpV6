import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaUserCheck, FaShieldAlt, FaExclamationTriangle, FaEnvelope } from 'react-icons/fa';

function TermsOfService() {
  const termsSections = [
    {
      icon: <FaGavel className="w-8 h-8" />,
      title: "Acceptance of Terms",
      content: "By accessing and using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting."
    },
    {
      icon: <FaUserCheck className="w-8 h-8" />,
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when using our services and to update such information to keep it accurate and current."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Service Usage",
      content: "Our services are provided 'as is' and 'as available.' We make no warranties, expressed or implied, regarding the operation of our services or the information, content, or materials included on our website. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time."
    },
    {
      icon: <FaExclamationTriangle className="w-8 h-8" />,
      title: "Prohibited Activities",
      content: "You agree not to engage in any activity that interferes with or disrupts our services or the servers and networks connected to our services. This includes, but is not limited to, attempting to gain unauthorized access to our systems or other users' accounts."
    }
  ];

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
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </div>

      {/* Terms Sections */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-start gap-6">
                  <div className="text-yellow-500 transform hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
                      {section.title}
                    </h2>
                    <div className="prose dark:prose-invert max-w-none">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
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
              Additional <span className="text-primary">Information</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Last updated: March 15, 2024
            </p>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For any questions about these terms, please contact us at:
              </p>
              <a
                href="mailto:legal@ipv6awareness.org"
                className="inline-flex items-center text-primary dark:text-white hover:text-primary-dark dark:hover:text-gray-300 transition-colors duration-300"
              >
                <FaEnvelope className="mr-2 w-5 h-5 text-yellow-500" />
                legal@ipv6awareness.org
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService; 