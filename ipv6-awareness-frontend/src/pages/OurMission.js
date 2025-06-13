import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGlobe, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';

const OurMission = () => {
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
              Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Empowering the future of internet connectivity through IPv6 adoption and education
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
                to="/resources" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform bg-transparent hover:bg-primary-dark hover:text-white rounded-lg hover:scale-105 hover:shadow-lg border-2 border-primary"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-primary group-hover:bg-primary-dark"></span>
                <span className="relative flex items-center gap-2">
                  Explore Resources
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white dark:bg-dark-bg-primary">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Our <span className="text-primary">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Promoting IPv6 adoption and education worldwide through comprehensive resources, training, and community engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGlobe className="text-3xl text-primary" />,
                title: "Global Impact",
                description: "Working towards worldwide IPv6 adoption and implementation"
              },
              {
                icon: <FaUsers className="text-3xl text-accent" />,
                title: "Community Building",
                description: "Fostering a strong and supportive IPv6 community"
              },
              {
                icon: <FaLightbulb className="text-3xl text-primary" />,
                title: "Education",
                description: "Providing comprehensive training and resources"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-dark-bg-secondary dark:to-dark-bg-tertiary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Join Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Together, we can build a more connected and secure internet future
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/get-involved" 
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
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-300 ease-out transform bg-transparent hover:bg-primary-dark hover:text-white rounded-lg hover:scale-105 hover:shadow-lg border-2 border-primary"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary-dark group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-primary group-hover:bg-primary-dark"></span>
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

export default OurMission; 