// === src/pages/Resources.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaTools, FaDownload, FaVideo, FaFilePdf } from 'react-icons/fa';

function Resources() {
  const [activeTab, setActiveTab] = useState('tutorials');

  const tutorials = [
    {
      title: "Introduction to IPv6",
      type: "video",
      duration: "15 min",
      level: "Beginner",
      icon: <FaVideo className="text-red-500" />
    },
    {
      title: "IPv6 Addressing Schemes",
      type: "article",
      duration: "20 min",
      level: "Intermediate",
      icon: <FaBook className="text-blue-500" />
    },
    {
      title: "Advanced IPv6 Routing",
      type: "article",
      duration: "30 min",
      level: "Advanced",
      icon: <FaBook className="text-blue-500" />
    }
  ];

  const tools = [
    {
      title: "IPv6 Address Converter",
      description: "Convert between IPv6 formats",
      icon: <FaTools className="text-green-500" />
    },
    {
      title: "Packet Analyzer",
      description: "Wireshark labs for IPv6",
      icon: <FaTools className="text-purple-500" />
    },
    {
      title: "Network Simulator",
      description: "Practice IPv6 configurations",
      icon: <FaTools className="text-yellow-500" />
    }
  ];

  const resources = [
    {
      title: "IETF IPv6 Standards",
      type: "PDF",
      size: "2.4 MB",
      icon: <FaFilePdf className="text-red-500" />
    },
    {
      title: "Cisco IPv6 Guide",
      type: "PDF",
      size: "3.1 MB",
      icon: <FaFilePdf className="text-red-500" />
    },
    {
      title: "RIPE IPv6 Best Practices",
      type: "PDF",
      size: "1.8 MB",
      icon: <FaFilePdf className="text-red-500" />
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
          Tools to Learn, Build & Experiment
        </motion.h1>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            {['tutorials', 'tools', 'resources'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tutorials Section */}
          {activeTab === 'tutorials' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{tutorial.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{tutorial.duration}</span>
                        <span>•</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                          {tutorial.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Tools Section */}
          {activeTab === 'tools' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{tool.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                      <p className="text-gray-600">{tool.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Resources Section */}
          {activeTab === 'resources' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{resource.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                    <FaDownload className="mr-2" />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Resources;