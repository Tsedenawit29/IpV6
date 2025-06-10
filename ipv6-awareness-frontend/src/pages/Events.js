// === src/pages/Events.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaVideo, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRSVPForm, setShowRSVPForm] = useState(false);

  const upcomingEvents = [
    {
      id: 1,
      title: "IPv6 Deployment Workshop",
      date: "2024-04-15",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual",
      type: "Workshop",
      description: "Learn practical IPv6 deployment strategies"
    },
    {
      id: 2,
      title: "IPv6 Security Summit",
      date: "2024-05-20",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      type: "Conference",
      description: "Advanced security practices for IPv6 networks"
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: "IPv6 Basics Webinar",
      date: "2024-03-01",
      recording: "https://example.com/recording1",
      tags: ["Basics", "Webinar"]
    },
    {
      id: 4,
      title: "IPv6 in IoT",
      date: "2024-02-15",
      recording: "https://example.com/recording2",
      tags: ["IoT", "Technical"]
    }
  ];

  const handleRSVP = (event) => {
    setSelectedEvent(event);
    setShowRSVPForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Join the IPv6 Movement
        </motion.h1>

        {/* Upcoming Events Section */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Upcoming Events
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700">{event.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {event.type}
                  </span>
                </div>
                <button
                  onClick={() => handleRSVP(event)}
                  className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  RSVP Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Past Events Archive
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaCalendarAlt className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href={event.recording}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <FaVideo className="mr-2" />
                  Watch Recording
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RSVP Modal */}
        {showRSVPForm && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-6 max-w-md w-full"
            >
              <h3 className="text-2xl font-bold mb-4">RSVP for {selectedEvent.title}</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="calendar"
                    className="mr-2"
                  />
                  <label htmlFor="calendar">Add to calendar</label>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowRSVPForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Submit RSVP
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Events;