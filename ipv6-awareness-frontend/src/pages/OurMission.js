import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGlobe, FaUsers, FaBook, FaHandshake } from 'react-icons/fa';

const OurMission = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg-primary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-white via-primary/10 to-primary/5 dark:from-dark-bg-primary dark:via-primary/20 dark:to-primary/10">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="container mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-lg text-black/80 dark:text-white/80 mb-8">
              To accelerate the global adoption of IPv6 and ensure a sustainable future for internet connectivity.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/get-involved" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Join Us
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/about-ipv6" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform border-2 border-primary hover:bg-primary hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Learn More
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4 bg-white dark:bg-dark-bg-secondary">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
              Our Vision
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-black/80 dark:text-white/80 mb-6">
                We envision a world where IPv6 is the standard protocol for internet communication, enabling seamless connectivity for billions of devices and supporting the growth of emerging technologies.
              </p>
              <p className="text-black/80 dark:text-white/80 mb-6">
                Our mission is to drive the global transition to IPv6 through education, collaboration, and practical implementation support.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-dark-bg-primary">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">
              Our Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-start p-6 bg-white dark:bg-dark-bg-tertiary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-primary mb-4">
                    {goal.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-black/80 dark:text-white/80">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-black/80 dark:text-white/80 mb-12 text-lg">
              Be part of the IPv6 revolution and help shape the future of internet connectivity.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/get-involved" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-primary hover:bg-primary-dark rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-primary-dark group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Get Involved
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
    </div>
  );
};

const goals = [
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: "Global Adoption",
    description: "Drive worldwide IPv6 adoption through education and awareness campaigns."
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Community Building",
    description: "Foster a strong community of IPv6 advocates and implementers."
  },
  {
    icon: <FaBook className="w-8 h-8" />,
    title: "Education",
    description: "Provide comprehensive resources and training for IPv6 implementation."
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Collaboration",
    description: "Partner with organizations to accelerate IPv6 deployment."
  }
];

export default OurMission; 