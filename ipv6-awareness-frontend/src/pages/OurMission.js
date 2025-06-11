import React from 'react';

function OurMission() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
        Our Mission
      </h1>
      
      <div className="space-y-8">
        <section className="bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-accent">Advancing IPv6 Adoption</h2>
          <p className="text-primary/80 dark:text-secondary/80 leading-relaxed">
            Our mission is to accelerate the global adoption of IPv6 by providing comprehensive education, 
            resources, and support to organizations and individuals worldwide. We believe that IPv6 is not 
            just a technical upgrade, but a fundamental shift in how the internet operates and grows.
          </p>
        </section>

        <section className="bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-accent">Key Objectives</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-accent mt-1">•</span>
              <p className="text-primary/80 dark:text-secondary/80">
                Promote awareness and understanding of IPv6's importance in the future of internet connectivity
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent mt-1">•</span>
              <p className="text-primary/80 dark:text-secondary/80">
                Provide accessible resources and training for organizations transitioning to IPv6
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent mt-1">•</span>
              <p className="text-primary/80 dark:text-secondary/80">
                Foster collaboration between industry leaders, governments, and educational institutions
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent mt-1">•</span>
              <p className="text-primary/80 dark:text-secondary/80">
                Support research and development in IPv6 technologies and applications
              </p>
            </li>
          </ul>
        </section>

        <section className="bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-accent">Our Vision</h2>
          <p className="text-primary/80 dark:text-secondary/80 leading-relaxed">
            We envision a future where IPv6 is the standard protocol for internet communication, 
            enabling unprecedented growth and innovation in connected technologies. Through our 
            efforts, we aim to create a more secure, scalable, and efficient internet infrastructure 
            that can support the growing demands of our digital world.
          </p>
        </section>

        <section className="bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-accent">Join Our Mission</h2>
          <p className="text-primary/80 dark:text-secondary/80 leading-relaxed mb-6">
            Whether you're an individual, organization, or government entity, there are many ways 
            to contribute to our mission of advancing IPv6 adoption. Together, we can build a more 
            robust and future-proof internet.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/get-involved"
              className="px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent transform hover:scale-105 transition-all duration-300"
            >
              Get Involved
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurMission; 