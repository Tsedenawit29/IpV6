// === src/pages/GetInvolved.js ===
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaNetworkWired, FaCode, FaHandshake, FaGraduationCap, FaRocket, FaChartLine, FaTools } from 'react-icons/fa';

function GetInvolved() {
  const userPaths = [
    {
      title: 'Network Engineers',
      description: 'Learn about IPv6 implementation, testing, and best practices for your network.',
      icon: <FaNetworkWired className="text-4xl text-[#00C389]" />,
      actions: [
        {
          text: 'Test Your IPv6',
          link: 'https://test-ipv6.com/',
          external: true
        },
        {
          text: 'View Resources',
          link: '/resources',
          external: false
        }
      ]
    },
    {
      title: 'Developers',
      description: 'Find tools, libraries, and documentation to implement IPv6 in your applications.',
      icon: <FaCode className="text-4xl text-[#00C389]" />,
      actions: [
        {
          text: 'Development Guide',
          link: '/resources',
          external: false
        },
        {
          text: 'Code Examples',
          link: '/resources',
          external: false
        }
      ]
    },
    {
      title: 'Organizations',
      description: 'Get support for IPv6 adoption, training, and implementation in your organization.',
      icon: <FaHandshake className="text-4xl text-[#00C389]" />,
      actions: [
        {
          text: 'Contact Us',
          link: '/contact',
          external: false
        },
        {
          text: 'Learn More',
          link: '/about-ipv6',
          external: false
        }
      ]
    },
    {
      title: 'Everyone',
      description: 'Learn about IPv6, its importance, and how it affects the future of the internet.',
      icon: <FaGraduationCap className="text-4xl text-[#00C389]" />,
      actions: [
        {
          text: 'About IPv6',
          link: '/about-ipv6',
          external: false
        },
        {
          text: 'FAQ',
          link: '/faq',
          external: false
        }
      ]
    }
  ];

  const quickStats = [
    {
      title: 'IPv6 Ready',
      value: '30%',
      icon: <FaRocket className="text-2xl text-[#00C389]" />,
      description: 'of websites support IPv6'
    },
    {
      title: 'Growth Rate',
      value: '15%',
      icon: <FaChartLine className="text-2xl text-[#00C389]" />,
      description: 'yearly IPv6 adoption'
    },
    {
      title: 'Tools Available',
      value: '100+',
      icon: <FaTools className="text-2xl text-[#00C389]" />,
      description: 'for IPv6 implementation'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg-primary">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Get Involved with IPv6
          </h1>
          <p className="text-lg text-black/80 dark:text-white/80 max-w-3xl mx-auto">
            Join the global IPv6 community and help shape the future of internet connectivity.
            Choose your path below to get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {userPaths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-bg-secondary rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{path.icon}</div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                {path.title}
              </h3>
              <p className="text-black/70 dark:text-white/70 mb-6">
                {path.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {path.actions.map((action) => (
                  action.external ? (
                    <a
                      key={action.text}
                      href={action.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex-1 text-center"
                    >
                      {action.text}
                      <FaArrowRight className="ml-2" />
                    </a>
                  ) : (
                    <Link
                      key={action.text}
                      to={action.link}
                      className="btn btn-primary flex-1 text-center"
                    >
                      {action.text}
                      <FaArrowRight className="ml-2" />
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-bg-secondary rounded-xl shadow-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-[#00C389] mb-2">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-black dark:text-white mb-2">
                {stat.title}
              </p>
              <p className="text-black/70 dark:text-white/70">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;