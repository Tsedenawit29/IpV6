import React from 'react';

function Documentation() {
  const documentationSections = [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction to IPv6",
          description: "Learn the basics of IPv6 and why it's important",
          link: "/docs/intro"
        },
        {
          title: "IPv6 Address Format",
          description: "Understanding IPv6 addressing and notation",
          link: "/docs/address-format"
        },
        {
          title: "Migration Guide",
          description: "Step-by-step guide to migrating from IPv4 to IPv6",
          link: "/docs/migration"
        }
      ]
    },
    {
      title: "Technical Guides",
      items: [
        {
          title: "Network Configuration",
          description: "Detailed guides for configuring IPv6 on various platforms",
          link: "/docs/network-config"
        },
        {
          title: "Security Best Practices",
          description: "Security considerations and recommendations for IPv6",
          link: "/docs/security"
        },
        {
          title: "Performance Optimization",
          description: "Tips and techniques for optimizing IPv6 performance",
          link: "/docs/performance"
        }
      ]
    },
    {
      title: "Implementation Guides",
      items: [
        {
          title: "Router Configuration",
          description: "Guide to configuring IPv6 on different router platforms",
          link: "/docs/router-config"
        },
        {
          title: "Server Setup",
          description: "Setting up IPv6 on various server operating systems",
          link: "/docs/server-setup"
        },
        {
          title: "Application Development",
          description: "Developing applications with IPv6 support",
          link: "/docs/app-development"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
        IPv6 Documentation
      </h1>
      <p className="text-lg text-black/80 dark:text-white/80 max-w-2xl mx-auto">
        Comprehensive guides and technical documentation for IPv6
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {documentationSections.map((section, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-primary-dark/50 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-accent mb-6">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="block p-4 rounded-lg border border-primary/10 dark:border-secondary/10 hover:border-accent/50 dark:hover:border-accent/50 transform hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-black/80 dark:text-white/80 mb-4">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Tools & Utilities</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <a href="/tools/ipv6-calculator" className="text-primary/80 dark:text-secondary/80 hover:text-accent transition-colors">
                  IPv6 Calculator
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <a href="/tools/network-analyzer" className="text-primary/80 dark:text-secondary/80 hover:text-accent transition-colors">
                  Network Analyzer
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <a href="/tools/configuration-generator" className="text-primary/80 dark:text-secondary/80 hover:text-accent transition-colors">
                  Configuration Generator
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Reference Materials</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <a href="/reference/rfc-documents" className="text-primary/80 dark:text-secondary/80 hover:text-accent transition-colors">
                  RFC Documents
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <a href="/reference/glossary" className="text-primary/80 dark:text-secondary/80 hover:text-accent transition-colors">
                  Technical Glossary
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <a href="/reference/faq" className="text-primary/80 dark:text-secondary/80 hover:text-accent transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-primary/80 dark:text-secondary/80 mb-4">
          Need help with a specific implementation? Our team is here to assist you.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent transform hover:scale-105 transition-all duration-300"
        >
          Get Support
        </a>
      </div>
    </div>
  );
}

export default Documentation; 