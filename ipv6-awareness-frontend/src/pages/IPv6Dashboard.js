// === src/pages/IPv6Dashboard.js ===
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { 
  ChartBarIcon, 
  GlobeAltIcon, 
  ServerIcon, 
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

function IPv6Dashboard() {
  const [stats, setStats] = useState({
    globalAdoption: 0,
    localAdoption: 0,
    activeConnections: 0,
    securityScore: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      // Simulated data for demonstration
      // In a real application, this would come from your backend
      setStats({
        globalAdoption: 35.6,
        localAdoption: 42.3,
        activeConnections: 15678,
        securityScore: 85
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setError('Failed to load dashboard data');
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-100 p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-2">Error Loading Dashboard</h3>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 dark:from-dark-bg-primary dark:to-dark-bg-secondary pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-text-primary mb-4">
            IPv6 Dashboard
          </h1>
          <p className="text-lg text-primary/70 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Monitor IPv6 adoption, performance, and security metrics in real-time
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Global Adoption */}
          <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 dark:bg-dark-text-accent/10 rounded-lg">
                <GlobeAltIcon className="h-6 w-6 text-primary dark:text-dark-text-accent" />
              </div>
              <span className="text-sm font-medium text-primary/60 dark:text-dark-text-secondary/60">
                Global
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-dark-text-primary mb-2">
              {stats.globalAdoption}%
            </h3>
            <p className="text-primary/60 dark:text-dark-text-secondary/60">
              Global IPv6 Adoption Rate
            </p>
          </div>

          {/* Local Adoption */}
          <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 dark:bg-dark-text-accent/10 rounded-lg">
                <ServerIcon className="h-6 w-6 text-primary dark:text-dark-text-accent" />
              </div>
              <span className="text-sm font-medium text-primary/60 dark:text-dark-text-secondary/60">
                Local
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-dark-text-primary mb-2">
              {stats.localAdoption}%
            </h3>
            <p className="text-primary/60 dark:text-dark-text-secondary/60">
              Local Network Adoption
            </p>
          </div>

          {/* Active Connections */}
          <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 dark:bg-dark-text-accent/10 rounded-lg">
                <ChartBarIcon className="h-6 w-6 text-primary dark:text-dark-text-accent" />
              </div>
              <span className="text-sm font-medium text-primary/60 dark:text-dark-text-secondary/60">
                Active
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-dark-text-primary mb-2">
              {stats.activeConnections.toLocaleString()}
            </h3>
            <p className="text-primary/60 dark:text-dark-text-secondary/60">
              Active IPv6 Connections
            </p>
          </div>

          {/* Security Score */}
          <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 dark:bg-dark-text-accent/10 rounded-lg">
                <ShieldCheckIcon className="h-6 w-6 text-primary dark:text-dark-text-accent" />
              </div>
              <span className="text-sm font-medium text-primary/60 dark:text-dark-text-secondary/60">
                Security
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-dark-text-primary mb-2">
              {stats.securityScore}%
            </h3>
            <p className="text-primary/60 dark:text-dark-text-secondary/60">
              Network Security Score
            </p>
          </div>
        </div>

        {/* Status Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Metrics */}
          <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-primary dark:text-dark-text-primary mb-4">
              Performance Metrics
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-primary/80 dark:text-dark-text-secondary">Latency</span>
                <span className="text-primary dark:text-dark-text-primary font-medium">45ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary/80 dark:text-dark-text-secondary">Packet Loss</span>
                <span className="text-primary dark:text-dark-text-primary font-medium">0.1%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary/80 dark:text-dark-text-secondary">Throughput</span>
                <span className="text-primary dark:text-dark-text-primary font-medium">950 Mbps</span>
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="bg-white dark:bg-dark-bg-tertiary rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-primary dark:text-dark-text-primary mb-4">
              Security Status
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-primary/80 dark:text-dark-text-secondary">Firewall Status</span>
                <span className="text-green-600 dark:text-green-400 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary/80 dark:text-dark-text-secondary">DDoS Protection</span>
                <span className="text-green-600 dark:text-green-400 font-medium">Enabled</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary/80 dark:text-dark-text-secondary">Last Scan</span>
                <span className="text-primary dark:text-dark-text-primary font-medium">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="mt-8">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  System Notice
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300">
                  IPv6 adoption is increasing globally. Ensure your network is properly configured for IPv6 to maintain optimal performance and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPv6Dashboard;