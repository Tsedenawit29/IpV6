import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is IPv6?",
          answer: "IPv6 (Internet Protocol version 6) is the most recent version of the Internet Protocol, designed to replace IPv4. It provides a vastly larger address space and improved features for modern internet requirements."
        },
        {
          question: "Why do we need IPv6?",
          answer: "IPv6 is necessary because IPv4 addresses are running out. IPv6 provides a much larger address space (128-bit vs 32-bit), better security features, improved routing efficiency, and better support for mobile devices."
        },
        {
          question: "Is IPv6 backward compatible with IPv4?",
          answer: "IPv6 is not directly backward compatible with IPv4, but there are several transition mechanisms that allow IPv6 and IPv4 to coexist. These include dual-stack, tunneling, and translation techniques."
        }
      ]
    },
    {
      title: "Technical Questions",
      questions: [
        {
          question: "How do IPv6 addresses work?",
          answer: "IPv6 addresses are 128 bits long and are written as eight groups of four hexadecimal digits, separated by colons. For example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334"
        },
        {
          question: "What are the main differences between IPv4 and IPv6?",
          answer: "Key differences include: larger address space (128-bit vs 32-bit), built-in security (IPsec), simplified header format, improved routing efficiency, and better support for auto-configuration."
        },
        {
          question: "How do I configure IPv6 on my network?",
          answer: "IPv6 configuration depends on your network setup. Generally, you'll need to: enable IPv6 on your router, configure your network devices, update your firewall rules, and ensure your applications support IPv6."
        }
      ]
    },
    {
      title: "Implementation Questions",
      questions: [
        {
          question: "How do I test if my network supports IPv6?",
          answer: "You can test IPv6 support using various online tools, command-line utilities like ping6, or by visiting IPv6 test websites. Our website also provides a built-in IPv6 testing tool."
        },
        {
          question: "What are common IPv6 deployment challenges?",
          answer: "Common challenges include: legacy equipment compatibility, security configuration, staff training, application support, and ensuring proper network monitoring and management tools."
        },
        {
          question: "How do I secure my IPv6 network?",
          answer: "IPv6 security involves: configuring firewalls properly, implementing proper access controls, monitoring IPv6 traffic, keeping systems updated, and following security best practices specific to IPv6."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
        Frequently Asked Questions
      </h1>

      <div className="mb-12">
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed">
          Find answers to common questions about IPv6, its implementation, and best practices. 
          If you don't find what you're looking for, feel free to contact our support team.
        </p>
      </div>

      <div className="space-y-8">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white dark:bg-primary-dark/50 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-accent mb-6">{category.title}</h2>
            <div className="space-y-4">
              {category.questions.map((item, questionIndex) => {
                const index = `${categoryIndex}-${questionIndex}`;
                const isOpen = openIndex === index;
                
                return (
                  <div 
                    key={questionIndex}
                    className="border border-primary/10 dark:border-secondary/10 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="font-medium text-primary dark:text-white">{item.question}</span>
                      <svg
                        className={`w-5 h-5 text-accent transform transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`px-6 transition-all duration-300 ${
                        isOpen ? 'max-h-96 py-4' : 'max-h-0'
                      } overflow-hidden`}
                    >
                      <p className="text-primary/80 dark:text-secondary/80">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Still Have Questions?</h2>
        <p className="text-primary/80 dark:text-secondary/80 mb-6">
          Our support team is here to help. Contact us for personalized assistance with your IPv6 implementation.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent transform hover:scale-105 transition-all duration-300"
          >
            Contact Support
          </a>
          <a
            href="/help"
            className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transform hover:scale-105 transition-all duration-300"
          >
            Visit Help Center
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 