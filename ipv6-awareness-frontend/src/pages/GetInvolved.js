// === src/pages/GetInvolved.js ===
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUsers, FaCode, FaBook, FaHandshake, FaLightbulb, FaGlobe, FaComments } from 'react-icons/fa';

function GetInvolved() {
  const contributionWays = [
    {
      title: 'Join Our Community',
      description: 'Connect with IPv6 enthusiasts, share knowledge, and participate in discussions.',
      icon: <FaUsers className="text-4xl text-yellow-500" />,
      link: '#'
    },
    {
      title: 'Contribute Code',
      description: 'Help develop tools and utilities for IPv6 implementation and testing.',
      icon: <FaCode className="text-4xl text-yellow-500" />,
      link: '#'
    },
    {
      title: 'Write Documentation',
      description: 'Create guides, tutorials, and documentation to help others learn about IPv6.',
      icon: <FaBook className="text-4xl text-yellow-500" />,
      link: '#'
    },
    {
      title: 'Partner With Us',
      description: 'Collaborate on projects and initiatives to promote IPv6 adoption.',
      icon: <FaHandshake className="text-4xl text-yellow-500" />,
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-accent/10"></div>
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Get <span className="text-primary">Involved</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our community and help shape the future of IPv6
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/resources" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  View Resources
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform border-2 border-primary hover:bg-primary hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Contact Us
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ways to Contribute Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-black">
              Ways to <span className="text-primary">Contribute</span>
            </h2>
            <p className="text-xl text-gray-600">
              There are many ways to get involved in our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributionWays.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300"
              >
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {way.icon}
                </motion.div>
                <motion.h3 
                  className="text-2xl font-semibold mb-4 text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {way.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {way.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={way.link}
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-primary transition-all duration-300 ease-out transform bg-transparent hover:bg-primary-dark hover:text-white rounded-lg hover:scale-105 hover:shadow-lg border-2 border-primary"
                  >
                    <span className="relative flex items-center gap-2">
                      Learn More
                      <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-black">
              Ready to <span className="text-primary">Join?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your journey with us today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/resources"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform bg-transparent hover:bg-primary-dark hover:text-white rounded-lg hover:scale-105 hover:shadow-lg border-2 border-primary"
              >
                <span className="relative flex items-center gap-2">
                  Explore Resources
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default GetInvolved;