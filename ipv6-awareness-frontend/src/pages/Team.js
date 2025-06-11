import React from 'react';

function Team() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Executive Director",
      bio: "Network protocol expert with 15+ years of experience in IPv6 implementation and education.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Director",
      bio: "Former network architect with expertise in large-scale IPv6 deployments.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Dr. James Wilson",
      role: "Research Lead",
      bio: "PhD in Computer Science focusing on next-generation internet protocols.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Emily Thompson",
      role: "Education Coordinator",
      bio: "Specialist in technical education and curriculum development for IPv6 training.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
        Our Team
      </h1>

      <div className="mb-12">
        <p className="text-lg text-primary/80 dark:text-secondary/80 leading-relaxed">
          Our team consists of passionate experts dedicated to advancing IPv6 adoption worldwide. 
          With diverse backgrounds in networking, education, and research, we work together to 
          create a more connected future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-primary-dark/50 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-accent mb-2">{member.name}</h3>
              <p className="text-primary/60 dark:text-secondary/60 mb-4">{member.role}</p>
              <p className="text-primary/80 dark:text-secondary/80">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white dark:bg-primary-dark/50 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-accent">Join Our Team</h2>
        <p className="text-primary/80 dark:text-secondary/80 mb-6">
          We're always looking for passionate individuals to join our mission. If you're interested 
          in contributing to the future of internet connectivity, check out our current openings.
        </p>
        <a
          href="/careers"
          className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-lg hover:from-accent-light hover:to-accent transform hover:scale-105 transition-all duration-300"
        >
          View Open Positions
        </a>
      </div>
    </div>
  );
}

export default Team; 