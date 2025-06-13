// === src/pages/Contact.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-accent/10 dark:from-dark-bg-primary dark:via-primary/10 dark:to-accent/20"></div>
        <div className="absolute inset-0 hero-pattern"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get in touch with our team for any questions or support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white dark:bg-dark-bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Have questions about IPv6? We're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FaEnvelope className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">support@ipv6awareness.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FaPhone className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">123 Tech Street, Silicon Valley, CA 94043</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-2xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg-tertiary text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg-tertiary text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg-tertiary text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg-tertiary text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center w-full px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message
                    <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Visit Our <span className="text-primary">Office</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Come meet us in person
            </p>
          </motion.div>

          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.627904167088!2d-122.08373988468247!3d37.42199997982354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sPalo+Alto%2C+CA!5e0!3m2!1sen!2sus!4v1565277759798!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;