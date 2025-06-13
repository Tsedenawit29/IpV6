// === src/pages/Blog.js ===
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Link } from 'react-router-dom';
import { 
  UserIcon, 
  CalendarIcon, 
  TagIcon, 
  ArrowTopRightOnSquareIcon,
  DocumentIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendar, FaUser, FaTag } from 'react-icons/fa';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  async function fetchBlogPosts() {
    try {
      const { data, error } = await supabase
        .from('ipv6_blog_posts')
        .select('*')
        .order('published_on', { ascending: false });

      if (error) throw error;

      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

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
            <h3 className="font-semibold mb-2">Error Loading Blog Posts</h3>
            <p className="mb-4">{error}</p>
            <div className="text-sm text-red-600 dark:text-red-300 mb-4">
              Please check if:
              <ul className="list-disc list-inside mt-2">
                <li>The database connection is working</li>
                <li>The table name is correct</li>
                <li>You have the necessary permissions</li>
              </ul>
            </div>
            <button
              onClick={fetchBlogPosts}
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-accent/10 dark:from-dark-bg-primary dark:via-primary/10 dark:to-accent/20"></div>
        <div className="absolute inset-0 hero-pattern"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
              IPv6 <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Latest news, insights, and updates about IPv6
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/resources" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  View Resources
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/documentation" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform bg-transparent hover:bg-primary-dark hover:text-white rounded-lg hover:scale-105 hover:shadow-lg border-2 border-primary"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-primary group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Read Documentation
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white dark:bg-dark-bg-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Latest <span className="text-primary">Posts</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stay updated with the latest IPv6 news and insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <span className="flex items-center gap-2">
                    <FaCalendar className="text-primary" />
                    {post.published_on ? new Date(post.published_on).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'Not published'}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaUser className="text-primary" />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-primary">
                    <FaTag />
                    {post.tags && post.tags.join(', ')}
                  </span>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-primary transition-all duration-300 ease-out transform bg-transparent hover:bg-primary-dark hover:text-white rounded-lg hover:scale-105 hover:shadow-lg border-2 border-primary"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-primary group-hover:bg-primary-dark"></span>
                    <span className="relative flex items-center gap-2">
                      Read More
                      <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Stay <span className="text-primary">Updated</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter for the latest IPv6 news and updates
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/subscribe" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Subscribe Now
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform bg-transparent hover:bg-primary-dark hover:text-white rounded-lg hover:scale-105 hover:shadow-lg border-2 border-primary"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-primary group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Contact Us
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

export default Blog;