 // === src/pages/Community.js ===
import React from 'react';

function Community() {
  const communitySections = [
    {
      title: "Forums",
      description: "Join discussions with IPv6 experts and enthusiasts",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      items: [
        {
          title: "General Discussion",
          description: "Open forum for all IPv6-related topics",
          members: "2.5k",
          posts: "15k"
        },
        {
          title: "Technical Support",
          description: "Get help with implementation and troubleshooting",
          members: "1.8k",
          posts: "12k"
        },
        {
          title: "Best Practices",
          description: "Share and learn about IPv6 deployment strategies",
          members: "1.2k",
          posts: "8k"
        }
      ]
    },
    {
      title: "Events",
      description: "Upcoming community events and meetups",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        {
          title: "Monthly Webinars",
          description: "Expert-led sessions on IPv6 topics",
          date: "Every 2nd Thursday",
          time: "14:00 UTC"
        },
        {
          title: "Community Meetups",
          description: "Local IPv6 enthusiast gatherings",
          date: "Monthly",
          time: "Various times"
        },
        {
          title: "Annual Conference",
          description: "Global IPv6 summit and networking event",
          date: "June 2024",
          time: "TBD"
        }
      ]
    },
    {
      title: "Resources",
      description: "Community-contributed content and tools",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      items: [
        {
          title: "Knowledge Base",
          description: "Community-maintained documentation",
          articles: "500+",
          contributors: "150+"
        },
        {
          title: "Tools & Scripts",
          description: "Open-source IPv6 utilities",
          tools: "50+",
          downloads: "10k+"
        },
        {
          title: "Case Studies",
          description: "Real-world IPv6 implementation stories",
          studies: "100+",
          organizations: "75+"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
        Community
      </h1>

      <div className="mb-12">
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed">
          Join our vibrant community of IPv6 enthusiasts, experts, and implementers. Share knowledge, 
          get support, and contribute to the future of internet connectivity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {communitySections.map((section, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-accent">
                {section.icon}
              </div>
              <h2 className="text-2xl font-semibold text-accent">{section.title}</h2>
            </div>
            <p className="text-primary/80 dark:text-secondary/80 mb-8">
              {section.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-primary/10 dark:border-secondary/10 hover:border-accent/50 dark:hover:border-accent/50 transform hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-accent mb-2">{item.title}</h3>
                  <p className="text-primary/80 dark:text-secondary/80 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-primary/60 dark:text-secondary/60">
                    {Object.entries(item)
                      .filter(([key]) => !['title', 'description'].includes(key))
                      .map(([key, value]) => (
                        <span key={key} className="flex items-center space-x-1">
                          <span className="capitalize">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-accent">Join Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">Get Started</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Create an Account</p>
                  <p className="text-primary/80 dark:text-secondary/80">Join our community platform</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Introduce Yourself</p>
                  <p className="text-primary/80 dark:text-secondary/80">Share your IPv6 journey</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Join Discussions</p>
                  <p className="text-primary/80 dark:text-secondary/80">Participate in ongoing conversations</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">Community Guidelines</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Be Respectful</p>
                  <p className="text-primary/80 dark:text-secondary/80">Treat all members with respect</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Share Knowledge</p>
                  <p className="text-primary/80 dark:text-secondary/80">Contribute to community learning</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-primary dark:text-white">Stay Professional</p>
                  <p className="text-primary/80 dark:text-secondary/80">Maintain a professional environment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-primary/80 dark:text-secondary/80 mb-4">
          Ready to join our community? Create your account today and start contributing!
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent transform hover:scale-105 transition-all duration-300">
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default Community;