import React from 'react';

function Careers() {
  const openPositions = [
    {
      title: "Senior Network Engineer",
      location: "Remote / Global",
      type: "Full-time",
      description: "Lead IPv6 implementation projects and provide technical expertise to our partners.",
      requirements: [
        "10+ years of network engineering experience",
        "Expert knowledge of IPv6 protocols and implementation",
        "Experience with large-scale network deployments",
        "Strong communication and leadership skills"
      ]
    },
    {
      title: "Technical Writer",
      location: "Remote / Global",
      type: "Full-time",
      description: "Create comprehensive documentation and educational materials for IPv6 adoption.",
      requirements: [
        "5+ years of technical writing experience",
        "Understanding of networking concepts",
        "Experience with documentation tools",
        "Strong attention to detail"
      ]
    },
    {
      title: "Community Manager",
      location: "Remote / Global",
      type: "Full-time",
      description: "Build and nurture our global IPv6 community through events and engagement.",
      requirements: [
        "3+ years of community management experience",
        "Passion for technology and education",
        "Excellent communication skills",
        "Experience with event planning"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
        Careers at IPv6 Awareness
      </h1>

      <div className="mb-12">
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed">
          Join our mission to advance IPv6 adoption worldwide. We're looking for passionate individuals 
          who want to make a difference in the future of internet connectivity.
        </p>
      </div>

      <div className="space-y-8">
        {openPositions.map((position, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-accent mb-2">{position.title}</h2>
                <div className="flex space-x-4 text-primary/60 dark:text-secondary/60">
                  <span>{position.location}</span>
                  <span>•</span>
                  <span>{position.type}</span>
                </div>
              </div>
              <button className="px-6 py-2 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent transform hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
            </div>
            <p className="text-primary/80 dark:text-secondary/80 mb-4">{position.description}</p>
            <div>
              <h3 className="text-lg font-semibold text-accent mb-2">Requirements:</h3>
              <ul className="space-y-2">
                {position.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-primary/80 dark:text-secondary/80">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-primary/80 dark:text-secondary/80">Competitive salary and benefits</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-primary/80 dark:text-secondary/80">Remote work opportunities</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-primary/80 dark:text-secondary/80">Professional development support</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Culture</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-primary/80 dark:text-secondary/80">Collaborative environment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-primary/80 dark:text-secondary/80">Work-life balance</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-primary/80 dark:text-secondary/80">Global impact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-primary/80 dark:text-secondary/80 mb-4">
          Don't see a position that matches your skills? We're always looking for talented individuals.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transform hover:scale-105 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Careers; 