// === src/pages/Resources.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaFileAlt, FaVideo, FaTools, FaSearch, FaFilter, FaArrowRight, FaExternalLinkAlt, FaDownload, FaBookmark, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'documentation', name: 'Documentation' },
    { id: 'tools', name: 'Tools' },
    { id: 'videos', name: 'Videos' }
  ];

  const resources = [
    {
      id: 1,
      title: 'IPv6 Specification (RFC 8200)',
      description: 'The official IPv6 protocol specification',
      category: 'documentation',
      link: 'https://www.ietf.org/rfc/rfc8200.txt',
      icon: <FaFileAlt className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'IPv6 Addressing Architecture (RFC 4291)',
      description: 'IPv6 addressing architecture and format',
      category: 'documentation',
      link: 'https://www.ietf.org/rfc/rfc4291.txt',
      icon: <FaBook className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'IPv6 Neighbor Discovery (RFC 4861)',
      description: 'IPv6 neighbor discovery protocol',
      category: 'documentation',
      link: 'https://www.ietf.org/rfc/rfc4861.txt',
      icon: <FaFileAlt className="w-8 h-8" />
    },
    {
      id: 4,
      title: 'IPv6 Stateless Address Autoconfiguration (RFC 4862)',
      description: 'IPv6 stateless address autoconfiguration',
      category: 'documentation',
      link: 'https://www.ietf.org/rfc/rfc4862.txt',
      icon: <FaFileAlt className="w-8 h-8" />
    },
    {
      id: 5,
      title: 'IPv6 Local Network Protection (RFC 4864)',
      description: 'Local network protection for IPv6',
      category: 'documentation',
      link: 'https://www.ietf.org/rfc/rfc4864.txt',
      icon: <FaFileAlt className="w-8 h-8" />
    },
    {
      id: 6,
      title: 'IPv6 Prefix Options for DHCPv6 (RFC 4866)',
      description: 'Prefix options for DHCPv6',
      category: 'documentation',
      link: 'https://www.ietf.org/rfc/rfc4866.txt',
      icon: <FaFileAlt className="w-8 h-8" />
    },
    {
      id: 7,
      title: 'IPv6 Stateless Address Autoconfiguration (RFC 4868)',
      description: 'Stateless address autoconfiguration for IPv6',
      category: 'documentation',
      link: 'https://www.ietf.org/rfc/rfc4868.txt',
      icon: <FaFileAlt className="w-8 h-8" />
    },
    {
      id: 8,
      title: 'IPv6 Test Tools',
      description: 'Collection of IPv6 testing and validation tools',
      category: 'tools',
      link: 'https://www.ietf.org/tools/',
      icon: <FaTools className="w-8 h-8" />
    },
    {
      id: 9,
      title: 'IPv6 Implementation Guide',
      description: 'Step-by-step guide for IPv6 implementation',
      category: 'documentation',
      link: 'https://www.ietf.org/implement/',
      icon: <FaBook className="w-8 h-8" />
    },
    {
      id: 10,
      title: 'IPv6 Video Tutorials',
      description: 'Video tutorials for IPv6 implementation',
      category: 'videos',
      link: 'https://www.youtube.com/playlist?list=PLF360ED1082F6F2A5',
      icon: <FaVideo className="w-8 h-8" />
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004D00]/10 to-[#FFD700]/10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#004D00] dark:text-white mb-6">
              IPv6 Resources
            </h1>
            <p className="text-lg text-[#004D00]/80 dark:text-[#009900]/80 mb-8">
              Comprehensive collection of IPv6 documentation, tools, and learning materials
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
              <Link to="/get-involved" className="btn btn-outline">
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#004D00]/20 dark:border-[#009900]/20 bg-white dark:bg-[#004D00]/5 text-[#004D00] dark:text-white placeholder-[#004D00]/50 dark:placeholder-[#009900]/50 focus:outline-none focus:border-[#FFD700] dark:focus:border-[#FFD700] transition-colors"
                  />
                  <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#004D00]/50 dark:text-[#009900]/50" />
                </div>
              </div>
              <div className="flex gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl font-semibold transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#004D00] text-white dark:bg-[#009900]'
                        : 'bg-white dark:bg-[#004D00]/5 text-[#004D00] dark:text-white hover:bg-[#004D00]/10 dark:hover:bg-[#009900]/10'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#004D00]/5 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[#FFD700] mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-[#004D00] dark:text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-[#004D00]/80 dark:text-[#009900]/80 mb-6">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Resource
                  </a>
                  <button className="btn btn-ghost">
                    <FaBookmark className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#004D00] dark:text-white mb-6">
            Need More Resources?
          </h2>
          <p className="text-lg text-[#004D00]/80 dark:text-[#009900]/80 mb-8 max-w-2xl mx-auto">
            Join our community to access exclusive resources and connect with IPv6 experts
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved" className="btn btn-accent">
              Join Community
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;