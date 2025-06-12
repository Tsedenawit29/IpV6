// === src/pages/Events.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaGlobe, FaExternalLinkAlt, FaUsers, FaVideo, FaBookmark, FaShare, FaClock, FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Events() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Events', icon: <FaCalendarAlt /> },
    { id: 'conference', name: 'Conferences', icon: <FaUsers /> },
    { id: 'webinar', name: 'Webinars', icon: <FaVideo /> },
    { id: 'workshop', name: 'Workshops', icon: <FaBookmark /> }
  ];

  const events = [
    {
      id: 1,
      title: "IPv6 Global Summit 2024",
      description: "The world's largest gathering of IPv6 experts and enthusiasts",
      type: "conference",
      date: "2024-06-15",
      time: "09:00 AM - 05:00 PM",
      location: "San Francisco, USA",
      link: "https://www.ipv6forum.com/",
      tags: ["conference", "networking", "expert-talks"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "IPv6 Implementation Workshop",
      description: "Hands-on workshop for network engineers and administrators",
      type: "workshop",
      date: "2024-05-20",
      time: "10:00 AM - 04:00 PM",
      location: "Online",
      link: "https://www.ietf.org/",
      tags: ["workshop", "hands-on", "implementation"],
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "IPv6 Security Webinar",
      description: "Best practices for securing IPv6 networks",
      type: "webinar",
      date: "2024-04-10",
      time: "02:00 PM - 04:00 PM",
      location: "Online",
      link: "https://www.worldipv6launch.org/",
      tags: ["webinar", "security", "best-practices"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "IPv6 in Cloud Environments",
      description: "Conference focusing on IPv6 deployment in cloud infrastructure",
      type: "conference",
      date: "2024-07-05",
      time: "09:00 AM - 06:00 PM",
      location: "London, UK",
      link: "https://www.ipv6forum.com/",
      tags: ["conference", "cloud", "deployment"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      title: "Mobile IPv6 Workshop",
      description: "Implementing IPv6 in mobile networks",
      type: "workshop",
      date: "2024-05-25",
      time: "10:00 AM - 05:00 PM",
      location: "Berlin, Germany",
      link: "https://www.ietf.org/",
      tags: ["workshop", "mobile", "implementation"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      title: "IPv6 Migration Strategies",
      description: "Webinar on planning and executing IPv6 migration",
      type: "webinar",
      date: "2024-04-15",
      time: "01:00 PM - 03:00 PM",
      location: "Online",
      link: "https://www.worldipv6launch.org/",
      tags: ["webinar", "migration", "planning"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const filteredEvents = events.filter(event => {
    return activeFilter === 'all' || event.type === activeFilter;
  });

  const handleExternalLink = (url) => {
    window.open(url, '_blank');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 bg-white dark:bg-dark-bg-tertiary shadow-lg"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-text-primary mb-4">
            IPv6 Events
          </h1>
          <p className="text-lg text-primary/80 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Stay updated with the latest IPv6 conferences, workshops, and webinars
          </p>
        </div>
      </motion.div>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-white dark:bg-dark-bg-tertiary">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-accent text-white dark:bg-dark-text-accent dark:text-dark-bg-primary'
                    : 'bg-white dark:bg-dark-bg-secondary text-primary dark:text-dark-text-secondary hover:bg-accent/10 dark:hover:bg-dark-text-accent/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.icon}
                {filter.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-dark-bg-tertiary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-dark-text-accent" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <FaClock className="text-dark-text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <FaMapMarkerAlt className="text-dark-text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary dark:text-dark-text-primary mb-2">{event.title}</h3>
                  <p className="text-primary/80 dark:text-dark-text-secondary mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-text-accent/10 text-dark-text-accent rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleExternalLink(event.link)}
                      className="group flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-light dark:from-dark-text-accent dark:to-dark-text-accent/80 text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent dark:hover:from-dark-text-accent/80 dark:hover:to-dark-text-accent transform hover:scale-105 transition-all duration-300"
                    >
                      <span>Register Now</span>
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </button>
                    <button
                      className="p-3 text-primary/60 dark:text-dark-text-secondary/60 hover:text-accent dark:hover:text-dark-text-accent transition-colors"
                    >
                      <FaBookmark className="w-5 h-5" />
                    </button>
                    <button
                      className="p-3 text-primary/60 dark:text-dark-text-secondary/60 hover:text-accent dark:hover:text-dark-text-accent transition-colors"
                    >
                      <FaShare className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;