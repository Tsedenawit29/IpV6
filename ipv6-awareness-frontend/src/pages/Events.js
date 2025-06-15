// === src/pages/Events.js ===
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import {
  CalendarIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  VideoCameraIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [formData, setFormData] = useState({
    tags: [],
  });

  const eventCategories = [
    { id: 'all', name: 'All Events', icon: BookOpenIcon },
    { id: 'webinar', name: 'Webinars', icon: VideoCameraIcon },
    { id: 'conference', name: 'Conferences', icon: PresentationChartLineIcon },
    { id: 'workshop', name: 'Workshops', icon: AcademicCapIcon },
  ];

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const { data, error } = await supabase
        .from('ipv6_events')
        .select('*')
        .order('event_date', { ascending: false });

      if (error) throw error;

      setEvents(data || []);
      // Ensure formData is set for the first event, safely handling potential undefined
      if (data && data.length > 0) {
        setFormData({
          ...data[0],
          tags: Array.isArray(data[0].tags)
            ? data[0].tags
            : typeof data[0].tags === "string"
              ? data[0].tags.split(",").map(tag => tag.trim()).filter(Boolean)
              : []
        });
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to load events. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  const filteredEvents = events.filter(
    (event) => {
      const eventTypeClean = event.event_type?.toLowerCase().trim();
      const activeCategoryClean = activeCategory.trim();
      return activeCategoryClean === 'all' || eventTypeClean === activeCategoryClean;
    }
  );

  const tagsArray = Array.isArray(formData.tags)
    ? formData.tags
    : typeof formData.tags === "string"
      ? formData.tags.split(",").map(tag => tag.trim()).filter(Boolean)
      : [];

  console.log('Current Active Category:', activeCategory);
  console.log('Total Events:', events.length);
  console.log('Filtered Events Count:', filteredEvents.length);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} onRetry={fetchEvents} />;

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <div className="relative bg-black py-16 md:py-20 overflow-hidden">
        {/* NEW background image suited for conferences */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              IPv6 <span className="text-[#228B22]">Events</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover networking events and learning opportunities about IPv6 technology.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {eventCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    activeCategory === category.id
                      ? 'bg-[#228B22] text-black font-medium shadow-sm'
                      : 'bg-white/10 text-white border border-white/20 hover:border-[#228B22]'
                  }`}
                >
                  <category.icon
                    className={`h-5 w-5 mr-2 ${
                      activeCategory === category.id ? 'text-black' : 'text-[#228B22]'
                    }`}
                  />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {eventCategories.find((c) => c.id === activeCategory)?.name}
          </h2>
          <span className="text-sm px-3 py-1 bg-[#228B22]/10 text-[#228B22] rounded-full">
            {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
          </span>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState onResetFilter={() => setActiveCategory('all')} />
        )}
      </div>

      <CTASection />
    </div>
  );
}

// Event Card
const EventCard = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
    whileHover={{ y: -5 }}
    className="group"
  >
    <Link to={`/events/${event.id}`} className="block h-full">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800 h-full flex flex-col overflow-hidden hover:shadow-md transition-all duration-300">
        {event.image_url && (
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={event.image_url}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        )}

        <div className="p-5 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#228B22] transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {event.description}
          </p>

          <div className="space-y-3 mt-auto">
            <div className="flex items-start">
              <CalendarIcon className="h-5 w-5 mr-3 mt-0.5 text-[#228B22]" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {new Date(event.event_date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{event.time}</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="h-5 w-5 mr-3 mt-0.5 text-[#228B22]" />
              <p className="text-sm text-gray-600 dark:text-gray-400">{event.location}</p>
            </div>
          </div>
        </div>

        <div className="px-5 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <span className="inline-flex items-center text-sm font-medium text-[#228B22] group-hover:underline">
              View details
              <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1.5" />
            </span>
            {event.registration_url && (
              <a
                href={event.registration_url}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-[#228B22] text-white rounded hover:bg-[#228B22]/90 transition-colors shadow-sm"
              >
                Register
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

// Loading State
const LoadingState = () => (
  <div className="min-h-screen bg-white dark:bg-black pt-20">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 animate-pulse overflow-hidden"
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-800" />
            <div className="p-5">
              <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-3" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6 mb-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Error State
const ErrorState = ({ error, onRetry }) => (
  <div className="min-h-screen bg-white dark:bg-black pt-20">
    <div className="container mx-auto px-4 py-8">
      <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-100 p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold text-lg mb-2">Error Loading Events</h3>
        <p className="mb-4">{error}</p>
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  </div>
);

// Empty State
const EmptyState = ({ onResetFilter }) => (
  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-12 text-center border border-dashed border-gray-200 dark:border-gray-800">
    <div className="max-w-md mx-auto">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#228B22]/10 flex items-center justify-center">
        <CalendarIcon className="h-8 w-8 text-[#228B22]" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No events found</h3>
      <p className="text-gray-500 dark:text-gray-500 mb-4">
        There are currently no events matching your selection.
      </p>
      <button
        onClick={onResetFilter}
        className="text-sm font-medium text-[#228B22] hover:underline"
      >
        View all events
      </button>
    </div>
  </div>
);

// CTA Section
const CTASection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-gradient-to-r from-[#228B22]/10 to-[#228B22]/5 dark:from-[#228B22]/5 dark:to-[#228B22]/10 border-t border-b border-[#228B22]/20"
  >
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Have questions about IPv6 events?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Get in touch with our team for more information.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-[#228B22] text-white font-medium rounded-lg hover:bg-[#228B22]/90 transition-colors shadow-sm"
        >
          Contact Us
          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
        </Link>
      </div>
    </div>
  </motion.div>
);

export default Events;
