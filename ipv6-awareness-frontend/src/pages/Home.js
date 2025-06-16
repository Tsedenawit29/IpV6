import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  FaGlobe, FaShieldAlt, FaBolt, FaRobot, FaArrowRight, FaChartLine, FaNetworkWired,
  FaMobileAlt, FaCloud, FaServer, FaLock, FaCheckCircle, FaExclamationTriangle,
  FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import logo from '../assets/images/logo.jpg';
import './carousel.css'; // For carousel styles, create this file or remove if not needed

function Home() {
  const [latestUpdates, setLatestUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestUpdates();
  }, []);

  async function fetchLatestUpdates() {
    try {
      const { data, error } = await supabase
        .from('ipv6_blog_posts')
        .select('*')
        .order('published_on', { ascending: false })
        .limit(5);

      if (error) throw error;
      setLatestUpdates(data || []);
    } catch (error) {
      console.error('Error fetching updates:', error);
    } finally {
      setLoading(false);
    }
  }

  // Define CustomArrow component before using it in sliderSettings
  const CustomArrow = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-md transition-all
        ${direction === 'left' ? 'left-2' : 'right-2'}
        bg-white text-black dark:bg-gray-800 dark:text-white hover:bg-[#00C389]/20`}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      {direction === 'left' ? <FaChevronLeft className="h-6 w-6" /> : <FaChevronRight className="h-6 w-6" />}
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  const benefits = [
    {
      icon: <FaServer className="w-10 h-10" />,
      title: 'Larger Address Space',
      description: 'IPv6 offers 128-bit addresses, totaling about 340 undecillion (3.4×10^38) unique IPs.',
      stat: '340 undecillion addresses',
    },
    {
      icon: <FaLock className="w-10 h-10" />,
      title: 'Enhanced Security',
      description: 'IPv6 was designed with IPsec in mind, providing end-to-end encryption and integrity by default.',
      stat: 'Built-in IPsec',
    },
    {
      icon: <FaBolt className="w-10 h-10" />,
      title: 'Efficient Performance',
      description: 'Faster packet processing and no need for NAT improves performance and reduces latency.',
      stat: 'Reduced latency by 20%',
    },
  ];

  const features = [
    {
      icon: <FaCheckCircle className="w-10 h-10" />,
      title: 'Auto-Configuration',
      description: 'Supports stateless address autoconfiguration for plug-and-play simplicity.',
    },
    {
      icon: <FaExclamationTriangle className="w-10 h-10" />,
      title: 'Scalability',
      description: 'Designed for exponential growth in devices and networks.',
    },
    {
      icon: <FaNetworkWired className="w-10 h-10" />,
      title: 'Streamlined Routing',
      description: 'Hierarchical addressing reduces routing table size.',
    },
    {
      icon: <FaMobileAlt className="w-10 h-10" />,
      title: 'Mobile Ready',
      description: 'Enhanced support for mobile networks and efficient handoffs.',
    },
    {
      icon: <FaCloud className="w-10 h-10" />,
      title: 'Cloud Optimized',
      description: 'Seamless integration with cloud-native and hybrid architectures.',
    },
    {
      icon: <FaShieldAlt className="w-10 h-10" />,
      title: 'Privacy Focused',
      description: 'Privacy extensions prevent tracking of devices across networks.',
    },
  ];

  const globalStats = [
    { value: '45%+', label: 'Global IPv6 Adoption', icon: <FaChartLine className="text-4xl" /> },
    { value: '100+', label: 'Countries Deployed', icon: <FaGlobe className="text-4xl" /> },
    { value: '1B+', label: 'IPv6-Capable Devices', icon: <FaMobileAlt className="text-4xl" /> },
    { value: '24/7', label: 'Support Available', icon: <FaServer className="text-4xl" /> },
  ];

  // Animation variants for framer-motion
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <motion.img
          src={logo}
          alt="IPv6 Logo Background"
          className="absolute inset-0 w-full h-full object-contain opacity-40 mx-auto my-auto pointer-events-none select-none"
          initial={{ scale: 0.95, rotate: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'mirror', 
            ease: 'easeInOut' 
          }}
          style={{ filter: 'brightness(0.8) contrast(1.2)' }}
        />
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
            <motion.div
            key={i}
            className="absolute rounded-full bg-[#00C389] opacity-30"
            style={{
              width: 15 + Math.random() * 20,
              height: 15 + Math.random() * 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(4px)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Hero content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 max-w-4xl mx-auto">
                <motion.h1 
            className="text-6xl font-extrabold text-white drop-shadow-lg mt-48"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Think Fast. <span className="text-[#00C389]">Think IPv6.</span>
                </motion.h1>
                <motion.p 
            className="mt-6 text-xl max-w-xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join the global movement to future-proof the internet
                </motion.p>
            <motion.div 
              className="mt-10 flex gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://test-ipv6.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Test Your IPv6
              </a>
              <Link
                to="/AboutIPv6"
                className="btn btn-outline"
              >
                Learn More
              </Link>
            </motion.div>

          {/* Global Stats - Moved further down with enhanced styling */}
          <motion.div
            className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-black/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-[#00C389] mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why IPv6 Matters Section - New Design */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why <span className="text-[#00C389]">IPv6 Matters</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              IPv6 is not just an upgrade—it's a necessity for the future of the internet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Address Space Crisis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-xl bg-[#00C389]/10 flex items-center justify-center mb-6">
                <FaServer className="w-8 h-8 text-[#00C389]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Address Space Crisis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                IPv4 addresses are nearly exhausted. IPv6 provides 340 undecillion addresses—enough for every device on Earth and beyond.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C389]"></span>
                  <span>340 trillion trillion trillion addresses</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C389]"></span>
                  <span>No more NAT required</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C389]"></span>
                  <span>True end-to-end connectivity</span>
                </li>
              </ul>
            </motion.div>

            {/* Security & Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-xl bg-[#00C389]/10 flex items-center justify-center mb-6">
                <FaLock className="w-8 h-8 text-[#00C389]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Security & Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Built-in security features and improved performance make IPv6 the protocol of choice for modern networks.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C389]"></span>
                  <span>Mandatory IPsec support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C389]"></span>
                  <span>Reduced latency by 20%</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C389]"></span>
                  <span>Better routing efficiency</span>
                </li>
              </ul>
            </motion.div>

            {/* Future-Ready */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-xl bg-[#00C389]/10 flex items-center justify-center mb-6">
                <FaRobot className="w-8 h-8 text-[#00C389]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Future-Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                IPv6 is designed for the future of the internet, supporting IoT, 5G, and emerging technologies.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C389]"></span>
                  <span>IoT device support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C389]"></span>
                  <span>5G network ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C389]"></span>
                  <span>Cloud-native architecture</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Updates Carousel */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Latest <span className="text-[#00C389]">Updates</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Stay informed about the latest developments in IPv6 adoption and technology
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00C389] mx-auto"></div>
            </div>
          ) : (
            <Slider {...sliderSettings}>
              {latestUpdates.map((update) => (
                <div key={update.id} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
                  >
                    {update.image_url && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={update.image_url}
                          alt={update.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {update.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {update.summary}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(update.published_on).toLocaleDateString()}
                        </span>
                        <Link
                          to={`/blog/${update.id}`}
                          className="text-[#00C389] hover:text-[#00C389]/80 font-medium flex items-center gap-2"
                        >
                          Read More <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#181C2A] via-[#23263A] to-[#10121A] dark:from-[#181C2A] dark:via-[#23263A] dark:to-[#10121A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#00C389]/20 rounded-full blur-2xl opacity-40 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#00C389]/10 rounded-full blur-xl opacity-30 animate-pulse" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-2 text-white">
              Key <span className="text-[#00C389]">Features</span>
            </h2>
            <p className="text-base max-w-2xl mx-auto text-gray-300">
              Discover the powerful capabilities that make IPv6 the future of internet connectivity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group rounded-2xl p-6 bg-white/10 dark:bg-white/10 backdrop-blur-md shadow-lg border border-white/10 hover:border-[#00C389] hover:shadow-[#00C389]/20 transition-all duration-300 overflow-hidden flex flex-col items-center text-center min-h-[200px]"
                >
                {/* Smaller crisp icon */}
                <div className="mb-4">
                  <span className="text-[#00C389] text-3xl">{feature.icon}</span>
                  </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1E26] text-white dark:bg-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Ready to explore IPv6 adoption?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Access our interactive dashboard to see global IPv6 deployment metrics and trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/IPv6Dashboard" 
                className="btn btn-secondary"
              >
                View IPv6 Dashboard <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/get-involved"
                className="btn btn-ghost"
              >
                Get Involved <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
