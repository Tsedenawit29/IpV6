// === src/pages/IPv6Dashboard.js ===
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaChartLine, FaNetworkWired, FaShieldAlt, FaMobileAlt, FaCloud, FaArrowUp, FaArrowDown, FaInfoCircle } from 'react-icons/fa';

function IPv6Dashboard() {
  const [stats, setStats] = useState({
    globalAdoption: 35.2,
    regionalAdoption: {
      northAmerica: 45.8,
      europe: 42.3,
      asia: 38.7,
      southAmerica: 28.4,
      africa: 15.6,
      oceania: 32.9
    },
    growth: 2.4,
    security: 98.5,
    mobile: 85.2,
    cloud: 92.7
  });

  const regions = [
    { name: 'North America', value: stats.regionalAdoption.northAmerica, trend: 1.2 },
    { name: 'Europe', value: stats.regionalAdoption.europe, trend: 1.5 },
    { name: 'Asia', value: stats.regionalAdoption.asia, trend: 2.1 },
    { name: 'South America', value: stats.regionalAdoption.southAmerica, trend: 0.8 },
    { name: 'Africa', value: stats.regionalAdoption.africa, trend: 1.7 },
    { name: 'Oceania', value: stats.regionalAdoption.oceania, trend: 0.9 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-primary-dark dark:to-primary/10">
      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
              IPv6 Adoption Dashboard
            </h1>
            <p className="text-lg text-primary/80 dark:text-secondary/80">
              Real-time statistics and insights on global IPv6 deployment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-primary/5 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <FaGlobe className="w-6 h-6" />
                </div>
                <span className="text-sm text-primary/60 dark:text-secondary/60">Global</span>
              </div>
              <h3 className="text-3xl font-bold text-primary dark:text-white mb-2">
                {stats.globalAdoption}%
              </h3>
              <div className="flex items-center text-accent">
                <FaArrowUp className="w-4 h-4 mr-1" />
                <span>{stats.growth}% this year</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-primary/5 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <FaShieldAlt className="w-6 h-6" />
                </div>
                <span className="text-sm text-primary/60 dark:text-secondary/60">Security</span>
              </div>
              <h3 className="text-3xl font-bold text-primary dark:text-white mb-2">
                {stats.security}%
              </h3>
              <div className="flex items-center text-accent">
                <FaArrowUp className="w-4 h-4 mr-1" />
                <span>2.1% this month</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-primary/5 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <FaMobileAlt className="w-6 h-6" />
                </div>
                <span className="text-sm text-primary/60 dark:text-secondary/60">Mobile</span>
              </div>
              <h3 className="text-3xl font-bold text-primary dark:text-white mb-2">
                {stats.mobile}%
              </h3>
              <div className="flex items-center text-accent">
                <FaArrowUp className="w-4 h-4 mr-1" />
                <span>3.2% this month</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-primary/5 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <FaCloud className="w-6 h-6" />
                </div>
                <span className="text-sm text-primary/60 dark:text-secondary/60">Cloud</span>
              </div>
              <h3 className="text-3xl font-bold text-primary dark:text-white mb-2">
                {stats.cloud}%
              </h3>
              <div className="flex items-center text-accent">
                <FaArrowUp className="w-4 h-4 mr-1" />
                <span>1.8% this month</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="bg-white dark:bg-primary/5 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-primary dark:text-white mb-8">
              Regional Adoption
            </h2>
            <div className="space-y-6">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-primary dark:text-white font-semibold w-32">
                      {region.name}
                    </span>
                    <div className="flex-1 h-2 bg-primary/10 dark:bg-primary/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${region.value}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary dark:text-white font-semibold">
                      {region.value}%
                    </span>
                    <div className="flex items-center text-accent">
                      <FaArrowUp className="w-4 h-4" />
                      <span className="text-sm">{region.trend}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-primary/5 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
                Key Insights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaInfoCircle className="text-accent mt-1" />
                  <span className="text-primary/80 dark:text-secondary/80">
                    Mobile networks are leading IPv6 adoption with {stats.mobile}% implementation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaInfoCircle className="text-accent mt-1" />
                  <span className="text-primary/80 dark:text-secondary/80">
                    Cloud providers show strong IPv6 support at {stats.cloud}%
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaInfoCircle className="text-accent mt-1" />
                  <span className="text-primary/80 dark:text-secondary/80">
                    Security features are widely implemented with {stats.security}% adoption
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-primary/5 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
                Growth Trends
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-primary/80 dark:text-secondary/80">Global Growth</span>
                  <span className="text-accent font-semibold">+{stats.growth}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary/80 dark:text-secondary/80">Mobile Growth</span>
                  <span className="text-accent font-semibold">+3.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary/80 dark:text-secondary/80">Cloud Growth</span>
                  <span className="text-accent font-semibold">+1.8%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IPv6Dashboard;