// === src/pages/GetInvolved.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaDownload, FaShareAlt, FaGithub } from 'react-icons/fa';

function GetInvolved() {
  const [showStoryForm, setShowStoryForm] = useState(false);

  const volunteerRoles = [
    {
      title: "Content Writer",
      description: "Create educational content about IPv6",
      icon: <FaHandshake className="text-blue-500" />
    },
    {
      title: "Beta Tester",
      description: "Test and provide feedback on IPv6 tools",
      icon: <FaHandshake className="text-green-500" />
    },
    {
      title: "Community Ambassador",
      description: "Spread awareness in your network",
      icon: <FaHandshake className="text-purple-500" />
    }
  ];

  const advocacyTools = [
    {
      title: "Social Media Kit",
      description: "Ready-to-use graphics and posts",
      icon: <FaDownload className="text-red-500" />
    },
    {
      title: "Presentation Deck",
      description: "Educational slides for schools and companies",
      icon: <FaDownload className="text-yellow-500" />
    },
    {
      title: "Infographics",
      description: "Visual guides for IPv6 adoption",
      icon: <FaDownload className="text-blue-500" />
    }
  ];

  const githubIssues = [
    {
      title: "Add IPv6 test tool",
      label: "good first issue",
      description: "Create a simple tool to test IPv6 connectivity"
    },
    {
      title: "Update documentation",
      label: "documentation",
      description: "Update README with new features"
    },
    {
      title: "Fix mobile layout",
      label: "bug",
      description: "Improve responsive design on mobile devices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Be an IPv6 Hero
        </motion.h1>

        {/* Join the Mission Section */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Join the Mission
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.description}</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advocacy Toolkit Section */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Advocacy Toolkit
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advocacyTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center">
                  <FaDownload className="mr-2" />
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Share Your Story Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="text-center mb-8">
              <FaShareAlt className="text-4xl text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Your Story Matters</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Share your IPv6 migration journey and inspire others to make the transition.
                Your experience could help organizations overcome their challenges.
              </p>
            </div>
            <button
              onClick={() => setShowStoryForm(true)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 mx-auto block"
            >
              Share Your Story
            </button>
          </motion.div>
        </section>

        {/* Open Source Contribution Section */}
        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Open Source Contribution
          </motion.h2>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <FaGithub className="text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Contribute to Our GitHub Project</h3>
                <p className="text-gray-600">Help us improve the IPv6 ecosystem</p>
              </div>
            </div>
            <div className="space-y-4">
              {githubIssues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{issue.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      issue.label === 'good first issue' ? 'bg-green-100 text-green-600' :
                      issue.label === 'documentation' ? 'bg-blue-100 text-blue-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {issue.label}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{issue.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Submission Modal */}
        {showStoryForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-6 max-w-2xl w-full"
            >
              <h3 className="text-2xl font-bold mb-4">Share Your IPv6 Story</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Story</label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Upload Image (Optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowStoryForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Submit Story
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default GetInvolved;
