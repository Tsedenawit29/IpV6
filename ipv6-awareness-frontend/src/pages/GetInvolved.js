// === src/pages/GetInvolved.js ===
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaLightbulb, FaCode, FaBook, FaGlobe, FaArrowRight, FaExternalLinkAlt, FaGithub, FaDiscord, FaTwitter, FaLinkedin, FaEnvelope, FaHandshakeAlt, FaRocket, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function GetInvolved() {
  const handleExternalLink = (url) => {
    window.open(url, '_blank');
  };

  const sections = [
    {
      title: "Join Our Community",
      description: "Connect with IPv6 enthusiasts and experts worldwide",
      icon: <FaUsers className="w-8 h-8" />,
      items: [
        {
          title: 'IPv6 Forum',
          description: 'Join the global IPv6 community',
          link: 'https://www.ipv6forum.com/',
          icon: <FaGlobe />
        },
        {
          title: 'Discord Server',
          description: 'Chat with community members',
          link: 'https://discord.gg/ipv6',
          icon: <FaDiscord />
        },
        {
          title: 'Twitter',
          description: 'Follow IPv6 updates',
          link: 'https://twitter.com/ipv6forum',
          icon: <FaTwitter />
        }
      ]
    },
    {
      title: "Contribute to IPv6",
      description: "Help improve IPv6 adoption through code and documentation",
      icon: <FaCode className="w-8 h-8" />,
      items: [
        {
          title: 'GitHub Repository',
          description: 'Contribute to our open-source projects',
          link: 'https://github.com/ipv6',
          icon: <FaGithub />
        },
        {
          title: 'Documentation',
          description: 'Help improve our guides and tutorials',
          link: 'https://www.ietf.org/',
          icon: <FaBook />
        },
        {
          title: 'Bug Reports',
          description: 'Report issues and suggest improvements',
          link: 'https://github.com/ipv6/issues',
          icon: <FaExternalLinkAlt />
        }
      ]
    },
    {
      title: "Learn & Share",
      description: "Expand your knowledge and share it with others",
      icon: <FaBook className="w-8 h-8" />,
      items: [
        {
          title: 'Tutorials',
          description: 'Access our learning resources',
          link: 'https://www.ietf.org/',
          icon: <FaBook />
        },
        {
          title: 'Webinars',
          description: 'Join our educational sessions',
          link: 'https://www.worldipv6launch.org/',
          icon: <FaExternalLinkAlt />
        },
        {
          title: 'Blog',
          description: 'Read and share articles',
          link: 'https://www.ipv6forum.com/',
          icon: <FaExternalLinkAlt />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-primary-dark dark:to-primary/10">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
              Get Involved with IPv6
            </h1>
            <p className="text-lg text-primary/80 dark:text-secondary/80 mb-8">
              Join our community and help shape the future of the internet
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-accent/10 rounded-xl text-accent">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-primary/80 dark:text-secondary/80">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (sectionIndex * 0.2) + (itemIndex * 0.1) }}
                    className="bg-white dark:bg-primary/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-xl text-accent">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-primary/80 dark:text-secondary/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleExternalLink(item.link)}
                        className="btn-primary w-full"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Get Started
                          <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-white dark:bg-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-primary/80 dark:text-secondary/80 mb-8">
              Reach out to our team for more information about getting involved
            </p>
            <div className="flex items-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/resources" className="btn-secondary">
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white dark:bg-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">
              Join IPv6 Working Groups
            </h2>
            <p className="text-lg text-primary/80 dark:text-secondary/80 mb-8">
              Join our working groups to contribute to IPv6 development
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.ietf.org/participate/working-groups/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Join Working Group
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.ietf.org/mailman/listinfo/ipv6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Join Mailing List
                </a>
                <a
                  href="https://www.ietf.org/mailman/listinfo/ipv6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View Archives
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white dark:bg-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">
              Attend IPv6 Meetings
            </h2>
            <p className="text-lg text-primary/80 dark:text-secondary/80 mb-8">
              Attend IPv6 meetings to learn and network
            </p>
            <div className="flex items-center gap-4">
              <Link to="/community" className="btn-primary">
                Join Community
              </Link>
              <Link to="/events" className="btn-secondary">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white dark:bg-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">
              Read IPv6 Documentation
            </h2>
            <p className="text-lg text-primary/80 dark:text-secondary/80 mb-8">
              Access IPv6 documentation to learn more about the protocol
            </p>
            <div className="flex items-center gap-4">
              <Link to="/documentation" className="btn-primary">
                Read Documentation
              </Link>
              <Link to="/tutorials" className="btn-secondary">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetInvolved;
