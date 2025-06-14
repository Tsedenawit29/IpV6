// === src/pages/Events.js ===
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { CalendarIcon, MapPinIcon, ClockIcon, ArrowTopRightOnSquareIcon, TagIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendar, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const { data, error } = await supabase
        .from('ipv6_events')
        .select('*')
        .order('event_date', { ascending: true });

      if (error) throw error;

      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to load events. Please try again later.');
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
            <h3 className="font-semibold mb-2">Error Loading Events</h3>
            <p className="mb-4">{error}</p>
            <button
              onClick={fetchEvents}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const upcomingEvents = events.filter(event => new Date(event.event_date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.event_date) < new Date());

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-text-primary mb-4">
            IPv6 Events
          </h1>
          <p className="text-lg text-primary/70 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Join us at upcoming events and workshops to learn more about IPv6 implementation and best practices
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary dark:text-dark-text-primary mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-dark-bg-tertiary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {event.image_url && (
                  <div className="relative h-48 w-full">
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-primary/60 dark:text-dark-text-secondary/60 mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{new Date(event.event_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-primary dark:text-dark-text-primary mb-3">
                    {event.title}
                  </h3>

                  <p className="text-primary/80 dark:text-dark-text-secondary mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-primary/60 dark:text-dark-text-secondary/60 mb-4">
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                    {event.type && (
                      <div className="flex items-center">
                        <TagIcon className="h-4 w-4 mr-1" />
                        <span>{event.type}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/events/${event.id}`}
                      className="inline-flex items-center text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                    </Link>

                    {event.registration_url && (
                      <a
                        href={event.registration_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary/60 dark:text-dark-text-secondary/60 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
                      >
                        <DocumentIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">Register</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary/60 dark:text-dark-text-secondary">
                No upcoming events scheduled at the moment.
              </p>
            </div>
          )}
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-2xl font-semibold text-primary dark:text-dark-text-primary mb-8">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-dark-bg-tertiary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {event.image_url && (
                  <div className="relative h-48 w-full">
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-primary/60 dark:text-dark-text-secondary/60 mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{new Date(event.event_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-primary dark:text-dark-text-primary mb-3">
                    {event.title}
                  </h3>

                  <p className="text-primary/80 dark:text-dark-text-secondary mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-primary/60 dark:text-dark-text-secondary/60 mb-4">
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                    {event.type && (
                      <div className="flex items-center">
                        <TagIcon className="h-4 w-4 mr-1" />
                        <span>{event.type}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/events/${event.id}`}
                      className="inline-flex items-center text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300"
                    >
                      View Details
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                    </Link>

                    {event.materials_url && (
                      <a
                        href={event.materials_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary/60 dark:text-dark-text-secondary/60 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
                      >
                        <DocumentIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">View Materials</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {pastEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary/60 dark:text-dark-text-secondary">
                No past events available.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Events;