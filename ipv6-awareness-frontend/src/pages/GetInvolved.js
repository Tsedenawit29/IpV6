// === src/pages/GetInvolved.js ===
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaLightbulb, FaCode, FaBook, FaGlobe, FaArrowRight, FaExternalLinkAlt, FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';
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
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-[#121212] dark:to-[#1E1E1E] pt-20">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 bg-white dark:bg-[#1E1E1E] shadow-lg"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white mb-4">
            Get Involved
          </h1>
          <p className="text-lg text-[#121212]/80 dark:text-white/80 max-w-2xl mx-auto">
            Join our community and help shape the future of IPv6
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Sections Grid */}
        <div className="grid grid-cols-1 gap-8">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
              className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 shadow-lg border border-[#FFD700]/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-[#FFD700]/10 rounded-xl text-[#FFD700] border border-[#FFD700]/20">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#121212] dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-[#121212]/80 dark:text-white/80">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Minimized Feature Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col p-4 rounded-xl transition-all duration-300 border border-[#FFD700]/10" // Simplified styling
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[#FFD700]">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-[#121212] dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#121212]/80 dark:text-white/80 mb-4">
                      {item.description}
                    </p>
                    <button
                      onClick={() => handleExternalLink(item.link)}
                      className="btn btn-primary w-full flex items-center justify-center gap-2 text-sm py-2" // Smaller button
                    >
                      Visit {item.title.split(' ')[0]} {/* More concise button text */}
                      <FaArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-12 shadow-lg border border-[#FFD700]/10">
            <h2 className="text-3xl font-bold text-[#121212] dark:text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-[#121212]/80 dark:text-white/80 mb-8 max-w-2xl mx-auto">
              Join our community today and help shape the future of IPv6 adoption
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="btn btn-primary"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default GetInvolved;