// === src/pages/Contact.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { supabase } from '../lib/supabaseClient';
import toast from 'react-hot-toast';

const Contact = () => {
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
      const { error } = await supabase
        .from('ipv6_contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            submitted_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message || 'Failed to send message');

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

      toast.error(error.message || 'Failed to send message. Please try again.');

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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[30vh] flex items-center justify-center bg-white dark:bg-dark-bg-primary overflow-hidden">
        {/* Background gradients and bulbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
          <div className="absolute top-1/2 left-[60%] w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-16 right-10 w-48 h-48 bg-secondary/30 rounded-full blur-[60px]"></div>
          <div className="absolute inset-0 dark:hero-pattern mix-blend-soft-light"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black dark:text-white">
              Contact <span className="text-[#00C389]">Us</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We'd love to hear from you. Reach out with any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white dark:bg-dark-bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                  Get in <span className="text-[#00C389]">Touch</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Whether you're curious about features or want support—we're ready to answer any and all questions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00C389]/10 flex items-center justify-center">
                    <FaEnvelope className="text-xl text-[#00C389]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black dark:text-white mb-0.5">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">contact@rasbyte.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00C389]/10 flex items-center justify-center">
                    <FaPhone className="text-xl text-[#00C389]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black dark:text-white mb-0.5">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (571) 388-9886</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00C389]/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl text-[#00C389]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black dark:text-white mb-0.5">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">16708 Richmond Hwy,
                    Suite 111 Dumfries, VA 22026</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-base font-semibold text-black dark:text-white mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 rounded-lg bg-[#00C389]/10 flex items-center justify-center text-[#00C389] hover:bg-[#00C389] hover:text-white transition">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-lg bg-[#00C389]/10 flex items-center justify-center text-[#00C389] hover:bg-[#00C389] hover:text-white transition">
                    <FaTwitter className="text-lg" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-lg bg-[#00C389]/10 flex items-center justify-center text-[#00C389] hover:bg-[#00C389] hover:text-white transition">
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg-tertiary text-black dark:text-white focus:ring-2 focus:ring-[#00C389] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg-tertiary text-black dark:text-white focus:ring-2 focus:ring-[#00C389] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg-tertiary text-black dark:text-white focus:ring-2 focus:ring-[#00C389] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-bg-tertiary text-black dark:text-white focus:ring-2 focus:ring-[#00C389] focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"

                  disabled={loading}
                  className="group relative inline-flex items-center justify-center w-full px-6 py-3 font-bold text-white transition-all duration-300 ease-out transform bg-[#00C389] hover:bg-[#009C6B] rounded-lg hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}

                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
