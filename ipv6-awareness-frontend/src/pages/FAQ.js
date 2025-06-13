import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is IPv6?",
      answer: "IPv6 (Internet Protocol version 6) is the most recent version of the Internet Protocol, designed to replace IPv4. It provides a vastly larger address space, improved security features, and better support for modern internet requirements."
    },
    {
      question: "Why do we need IPv6?",
      answer: "IPv6 is necessary because IPv4 addresses are running out. IPv6 provides a much larger address space (128-bit vs 32-bit), better security features, improved routing efficiency, and better support for modern internet requirements like IoT devices."
    },
    {
      question: "How do I check if I'm using IPv6?",
      answer: "You can check your IPv6 connectivity by visiting our IPv6 test page or using online tools like test-ipv6.com. Your operating system's network settings will also show if IPv6 is enabled and configured."
    },
    {
      question: "Is IPv6 more secure than IPv4?",
      answer: "IPv6 includes built-in security features like IPsec, which provides authentication and encryption at the IP layer. However, proper implementation and configuration are still essential for maintaining security."
    },
    {
      question: "How do I enable IPv6 on my network?",
      answer: "Enabling IPv6 depends on your network setup. Generally, you'll need to: 1) Ensure your ISP supports IPv6, 2) Configure your router for IPv6, 3) Enable IPv6 on your devices. Our documentation provides detailed guides for different setups."
    },
    {
      question: "Will IPv6 affect my internet speed?",
      answer: "IPv6 can potentially improve internet performance due to its more efficient routing and larger packet size. However, the actual impact depends on your network configuration and ISP implementation."
    },
    {
      question: "What are the main differences between IPv4 and IPv6?",
      answer: "Key differences include: larger address space (128-bit vs 32-bit), built-in security features, simplified header format, improved routing efficiency, and better support for auto-configuration."
    },
    {
      question: "How do I troubleshoot IPv6 connectivity issues?",
      answer: "Common troubleshooting steps include: checking your network configuration, verifying ISP support, testing with different devices, and using diagnostic tools. Our support resources provide detailed troubleshooting guides."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-black/80 dark:text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about IPv6
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-bg-tertiary rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUpIcon className="h-5 w-5 text-green-500 dark:text-green-400" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-green-500 dark:text-green-400" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-black/80 dark:text-white/80">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-primary dark:text-dark-text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-primary/70 dark:text-dark-text-secondary mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 