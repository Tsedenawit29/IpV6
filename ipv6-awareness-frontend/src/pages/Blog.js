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
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-text-primary mb-4">
            IPv6 Blog
          </h1>
          <p className="text-lg text-primary/70 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and developments in the world of IPv6
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-dark-bg-tertiary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {post.image_url && (
                <div className="relative h-48 w-full">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-primary/60 dark:text-dark-text-secondary/60 mb-4">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{post.published_on ? new Date(post.published_on).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'Not published'}</span>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-primary dark:text-dark-text-primary mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-primary/80 dark:text-dark-text-secondary mb-4 line-clamp-3">
                  {post.short_description || post.content}
                </p>

                {post.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 dark:bg-dark-text-accent/10 text-primary dark:text-dark-text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300"
                  >
                    Read More
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                  </Link>

                  {post.file_url && (
                    <a
                      href={post.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary/60 dark:text-dark-text-secondary/60 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
                    >
                      <DocumentIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">View Attachment</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-primary/60 dark:text-dark-text-secondary">
              No blog posts available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;