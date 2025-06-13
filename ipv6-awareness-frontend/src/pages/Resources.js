// === src/pages/Resources.js ===
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { DocumentIcon, ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { TagIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBook, FaVideo, FaTools, FaUsers, FaFileAlt, FaGlobe } from 'react-icons/fa';

function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Define resource categories
  const categories = [
    'all',
    'documentation',
    'tutorials',
    'tools'
  ];

  useEffect(() => {
    fetchResources();
  }, []);

  async function fetchResources() {
    try {
      const { data, error } = await supabase
        .from('ipv6_resources')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;

      setResources(data || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
      setError('Failed to load resources. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  // Filter resources based on selected category
  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="flex space-x-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-100 p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-2">Error Loading Resources</h3>
            <p className="mb-4">{error}</p>
            <button
              onClick={fetchResources}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg-primary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-white via-primary/10 to-primary/5 dark:from-dark-bg-primary dark:via-primary/20 dark:to-primary/10">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="container mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              IPv6 <span className="text-primary">Resources</span>
            </h1>
            <p className="text-lg text-black/80 dark:text-white/80 mb-8">
              Comprehensive resources to help you understand, implement, and optimize IPv6 in your network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-4 bg-white dark:bg-dark-bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white dark:bg-dark-bg-tertiary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-primary mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-black/80 dark:text-white/80 mb-6">
                    {resource.description}
                  </p>
                  <Link 
                    to={resource.link}
                    className="group inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    Learn More
                    <FaArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              Need More Resources?
            </h2>
            <p className="text-black/80 dark:text-white/80 mb-12 text-lg">
              Explore our comprehensive documentation and guides to help you with your IPv6 implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/documentation" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  View Documentation
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform border-2 border-primary hover:bg-primary hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Contact Support
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Resources;