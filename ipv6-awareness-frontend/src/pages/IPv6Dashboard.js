import React, { useState } from 'react';
import { GlobeAltIcon, ChartBarIcon, SignalIcon } from '@heroicons/react/24/outline';
import network_pattern from "../assets/images/network-pattern.jpg";
function IPv6Dashboard() {
  const [activeTab, setActiveTab] = useState('Google');

  const iframeSources = {
    Google: 'https://www.google.com/intl/en/ipv6/statistics.html#tab=ipv6-adoption',
    Cisco: 'https://6lab.cisco.com/index.php',
  };

  const stats = [
    {
      title: 'Global IPv6 Adoption',
      value: '45%+',
      icon: GlobeAltIcon,
      description: 'As of 2024, over 45% of global internet users connect over IPv6.',
    },
    {
      title: 'IPv6 Traffic',
      value: 'Rapid Growth',
      icon: ChartBarIcon,
      description: 'IPv6 traffic now dominates in several regions, especially mobile.',
    },
    {
      title: 'Enterprise Readiness',
      value: 'Increasing',
      icon: SignalIcon,
      description: 'Major ISPs and enterprises are enabling IPv6 in core infrastructure.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg-primary text-black dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section
        className="relative w-full flex items-center justify-center px-4 overflow-hidden bg-black dark:bg-black"
        style={{ minHeight: '50vh', paddingTop: '6rem', paddingBottom: '2rem' }}
      >
        {/* Background image */}
        <img
          src={network_pattern}
          alt="Network Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 pointer-events-none z-0"
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Explore the <span className="text-[#00C389]">IPv6 Dashboard</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-300 px-4">
            Dive into real-time statistics and adoption trends of IPv6 with curated insights from trusted sources like Google and Cisco.
          </p>
        </div>

        <style jsx>{`
          :root {
            --network-line-color: #00C389;
            --network-node-color: #00C389;
          }
          @media (prefers-color-scheme: light) {
            :root {
              --network-line-color: #00C389;
              --network-node-color: #00C389;
            }
            section {
              background-color: #f0fdfa;
            }
            h1 {
              color: #111;
            }
            p {
              color: #333;
            }
            svg {
              opacity: 0.2;
            }
          }
        `}</style>
      </section>

      {/* Static Highlights */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white dark:bg-dark-bg-secondary p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#00C389]" />
              <h3 className="text-lg sm:text-xl font-semibold">{stat.title}</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-[#00C389]">{stat.value}</p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
          </div>
        ))}
      </section>

      {/* Tabs */}
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-6">
          {Object.keys(iframeSources).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-5 py-2 rounded-full font-medium transition border text-sm sm:text-base ${
                activeTab === tab
                  ? 'bg-[#00C389] text-white border-[#00C389]'
                  : 'bg-gray-100 text-black hover:bg-[#00C389] hover:text-white border-gray-300 dark:bg-gray-700 dark:text-white'
              }`}
            >
              {tab} IPv6 Stats
            </button>
          ))}
        </div>

        <div className="bg-gray-100 dark:bg-dark-bg-tertiary p-2 sm:p-4 rounded-xl shadow-lg">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={iframeSources[activeTab]}
              title={`${activeTab} IPv6 Stats`}
              className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] border-0 rounded-lg dark:invert"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to enable the future?</h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 px-4">
            IPv6 is not just the future of the internet — it's the present. Explore resources, best practices, and global statistics to better understand your network's IPv6 readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.internetsociety.org/deploy360/ipv6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00C389] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#00C389]/90 transition text-sm sm:text-base"
            >
              Learn More About IPv6
            </a>
            <a
              href="https://test-ipv6.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00C389] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#00C389]/90 transition text-sm sm:text-base"
            >
              Test Your IPv6
            </a>
          </div>
        </div>
      </section>

      {/* Add this style block somewhere global or inside index.css */}
      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}

export default IPv6Dashboard;
