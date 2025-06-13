import React from 'react';
import { ArrowRightIcon, GlobeAltIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

function OurMission() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-text-primary mb-6">
            Our Mission
          </h1>
          <p className="text-lg text-primary/70 dark:text-dark-text-secondary max-w-3xl mx-auto">
            Empowering the global community to embrace and implement IPv6, ensuring a sustainable and secure future for the internet.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white dark:bg-dark-bg-tertiary rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary dark:text-dark-text-primary mb-6">
              Driving IPv6 Adoption Worldwide
            </h2>
            <p className="text-lg text-primary/80 dark:text-dark-text-secondary mb-8">
              Our mission is to accelerate the global transition to IPv6 by providing comprehensive resources, 
              education, and support to organizations, network administrators, and technology enthusiasts. 
              We believe in creating a more connected, secure, and scalable internet for future generations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-primary/5 dark:bg-dark-bg-secondary rounded-xl">
                <GlobeAltIcon className="h-12 w-12 text-green-500 dark:text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-primary dark:text-dark-text-primary mb-2">
                  Global Impact
                </h3>
                <p className="text-primary/70 dark:text-dark-text-secondary">
                  Promoting IPv6 adoption across all continents and industries
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-primary/5 dark:bg-dark-bg-secondary rounded-xl">
                <LightBulbIcon className="h-12 w-12 text-green-500 dark:text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-primary dark:text-dark-text-primary mb-2">
                  Innovation
                </h3>
                <p className="text-primary/70 dark:text-dark-text-secondary">
                  Developing cutting-edge solutions for IPv6 implementation
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-primary/5 dark:bg-dark-bg-secondary rounded-xl">
                <ShieldCheckIcon className="h-12 w-12 text-green-500 dark:text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-primary dark:text-dark-text-primary mb-2">
                  Security
                </h3>
                <p className="text-primary/70 dark:text-dark-text-secondary">
                  Ensuring a secure and resilient IPv6 infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-8 md:p-12 text-white mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Our Vision
            </h2>
            <p className="text-lg mb-8">
              We envision a world where IPv6 is the standard protocol for internet communication, 
              enabling unprecedented growth and innovation in the digital landscape.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <ArrowRightIcon className="h-6 w-6 mr-3 flex-shrink-0" />
                <p>Creating a more connected and accessible internet for everyone</p>
              </div>
              <div className="flex items-start">
                <ArrowRightIcon className="h-6 w-6 mr-3 flex-shrink-0" />
                <p>Supporting sustainable growth of the internet infrastructure</p>
              </div>
              <div className="flex items-start">
                <ArrowRightIcon className="h-6 w-6 mr-3 flex-shrink-0" />
                <p>Fostering innovation in network technologies and applications</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary dark:text-dark-text-primary mb-6">
              Join Us in Our Mission
            </h2>
            <p className="text-lg text-primary/70 dark:text-dark-text-secondary mb-8 max-w-2xl mx-auto">
              Together, we can build a more robust, secure, and scalable internet infrastructure 
              for future generations. Join our community and be part of the IPv6 revolution.
            </p>
            <a
              href="/get-involved"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Get Involved
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission; 