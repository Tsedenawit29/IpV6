import React from 'react';

function Tutorials() {
  const tutorialCategories = [
    {
      title: "Beginner Tutorials",
      level: "Beginner",
      items: [
        {
          title: "Understanding IPv6 Basics",
          duration: "30 minutes",
          description: "Learn the fundamental concepts of IPv6 and its importance",
          link: "/tutorials/ipv6-basics"
        },
        {
          title: "IPv6 Address Types",
          duration: "45 minutes",
          description: "Explore different types of IPv6 addresses and their uses",
          link: "/tutorials/address-types"
        },
        {
          title: "Basic Network Configuration",
          duration: "1 hour",
          description: "Step-by-step guide to basic IPv6 network setup",
          link: "/tutorials/basic-config"
        }
      ]
    },
    {
      title: "Intermediate Tutorials",
      level: "Intermediate",
      items: [
        {
          title: "Advanced Routing",
          duration: "2 hours",
          description: "Learn about IPv6 routing protocols and configurations",
          link: "/tutorials/advanced-routing"
        },
        {
          title: "Security Implementation",
          duration: "1.5 hours",
          description: "Implementing security measures for IPv6 networks",
          link: "/tutorials/security"
        },
        {
          title: "Performance Tuning",
          duration: "1 hour",
          description: "Optimizing IPv6 network performance",
          link: "/tutorials/performance"
        }
      ]
    },
    {
      title: "Advanced Tutorials",
      level: "Advanced",
      items: [
        {
          title: "Enterprise Deployment",
          duration: "3 hours",
          description: "Planning and implementing IPv6 in enterprise networks",
          link: "/tutorials/enterprise"
        },
        {
          title: "Cloud Integration",
          duration: "2 hours",
          description: "Integrating IPv6 with cloud services and platforms",
          link: "/tutorials/cloud"
        },
        {
          title: "Troubleshooting",
          duration: "2.5 hours",
          description: "Advanced troubleshooting techniques for IPv6 networks",
          link: "/tutorials/troubleshooting"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light dark:from-dark-text-accent dark:to-dark-text-accent/80 bg-clip-text text-transparent">
        Tutorials
      </h1>

      <div className="mb-12">
        <p className="text-lg text-primary/80 dark:text-dark-text-secondary leading-relaxed">
          Comprehensive tutorials to help you master IPv6 implementation, from basic concepts 
          to advanced deployment strategies. Choose your level and start learning today.
        </p>
      </div>

      <div className="space-y-12">
        {tutorialCategories.map((category, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-accent dark:text-dark-text-accent">{category.title}</h2>
              <span className="px-4 py-1 bg-accent/10 dark:bg-dark-text-accent/10 text-accent dark:text-dark-text-accent rounded-full text-sm font-medium">
                {category.level}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((tutorial, idx) => (
                <a
                  key={idx}
                  href={tutorial.link}
                  className="block bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium text-accent dark:text-dark-text-accent">{tutorial.title}</h3>
                    <span className="text-sm text-primary/60 dark:text-dark-text-secondary/60">
                      {tutorial.duration}
                    </span>
                  </div>
                  <p className="text-primary/80 dark:text-dark-text-secondary">{tutorial.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-accent dark:text-dark-text-accent">Learning Path</h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-accent/20 dark:bg-dark-text-accent/20 flex items-center justify-center">
              <span className="text-accent dark:text-dark-text-accent font-semibold">1</span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-accent dark:text-dark-text-accent">Start with Basics</h3>
              <p className="text-primary/80 dark:text-dark-text-secondary">
                Begin with our beginner tutorials to build a strong foundation
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-accent/20 dark:bg-dark-text-accent/20 flex items-center justify-center">
              <span className="text-accent dark:text-dark-text-accent font-semibold">2</span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-accent dark:text-dark-text-accent">Practice Implementation</h3>
              <p className="text-primary/80 dark:text-dark-text-secondary">
                Move to intermediate tutorials to apply your knowledge
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-accent/20 dark:bg-dark-text-accent/20 flex items-center justify-center">
              <span className="text-accent dark:text-dark-text-accent font-semibold">3</span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-accent dark:text-dark-text-accent">Master Advanced Topics</h3>
              <p className="text-primary/80 dark:text-dark-text-secondary">
                Take on advanced tutorials to become an IPv6 expert
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-primary/80 dark:text-dark-text-secondary mb-4">
          Need personalized guidance? Our experts are here to help you learn.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-light dark:from-dark-text-accent dark:to-dark-text-accent/80 text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent dark:hover:from-dark-text-accent/80 dark:hover:to-dark-text-accent transform hover:scale-105 transition-all duration-300"
        >
          Get Help
        </a>
      </div>
    </div>
  );
}

export default Tutorials; 