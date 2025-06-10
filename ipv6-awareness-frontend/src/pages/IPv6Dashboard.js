// === src/pages/IPv6Dashboard.js ===
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaChartLine, FaTable } from 'react-icons/fa';

function IPv6Dashboard() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeTab, setActiveTab] = useState('map');

  const adoptionData = [
    { country: "United States", adoption: 45.2, growth: 2.1, isp: "Comcast" },
    { country: "Germany", adoption: 56.8, growth: 1.8, isp: "Deutsche Telekom" },
    { country: "Japan", adoption: 38.5, growth: 3.2, isp: "NTT" },
    { country: "Brazil", adoption: 42.3, growth: 4.5, isp: "Vivo" },
    { country: "India", adoption: 28.7, growth: 5.2, isp: "Reliance Jio" }
  ];

  const yearlyGrowth = [
    { year: 2020, adoption: 25.3 },
    { year: 2021, adoption: 32.1 },
    { year: 2022, adoption: 38.7 },
    { year: 2023, adoption: 45.2 },
    { year: 2024, adoption: 52.8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Visualize the IPv6 Revolution
        </motion.h1>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            {[
              { id: 'map', icon: <FaGlobe />, label: 'Global Map' },
              { id: 'charts', icon: <FaChartLine />, label: 'Charts' },
              { id: 'table', icon: <FaTable />, label: 'Data Table' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Global Map Section */}
        {activeTab === 'map' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-xl shadow-lg mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Global IPv6 Adoption Map</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-6">
              {/* Add your world map visualization here */}
              <div className="flex items-center justify-center text-gray-500">
                Interactive World Map Visualization
              </div>
            </div>
            {selectedCountry && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 p-4 rounded-lg"
              >
                <h3 className="font-semibold mb-2">{selectedCountry.country} Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Adoption Rate</p>
                    <p className="text-xl font-bold">{selectedCountry.adoption}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Yearly Growth</p>
                    <p className="text-xl font-bold">{selectedCountry.growth}%</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.section>
        )}

        {/* Charts Section */}
        {activeTab === 'charts' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Year-over-Year Growth</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                {/* Add your line chart here */}
                <div className="flex items-center justify-center text-gray-500">
                  Line Chart Visualization
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Device Compatibility</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                {/* Add your pie chart here */}
                <div className="flex items-center justify-center text-gray-500">
                  Pie Chart Visualization
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Data Table Section */}
        {activeTab === 'table' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Detailed Adoption Statistics</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Country
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ISP
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Adoption Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Growth Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {adoptionData.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{row.country}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{row.isp}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{row.adoption}%</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{row.growth}%</div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        )}

        {/* Data Source Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-8"
        >
          Data sourced from Google IPv6 Statistics and APNIC Labs
        </motion.div>
      </div>
    </div>
  );
}

export default IPv6Dashboard;