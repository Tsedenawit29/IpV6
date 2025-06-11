import React from 'react';

function HelpCenter() {
  const supportCategories = [
    {
      title: "Getting Started",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: [
        {
          title: "Quick Start Guide",
          description: "Learn the basics of IPv6 implementation",
          link: "/docs/quick-start"
        },
        {
          title: "Common Issues",
          description: "Solutions to frequently encountered problems",
          link: "/docs/common-issues"
        },
        {
          title: "Best Practices",
          description: "Recommended approaches for IPv6 deployment",
          link: "/docs/best-practices"
        }
      ]
    },
    {
      title: "Technical Support",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      items: [
        {
          title: "Network Configuration",
          description: "Detailed guides for network setup",
          link: "/docs/network-config"
        },
        {
          title: "Security Setup",
          description: "Security configuration and best practices",
          link: "/docs/security"
        },
        {
          title: "Troubleshooting",
          description: "Advanced troubleshooting guides",
          link: "/docs/troubleshooting"
        }
      ]
    },
    {
      title: "Community Support",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        {
          title: "Forums",
          description: "Join our community discussions",
          link: "/community/forums"
        },
        {
          title: "Knowledge Base",
          description: "Community-contributed articles",
          link: "/community/knowledge-base"
        },
        {
          title: "Events",
          description: "Upcoming webinars and workshops",
          link: "/events"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
        Help Center
      </h1>

      <div className="mb-12">
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed">
          Find the support you need for your IPv6 implementation. From basic guides to advanced 
          technical support, we're here to help you succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {supportCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-primary-dark/50 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-accent">
                {category.icon}
              </div>
              <h2 className="text-2xl font-semibold text-accent">{category.title}</h2>
            </div>
            <div className="space-y-4">
              {category.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="block p-4 rounded-lg border border-primary/10 dark:border-secondary/10 hover:border-accent/50 dark:hover:border-accent/50 transform hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-accent mb-2">{item.title}</h3>
                  <p className="text-primary/80 dark:text-secondary/80">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Need Direct Support?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">Contact Options</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Email Support</p>
                  <p className="text-primary/80 dark:text-secondary/80">support@ipv6awareness.org</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Live Chat</p>
                  <p className="text-primary/80 dark:text-secondary/80">Available 24/7 for urgent issues</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Phone Support</p>
                  <p className="text-primary/80 dark:text-secondary/80">+1 (555) 123-4567</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">Response Times</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Urgent Issues</p>
                  <p className="text-primary/80 dark:text-secondary/80">Response within 2 hours</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Standard Support</p>
                  <p className="text-primary/80 dark:text-secondary/80">Response within 24 hours</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Feature Requests</p>
                  <p className="text-primary/80 dark:text-secondary/80">Reviewed weekly</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-primary/80 dark:text-secondary/80 mb-4">
          Can't find what you're looking for? Our support team is ready to help.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent transform hover:scale-105 transition-all duration-300"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}

export default HelpCenter; 