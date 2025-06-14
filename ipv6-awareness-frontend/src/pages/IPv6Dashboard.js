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
      value: '40%+',
      icon: GlobeAltIcon,
      description: 'As of 2024, over 40% of global internet users connect over IPv6.',
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
  style={{ minHeight: '60vh', paddingTop: '4rem', paddingBottom: '2rem' }}
>
  {/* Background image */}
  <img
    src={network_pattern}// Replace with your actual image path or URL
    alt="Network Background"
    className="absolute inset-0 w-full h-full object-cover object-center opacity-60 pointer-events-none z-0"
  />

 

  {/* Hero content */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">
    <h1 className="text-5xl font-extrabold mb-4 text-white">
      Explore the <span className="text-[#00C389]">IPv6 Dashboard</span>
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
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
        --network-line-color: #007a53;
        --network-node-color: #007a53;
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
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white dark:bg-dark-bg-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4 mb-4">
              <stat.icon className="h-8 w-8 text-[#00C389]" />
              <h3 className="text-xl font-semibold">{stat.title}</h3>
            </div>
            <p className="text-2xl font-bold text-[#00C389]">{stat.value}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
          </div>
        ))}
      </section>

      {/* Tabs */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-center gap-4 mb-6">
          {Object.keys(iframeSources).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-medium transition border ${
                activeTab === tab
                  ? 'bg-[#00C389] text-white border-[#00C389]'
                  : 'bg-gray-100 text-black hover:bg-[#00C389] hover:text-white border-gray-300 dark:bg-gray-700 dark:text-white'
              }`}
            >
              {tab} IPv6 Stats
            </button>
          ))}
        </div>

        <div className="bg-gray-100 dark:bg-dark-bg-tertiary p-4 rounded-xl shadow-lg">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={iframeSources[activeTab]}
              title={`${activeTab} IPv6 Stats`}
              className="w-full h-[80vh] border-0 rounded-lg dark:invert"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to enable the future?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            IPv6 is not just the future of the internet — it's the present. Explore resources, best practices, and global statistics to better understand your network's IPv6 readiness.
          </p>
          <a
            href="https://www.internetsociety.org/deploy360/ipv6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00C389] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#00a571] transition"
          >
            Learn More About IPv6
          </a>{' '}
          <a
            href="https://test-ipv6.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-4 bg-[#11998e] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0e7a6c] transition"
          >
            Test Your IPv6
          </a>
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
