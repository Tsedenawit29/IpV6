import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { DocumentIcon, MagnifyingGlassIcon, TagIcon, UserIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const categories = ['all', 'documentation', 'tutorials', 'tools'];

  useEffect(() => {
    fetchResources();
  }, []);

  useEffect(() => {
    setSearchTerm(searchInput);
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

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      <div className="container mx-auto px-4 py-8">

        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-black dark:text-white">Resource Hub</span>{' '}
            <span className="text-[#00C389]">IPv6</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover handpicked IPv6 guides, tools, and tutorials to level up your network knowledge.
          </p>
        </div>

        {/* Search Bar */}
        <form className="flex flex-col md:flex-row items-center gap-4 mb-8 justify-center" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search resources..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full md:w-96 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00C389] dark:bg-dark-bg-tertiary dark:text-white"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-3 bg-[#00C389] text-white rounded-lg hover:bg-[#00C389]/90 transition-colors shadow-md"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
            Search
          </button>
        </form>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border shadow-sm ${
                  selectedCategory === category
                    ? 'bg-[#00C389] text-white border-[#00C389]'
                    : 'bg-white dark:bg-dark-bg-tertiary text-[#00C389] dark:text-[#00C389] border-gray-200 dark:border-gray-600 hover:bg-green-50 dark:hover:bg-dark-bg-secondary'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="bg-white dark:bg-dark-bg-tertiary rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              {resource.image_url && (
                <img
                  src={resource.image_url}
                  alt={resource.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              )}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <div className="flex items-center">
                    <TagIcon className="h-4 w-4 mr-1" />
                    {resource.category}
                  </div>
                  {resource.type && (
                    <div className="flex items-center">
                      <DocumentIcon className="h-4 w-4 mr-1" />
                      {resource.type}
                    </div>
                  )}
                  {resource.author && (
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {resource.author}
                    </div>
                  )}
                  {resource.date && (
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1 text-gray-500 dark:text-white" />
                      {new Date(resource.date).toLocaleDateString()}
                    </div>
                  )}
                  {resource.time && (
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1 text-gray-500 dark:text-white" />
                      {resource.time}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {resource.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                  {resource.file_url && (
                    <a
                      href={resource.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#00C389] hover:text-[#00C389]/90 transition-colors"
                    >
                      <DocumentIcon className="h-5 w-5" />
                      <span className="font-medium">Download</span>
                    </a>
                  )}
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#00C389] hover:text-[#00C389]/90 transition-colors"
                      >
                        <DocumentIcon className="h-5 w-5" />
                        <span className="font-medium">View Resource</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No resources match your search or selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
