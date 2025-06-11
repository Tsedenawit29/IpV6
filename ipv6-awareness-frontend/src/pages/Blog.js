// === src/pages/Blog.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendar, FaUser, FaTag, FaArrowRight, FaShare, FaBookmark, FaRegBookmark } from 'react-icons/fa';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'news', name: 'News' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'case-studies', name: 'Case Studies' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Internet: IPv6 Adoption Trends',
      excerpt: 'Exploring the latest trends in IPv6 adoption and what it means for the future of internet connectivity.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'news',
      author: 'John Doe',
      date: '2024-03-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How to Implement IPv6 in Your Network',
      excerpt: 'A comprehensive guide to implementing IPv6 in your existing network infrastructure.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'tutorials',
      author: 'Jane Smith',
      date: '2024-03-10',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'IPv6 Success Story: Global Enterprise Migration',
      excerpt: 'Case study of a global enterprise successfully migrating to IPv6.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'case-studies',
      author: 'Mike Johnson',
      date: '2024-03-05',
      readTime: '6 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-primary-dark dark:to-primary/10">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
              IPv6 Blog
            </h1>
            <p className="text-lg text-primary/80 dark:text-secondary/80 mb-8">
              Stay updated with the latest news, tutorials, and insights about IPv6
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-xl bg-white dark:bg-primary/5 border-2 border-secondary/20 focus:border-accent outline-none text-primary dark:text-secondary"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`btn ${
                  selectedCategory === category.id
                    ? 'btn-primary'
                    : 'btn-ghost'
                }`}
                whileHover={{ y: -2 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-primary/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-accent text-primary rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-primary/60 dark:text-secondary/60 mb-4">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-accent" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-accent" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {post.title}
                  </h2>
                  <p className="text-primary/80 dark:text-secondary/80 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary/60 dark:text-secondary/60">
                      {post.readTime}
                    </span>
                    <div className="flex items-center gap-4">
                      <button className="btn btn-ghost">
                        <FaShare />
                      </button>
                      <button className="btn btn-ghost">
                        <FaRegBookmark />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;