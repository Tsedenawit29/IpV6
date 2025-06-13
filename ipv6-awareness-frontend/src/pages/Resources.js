// === src/pages/Resources.js ===
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { DocumentIcon, ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { TagIcon } from '@heroicons/react/24/outline';

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
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            IPv6 Resources
          </h1>
          <p className="text-lg text-black/80 dark:text-white/80 max-w-2xl mx-auto">
            Explore our comprehensive collection of IPv6 resources, guides, and tools
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-green-500 text-white dark:bg-green-600'
                  : 'bg-white dark:bg-dark-bg-tertiary text-black dark:text-white hover:bg-green-50 dark:hover:bg-dark-bg-secondary'
              }`}
            >
              All Resources
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white dark:bg-green-600'
                    : 'bg-white dark:bg-dark-bg-tertiary text-black dark:text-white hover:bg-green-50 dark:hover:bg-dark-bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white dark:bg-dark-bg-tertiary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {resource.image_url && (
                <div className="relative h-48 w-full">
                  <img
                    src={resource.image_url}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-black/60 dark:text-white/60 mb-4">
                  <div className="flex items-center">
                    <TagIcon className="h-4 w-4 mr-1" />
                    <span>{resource.category}</span>
                  </div>
                  {resource.type && (
                    <div className="flex items-center">
                      <DocumentIcon className="h-4 w-4 mr-1" />
                      <span>{resource.type}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {resource.title}
                </h3>

                <p className="text-black/80 dark:text-white/80 mb-4 line-clamp-3">
                  {resource.description}
                </p>

                {resource.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, index) => (
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
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300"
                  >
                    View Resource
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                  </a>

                  {resource.file_url && (
                    <a
                      href={resource.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary/60 dark:text-dark-text-secondary/60 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
                    >
                      <DocumentIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">Download</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-primary/60 dark:text-dark-text-secondary">
              No resources found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;