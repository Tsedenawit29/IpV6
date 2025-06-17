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
      description: "Leading the global transition to IPv6, ensuring a sustainable and scalable internet infrastructure that supports the growing demands of connected devices and emerging technologies.",
      icon: <FaGlobe className="text-6xl text-[#00C389]" />
    },
    {
      title: "Community Building",
      description: "Fostering a collaborative ecosystem of IPv6 experts, network engineers, and technology leaders to share knowledge and drive innovation in IPv6 implementation.",
      icon: <FaUsers className="text-6xl text-[#00C389]" />
    },
    {
      title: "Innovation & Education",
      description: "Providing comprehensive resources, training, and support to help organizations and individuals understand and implement IPv6 effectively in their networks.",
      icon: <FaLightbulb className="text-6xl text-[#00C389]" />
    },
    {
      title: "Security & Standards",
      description: "Promoting best practices and security standards for IPv6 deployment, ensuring a safe and reliable transition from IPv4 to IPv6 across global networks.",
      icon: <FaShieldAlt className="text-6xl text-[#00C389]" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#00C389]/5 to-[#00C389]/10 dark:from-dark-bg-primary dark:via-[#00C389]/10 dark:to-[#00C389]/20"></div>
        <div className="absolute inset-0 hero-pattern"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00C389]/10 rounded-full blur-3xl dark:bg-[#00C389]/20"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#00C389]/10 rounded-full blur-3xl dark:bg-[#00C389]/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
              Our <span className="text-[#00C389]">Mission</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Accelerating IPv6 adoption and building a sustainable internet future
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/GetInvolved" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-[#00C389] hover:bg-[#009C6B] rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Get Started
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/resources" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#00C389] dark:text-white transition-all duration-300 ease-out transform border-2 border-[#00C389] hover:bg-[#00C389] hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
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
              Our <span className="text-[#00C389]">Mission</span> Pillars
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
                      <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                        <div className="mb-6 bg-[#00C389]/10 dark:bg-[#00C389]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                          {slide.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{slide.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{slide.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-dark-bg-tertiary shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <FaArrowRight className="w-6 h-6 text-[#00C389] transform rotate-180" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-dark-bg-tertiary shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <FaArrowRight className="w-6 h-6 text-[#00C389]" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-[#00C389]/5 via-[#00C389]/10 to-[#00C389]/5 dark:from-[#00C389]/10 dark:via-[#00C389]/20 dark:to-[#00C389]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">
              Our <span className="text-[#00C389]">Vision</span>
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 bg-white dark:bg-dark-bg-tertiary rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="mb-6 transform transition-all duration-300 hover:text-[#00C389] dark:hover:text-[#00C389]">
                  We envision a future where IPv6 is the foundation of global internet infrastructure, 
                  enabling seamless connectivity for billions of devices and supporting the next generation of internet applications.
                </p>
                <p className="mb-6 transform transition-all duration-300 hover:text-[#00C389] dark:hover:text-[#00C389]">
                  Our commitment is to drive the global transition to IPv6, making it accessible and 
                  implementable for organizations of all sizes, from small businesses to large enterprises.
                </p>
                <p className="transform transition-all duration-300 hover:text-[#00C389] dark:hover:text-[#00C389]">
                  Through education, collaboration, and innovation, we're building a more connected, 
                  secure, and scalable internet that will support the digital needs of tomorrow.
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
              Join Our <span className="text-[#00C389]">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Be part of the IPv6 revolution and help shape the future of the internet
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/GetInvolved" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out transform bg-[#00C389] hover:bg-[#009C6B] rounded-lg hover:scale-105 hover:shadow-lg"
              >
                <span className="relative flex items-center gap-2">
                  Get Involved
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#00C389] dark:text-white transition-all duration-300 ease-out transform border-2 border-[#00C389] hover:bg-[#00C389] hover:text-white rounded-lg hover:scale-105 hover:shadow-lg"
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
}

export default OurMission; 