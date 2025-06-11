import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaCheckCircle, FaTimesCircle, FaInfoCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TestIPv6() {
  const [testResults, setTestResults] = useState({
    ipv6Support: null,
    ipv6Connectivity: null,
    ipv6DNS: null,
    loading: true
  });

  useEffect(() => {
    // Simulate IPv6 test results
    setTimeout(() => {
      setTestResults({
        ipv6Support: true,
        ipv6Connectivity: true,
        ipv6DNS: true,
        loading: false
      });
    }, 2000);
  }, []);

  const testItems = [
    {
      id: 'ipv6Support',
      title: 'IPv6 Support',
      description: 'Check if your system supports IPv6',
      icon: <FaNetworkWired className="w-8 h-8" />
    },
    {
      id: 'ipv6Connectivity',
      title: 'IPv6 Connectivity',
      description: 'Test your IPv6 internet connectivity',
      icon: <FaNetworkWired className="w-8 h-8" />
    },
    {
      id: 'ipv6DNS',
      title: 'IPv6 DNS',
      description: 'Verify IPv6 DNS resolution',
      icon: <FaNetworkWired className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004D00]/10 to-[#FFD700]/10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#004D00] dark:text-white mb-6">
              IPv6 Connectivity Test
            </h1>
            <p className="text-lg text-[#004D00]/80 dark:text-[#009900]/80 mb-8">
              Check your system's IPv6 readiness and connectivity status
            </p>
          </motion.div>
        </div>
      </section>

      {/* Test Results Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-[#004D00]/5 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-[#FFD700] mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#004D00] dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#004D00]/80 dark:text-[#009900]/80 mb-4">
                    {item.description}
                  </p>
                  {testResults.loading ? (
                    <div className="animate-pulse h-8 bg-[#004D00]/10 dark:bg-[#009900]/10 rounded-lg"></div>
                  ) : (
                    <div className="flex items-center gap-2">
                      {testResults[item.id] ? (
                        <FaCheckCircle className="text-green-500 w-6 h-6" />
                      ) : (
                        <FaTimesCircle className="text-red-500 w-6 h-6" />
                      )}
                      <span className={testResults[item.id] ? "text-green-500" : "text-red-500"}>
                        {testResults[item.id] ? "Passed" : "Failed"}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 px-4 bg-white dark:bg-[#004D00]/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-[#004D00]/5 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#004D00] dark:text-white mb-6">
                What These Tests Mean
              </h3>
              <div className="space-y-4">
                <p className="text-[#004D00]/80 dark:text-[#009900]/80">
                  These tests check your system's IPv6 readiness and connectivity. Here's what each test means:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FaInfoCircle className="text-[#FFD700] w-5 h-5 mt-1" />
                    <span className="text-[#004D00]/80 dark:text-[#009900]/80">
                      <strong>IPv6 Support:</strong> Checks if your system has IPv6 protocol support enabled
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaInfoCircle className="text-[#FFD700] w-5 h-5 mt-1" />
                    <span className="text-[#004D00]/80 dark:text-[#009900]/80">
                      <strong>IPv6 Connectivity:</strong> Tests if you can reach IPv6-enabled websites
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaInfoCircle className="text-[#FFD700] w-5 h-5 mt-1" />
                    <span className="text-[#004D00]/80 dark:text-[#009900]/80">
                      <strong>IPv6 DNS:</strong> Verifies if your DNS can resolve IPv6 addresses
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#004D00] dark:text-white mb-6">
            Need Help with IPv6?
          </h2>
          <p className="text-lg text-[#004D00]/80 dark:text-[#009900]/80 mb-8 max-w-2xl mx-auto">
            If you're having issues with IPv6, we can help you troubleshoot and implement IPv6 in your network
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/resources" className="btn btn-primary">
              View Resources
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestIPv6; 