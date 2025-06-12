// === src/pages/Resources.js ===
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaVideo, FaFileAlt, FaTools, FaSearch, FaBookmark, FaShare, FaArrowRight, FaDownload, FaExternalLinkAlt, FaStar, FaClock, FaFilter, FaSort } from 'react-icons/fa';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResources, setFilteredResources] = useState([]);
  const [sortBy, setSortBy] = useState('recent');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    { id: 'all', label: 'All Resources', icon: <FaBook /> },
    { id: 'documentation', label: 'Documentation', icon: <FaFileAlt /> },
    { id: 'tutorials', label: 'Tutorials', icon: <FaVideo /> },
    { id: 'tools', label: 'Tools', icon: <FaTools /> }
  ];

  const resources = [
    {
      id: 1,
      title: 'IPv6 Implementation Guide',
      description: 'Comprehensive guide for implementing IPv6 in your network infrastructure. Covers planning, deployment, and troubleshooting.',
      category: 'documentation',
      type: 'PDF',
      url: 'https://example.com/ipv6-guide',
      tags: ['implementation', 'guide', 'network'],
      date: '2024-03-15',
      rating: 4.8,
      downloads: 1250,
      author: 'Network Engineering Team'
    },
    {
      id: 2,
      title: 'IPv6 Security Best Practices',
      description: 'Learn about security considerations and best practices for IPv6 networks. Includes firewall configuration and threat mitigation.',
      category: 'documentation',
      type: 'Article',
      url: 'https://example.com/ipv6-security',
      tags: ['security', 'best-practices', 'firewall'],
      date: '2024-03-10',
      rating: 4.9,
      downloads: 980,
      author: 'Security Experts'
    },
    {
      id: 3,
      title: 'IPv6 Configuration Tutorial',
      description: 'Step-by-step tutorial for configuring IPv6 on various operating systems. Includes practical examples and common pitfalls.',
      category: 'tutorials',
      type: 'Video',
      url: 'https://example.com/ipv6-config',
      tags: ['tutorial', 'configuration', 'os'],
      date: '2024-03-05',
      rating: 4.7,
      downloads: 2100,
      author: 'Tech Academy'
    },
    {
      id: 4,
      title: 'IPv6 Testing Tools Suite',
      description: 'Collection of tools for testing and validating IPv6 implementations. Includes network analyzers and diagnostic utilities.',
      category: 'tools',
      type: 'Tool',
      url: 'https://example.com/ipv6-tools',
      tags: ['testing', 'tools', 'diagnostics'],
      date: '2024-03-01',
      rating: 4.6,
      downloads: 1500,
      author: 'Network Tools Lab'
    },
    {
      id: 5,
      title: 'IPv6 Migration Strategies',
      description: 'Detailed guide on migrating from IPv4 to IPv6. Includes planning, execution, and validation steps.',
      category: 'documentation',
      type: 'PDF',
      url: 'https://example.com/ipv6-migration',
      tags: ['migration', 'planning', 'validation'],
      date: '2024-02-28',
      rating: 4.9,
      downloads: 1800,
      author: 'Migration Experts'
    },
    {
      id: 6,
      title: 'IPv6 Network Design Patterns',
      description: 'Best practices and patterns for designing IPv6 networks. Includes scalability and performance considerations.',
      category: 'documentation',
      type: 'Article',
      url: 'https://example.com/ipv6-design',
      tags: ['design', 'patterns', 'scalability'],
      date: '2024-02-25',
      rating: 4.7,
      downloads: 950,
      author: 'Network Architects'
    }
  ];

  useEffect(() => {
    filterResources();
  }, [activeCategory, searchQuery, sortBy]);

  const filterResources = () => {
    let filtered = resources;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(resource => resource.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query)) ||
        resource.author.toLowerCase().includes(query)
      );
    }
    
    // Sort resources
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.date) - new Date(a.date);
        case 'popular':
          return b.downloads - a.downloads;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    
    setFilteredResources(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      {/* Search and Filter Section */}
      <section className="py-12 bg-white dark:bg-dark-bg-tertiary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#004D00_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-primary dark:text-dark-text-primary mb-4">
                IPv6 Resources
              </h1>
              <p className="text-lg text-primary/70 dark:text-dark-text-secondary max-w-2xl mx-auto">
                Discover comprehensive guides, tools, and learning materials to help you master IPv6 implementation
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <div className={`relative max-w-2xl mx-auto transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <input
                  type="text"
                  placeholder="Search resources by title, description, tags, or author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-6 py-4 pl-12 rounded-xl bg-white dark:bg-dark-bg-secondary border-2 border-primary/10 dark:border-dark-border focus:border-accent dark:focus:border-dark-text-accent outline-none transition-all duration-300 shadow-lg hover:shadow-xl"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/50 dark:text-dark-text-secondary/50" />
              </div>
            </motion.div>

            {/* Category Filters and Sort */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-between items-center gap-6 mb-12"
            >
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-accent text-white dark:bg-dark-text-accent dark:text-dark-bg-primary'
                        : 'bg-white dark:bg-dark-bg-secondary text-primary dark:text-dark-text-secondary hover:bg-accent/10 dark:hover:bg-dark-text-accent/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.label}</span>
                  </motion.button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-dark-bg-secondary text-primary dark:text-dark-text-secondary border border-primary/10 dark:border-dark-border focus:outline-none focus:border-accent dark:focus:border-dark-text-accent"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </motion.div>

            {/* Resources Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-accent dark:text-dark-text-accent">{resource.title}</h3>
                      <span className="text-sm text-primary/60 dark:text-dark-text-secondary/60">{resource.type}</span>
                    </div>
                    <p className="text-primary/80 dark:text-dark-text-secondary mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-accent/10 dark:bg-dark-text-accent/10 text-accent dark:text-dark-text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-primary/60 dark:text-dark-text-secondary/60">
                      <span>{resource.author}</span>
                      <span>{resource.date}</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <FaStar className="text-yellow-400" />
                        <span className="text-primary dark:text-dark-text-secondary">{resource.rating}</span>
                        <FaDownload className="ml-4" />
                        <span className="text-primary dark:text-dark-text-secondary">{resource.downloads}</span>
                      </div>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent dark:text-dark-text-accent hover:text-accent-light dark:hover:text-dark-text-accent/80 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary dark:bg-primary-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#FFFFFF_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Master IPv6?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join our growing community of network professionals and get exclusive access to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-lg font-semibold mb-2">Premium Resources</h3>
                <p className="text-white/70">Access in-depth guides, case studies, and expert insights</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-lg font-semibold mb-2">Expert Network</h3>
                <p className="text-white/70">Connect with IPv6 specialists and share experiences</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Latest Updates</h3>
                <p className="text-white/70">Stay informed about IPv6 developments and best practices</p>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;