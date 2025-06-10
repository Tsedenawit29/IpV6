// === src/pages/Contact.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Let's Connect
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  rows="6"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full px-6 py-3 rounded-lg text-white transition-colors duration-300 ${
                  formStatus === 'submitting'
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Office Location */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Office Location</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-6">
                {/* Add your Google Maps embed here */}
                <div className="flex items-center justify-center text-gray-500">
                  Google Maps Embed
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="text-blue-500 mr-3" />
                <span>123 IPv6 Street, Tech City, TC 12345</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <FaEnvelope className="text-blue-500 mr-3" />
                  <span>contact@ipv6awareness.org</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaPhone className="text-blue-500 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Response Time Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-blue-50 rounded-xl p-6 text-center"
            >
              <p className="text-blue-600">
                We typically respond within 48 hours
              </p>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default Contact;