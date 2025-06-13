// === src/pages/Contact.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaTwitter, FaGithub, FaArrowRight } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabaseClient';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('ipv6_contact_messages').insert([formData]);

      if (error) {
        throw error;
      }

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'contact@ipv6forum.com',
      link: 'mailto:contact@ipv6forum.com'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Address',
      value: '123 IPv6 Street, Tech City, TC 12345',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/company/ipv6-forum'
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      title: 'Twitter',
      link: 'https://twitter.com/ipv6forum'
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: 'GitHub',
      link: 'https://github.com/ipv6'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-dark-text-accent/10 dark:to-dark-text-accent/20"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary/80 dark:text-dark-text-secondary">
              Get in touch with our team for any questions about IPv6
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-primary dark:text-dark-text-primary mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-primary dark:text-dark-text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-bg-secondary border-2 border-primary/20 dark:border-dark-border focus:border-accent dark:focus:border-dark-text-accent outline-none text-primary dark:text-dark-text-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-primary dark:text-dark-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-bg-secondary border-2 border-primary/20 dark:border-dark-border focus:border-accent dark:focus:border-dark-text-accent outline-none text-primary dark:text-dark-text-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-primary dark:text-dark-text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-bg-secondary border-2 border-primary/20 dark:border-dark-border focus:border-accent dark:focus:border-dark-text-accent outline-none text-primary dark:text-dark-text-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-primary dark:text-dark-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-bg-secondary border-2 border-primary/20 dark:border-dark-border focus:border-accent dark:focus:border-dark-text-accent outline-none text-primary dark:text-dark-text-primary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent-light dark:from-dark-text-accent dark:to-dark-text-accent/80 text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent dark:hover:from-dark-text-accent/80 dark:hover:to-dark-text-accent transform hover:scale-105 transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary dark:text-dark-text-primary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/10 dark:hover:bg-dark-text-accent/10 transition-all duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className="p-3 bg-accent/10 dark:bg-dark-text-accent/10 rounded-xl text-accent dark:text-dark-text-accent">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary dark:text-dark-text-primary">
                          {info.title}
                        </h3>
                        <p className="text-primary/80 dark:text-dark-text-secondary">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary dark:text-dark-text-primary mb-6">
                  Connect With Us
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-accent/10 dark:hover:bg-dark-text-accent/10 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="p-3 bg-accent/10 dark:bg-dark-text-accent/10 rounded-xl text-accent dark:text-dark-text-accent">
                        {social.icon}
                      </div>
                      <span className="text-primary dark:text-dark-text-primary font-medium">
                        {social.title}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;