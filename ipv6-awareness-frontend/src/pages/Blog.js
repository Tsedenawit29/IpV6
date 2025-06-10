// === src/pages/Blog.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCalendarAlt, FaTag, FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'deployment', name: 'Deployment Stories' },
    { id: 'security', name: 'Security & Privacy' },
    { id: 'government', name: 'Government Policies' },
    { id: 'tutorials', name: 'Tools & Tutorials' }
  ];

  const featuredArticle = {
    title: "Why IPv6 Is Critical in 2025",
    excerpt: "As we approach 2025, the importance of IPv6 adoption becomes increasingly clear. This article explores the critical role IPv6 will play in the future of internet infrastructure.",
    author: {
      name: "Dr. Sarah Chen",
      role: "Network Architect",
      avatar: "/images/author-avatar.jpg"
    },
    date: "March 15, 2024",
    category: "Security & Privacy",
    readTime: "8 min read"
  };

  const articles = [
    {
      title: "IPv6 Deployment Success Story: Enterprise Migration",
      excerpt: "How a Fortune 500 company successfully migrated to IPv6",
      author: "John Smith",
      date: "March 10, 2024",
      category: "Deployment Stories"
    },
    {
      title: "Government Mandates for IPv6 Adoption",
      excerpt: "Understanding new regulations requiring IPv6 implementation",
      author: "Maria Garcia",
      date: "March 5, 2024",
      category: "Government Policies"
    },
    {
      title: "IPv6 Security Best Practices",
      excerpt: "Essential security measures for IPv6 networks",
      author: "David Kim",
      date: "February 28, 2024",
      category: "Security & Privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Insights, Trends, and Thought Leadership
        </motion.h1>

        {/* Featured Article */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Featured
                </span>
                <span className="text-gray-500">{featuredArticle.date}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{featuredArticle.readTime}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
              <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{featuredArticle.author.name}</p>
                    <p className="text-sm text-gray-500">{featuredArticle.author.role}</p>
                  </div>
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Categories */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <FaTag className="text-blue-500" />
                  <span className="text-sm text-gray-500">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaUser className="text-gray-400" />
                    <span className="text-sm text-gray-500">{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-gray-400" />
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="max-w-2xl mx-auto text-center">
            <FaEnvelope className="text-4xl text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest IPv6 news, tutorials, and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.section>

        {/* Author Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Dr. Sarah Chen",
              role: "Network Architect",
              bio: "Expert in IPv6 deployment and network security",
              social: {
                twitter: "#",
                linkedin: "#",
                github: "#"
              }
            },
            {
              name: "John Smith",
              role: "Network Engineer",
              bio: "Specializing in enterprise IPv6 migration",
              social: {
                twitter: "#",
                linkedin: "#",
                github: "#"
              }
            },
            {
              name: "Maria Garcia",
              role: "Policy Analyst",
              bio: "Focusing on government IPv6 initiatives",
              social: {
                twitter: "#",
                linkedin: "#",
                github: "#"
              }
            }
          ].map((author, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <img
                src={`/images/author-${index + 1}.jpg`}
                alt={author.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{author.name}</h3>
              <p className="text-blue-600 mb-2">{author.role}</p>
              <p className="text-gray-600 mb-4">{author.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={author.social.twitter} className="text-gray-400 hover:text-blue-500">
                  <FaTwitter />
                </a>
                <a href={author.social.linkedin} className="text-gray-400 hover:text-blue-500">
                  <FaLinkedin />
                </a>
                <a href={author.social.github} className="text-gray-400 hover:text-blue-500">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Blog;