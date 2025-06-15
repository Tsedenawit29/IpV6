import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGlobe, FaUsers, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

function OurMission() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const missionSlides = [
    {
      title: "Global IPv6 Adoption",
      description: "Our mission is to accelerate the global adoption of IPv6, ensuring a sustainable and scalable internet infrastructure for future generations.",
      icon: <FaGlobe className="text-6xl text-yellow-500" />
    },
    {
      title: "Community Building",
      description: "We strive to build a strong, collaborative community of IPv6 advocates, developers, and implementers worldwide.",
      icon: <FaUsers className="text-6xl text-yellow-500" />
    },
    {
      title: "Innovation & Education",
      description: "We promote innovation in IPv6 technology and provide comprehensive education to bridge the knowledge gap.",
      icon: <FaLightbulb className="text-6xl text-yellow-500" />
    },
    {
      title: "Security & Standards",
      description: "We work to ensure IPv6 implementation meets the highest security standards and follows best practices.",
      icon: <FaShieldAlt className="text-6xl text-yellow-500" />
    }
  ];

  useEffect(() => {
    let interval;
    if (autoPlay && !isHovering) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % missionSlides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, isHovering, missionSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % missionSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + missionSlides.length) % missionSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-accent/10 dark:from-dark-bg-primary dark:via-primary/10 dark:to-accent/20"></div>
        <div className="absolute inset-0 hero-pattern"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl dark:bg-accent/20"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl dark:bg-primary/20"></div>
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
              Advancing IPv6 adoption and building a sustainable internet future
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
                to="/resources" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary dark:text-white transition-all duration-300 ease-out transform border-2 border-primary hover:bg-primary hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  View Resources
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Carousel Section */}
      <section className="py-20 bg-white dark:bg-dark-bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">
              Our <span className="text-primary">Mission</span> Pillars
            </h2>
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {missionSlides.map((slide, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-xl p-8">
                        <div className="mb-6">{slide.icon}</div>
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{slide.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{slide.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-dark-bg-tertiary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaArrowRight className="w-6 h-6 text-primary transform rotate-180" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-dark-bg-tertiary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaArrowRight className="w-6 h-6 text-primary" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">
              Our <span className="text-primary">Vision</span>
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="mb-6 transform transition-all duration-300 hover:text-primary dark:hover:text-primary-light">
                  We envision a world where IPv6 is the standard protocol for internet communication, 
                  enabling unprecedented growth and innovation in the digital space.
                </p>
                <p className="mb-6 transform transition-all duration-300 hover:text-primary dark:hover:text-primary-light">
                  Our commitment extends beyond mere adoption - we aim to create an ecosystem where 
                  IPv6 implementation is seamless, secure, and accessible to all.
                </p>
                <p className="transform transition-all duration-300 hover:text-primary dark:hover:text-primary-light">
                  Through collaboration, education, and innovation, we're building the foundation 
                  for a more connected and sustainable digital future.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-dark-bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Join Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Be part of the IPv6 revolution
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
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary dark:text-white transition-all duration-300 ease-out transform bg-transparent hover:bg-primary-dark hover:text-white rounded-lg hover:scale-105 hover:shadow-lg border-2 border-primary"
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
}

export default OurMission; 