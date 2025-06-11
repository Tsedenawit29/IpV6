// === src/pages/Events.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaGlobe, FaExternalLinkAlt, FaSearch, FaFilter, FaArrowRight, FaUsers, FaVideo, FaBookmark, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Events() {
  const [searchTerm, setSearchTerm] = useState('');
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
      location: "Online",
      link: "https://www.worldipv6launch.org/",
      tags: ["webinar", "migration", "planning"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = activeFilter === 'all' || event.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleExternalLink = (url) => {
    window.open(url, '_blank');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
              IPv6 Events
            </h1>
            <p className="text-lg text-primary/80 dark:text-secondary/80 mb-8">
              Stay updated with the latest IPv6 conferences, workshops, and webinars
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-primary/5 border-2 border-secondary/20 focus:border-accent outline-none text-primary dark:text-secondary"
              />
              <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-primary/40 dark:text-secondary/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-white dark:bg-primary/5">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-accent text-primary shadow-lg'
                    : 'bg-white dark:bg-primary/5 text-primary/80 dark:text-secondary/80 hover:bg-accent/10'
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
                className="bg-white dark:bg-primary/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                      <FaCalendarAlt className="text-accent" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <FaMapMarkerAlt className="text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">{event.title}</h3>
                  <p className="text-primary/80 dark:text-secondary/80 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleExternalLink(event.link)}
                      className="group flex-1 flex items-center justify-center gap-2 bg-accent text-primary px-6 py-3 rounded-xl font-semibold hover:bg-accent-light transition-all duration-300"
                    >
                      <span>Register Now</span>
                      <FaExternalLinkAlt className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => handleExternalLink(event.link)}
                      className="group p-3 bg-white dark:bg-primary text-primary dark:text-secondary border-2 border-secondary rounded-xl hover:bg-secondary hover:text-white dark:hover:bg-secondary dark:hover:text-primary transition-all duration-300"
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

      {/* Call to Action */}
      <section className="py-12 px-4 bg-white dark:bg-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">
              Want to Host an Event?
            </h2>
            <p className="text-lg text-primary/80 dark:text-secondary/80 mb-8">
              Join our community of IPv6 event organizers and share your knowledge
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-involved" className="btn btn-primary">
                Get Involved
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.ietf.org/meeting/next/" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Register for IETF
              </a>
              <a href="https://www.ietf.org/meeting/next/registration/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                View Registration
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;