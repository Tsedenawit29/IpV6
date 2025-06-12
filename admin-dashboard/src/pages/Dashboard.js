import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import {
  BookOpenIcon,
  NewspaperIcon,
  CalendarIcon,
  EnvelopeIcon,
  UsersIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg p-6 border border-gray-200 dark:border-dark-border">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg bg-primary bg-opacity-10`}>
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500 dark:text-dark-text-secondary">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const [stats, setStats] = useState({
    resources: 0,
    blogPosts: 0,
    events: 0,
    contactMessages: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchRecentActivity();
  }, []);

  async function fetchStats() {
    try {
      // Fetch resources count
      const { count: resourcesCount } = await supabase
        .from('resources')
        .select('*', { count: 'exact', head: true });

      // Fetch blog posts count
      const { count: blogPostsCount } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true });

      // Fetch events count
      const { count: eventsCount } = await supabase
        .from('events')
        .select('*', { count: 'exact', head: true });

      // Fetch contact messages count
      const { count: contactMessagesCount } = await supabase
        .from('contact_messages')
        .select('*', { count: 'exact', head: true });

      setStats({
        resources: resourcesCount || 0,
        blogPosts: blogPostsCount || 0,
        events: eventsCount || 0,
        contactMessages: contactMessagesCount || 0,
      });
    } catch (error) {
      toast.error('Error fetching statistics');
      console.error('Error:', error);
    }
  }

  async function fetchRecentActivity() {
    try {
      // Fetch recent resources
      const { data: recentResources } = await supabase
        .from('resources')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      // Fetch recent blog posts
      const { data: recentBlogPosts } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      // Fetch recent events
      const { data: recentEvents } = await supabase
        .from('events')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      // Fetch recent contact messages
      const { data: recentMessages } = await supabase
        .from('contact_messages')
        .select('*')
        .order('submitted_at', { ascending: false })
        .limit(5);

      // Combine and sort all activities
      const allActivities = [
        ...(recentResources?.map(resource => ({
          type: 'resource',
          title: resource.title,
          date: resource.created_at,
          icon: BookOpenIcon,
        })) || []),
        ...(recentBlogPosts?.map(post => ({
          type: 'blog',
          title: post.title,
          date: post.created_at,
          icon: NewspaperIcon,
        })) || []),
        ...(recentEvents?.map(event => ({
          type: 'event',
          title: event.title,
          date: event.created_at,
          icon: CalendarIcon,
        })) || []),
        ...(recentMessages?.map(message => ({
          type: 'message',
          title: message.subject,
          date: message.submitted_at,
          icon: EnvelopeIcon,
        })) || []),
      ].sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);

      setRecentActivity(allActivities);
    } catch (error) {
      toast.error('Error fetching recent activity');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const statsData = [
    { name: 'Total Users', value: '1,234', icon: UsersIcon },
    { name: 'Events', value: '12', icon: CalendarIcon },
    { name: 'Resources', value: '45', icon: DocumentTextIcon },
    { name: 'Messages', value: '89', icon: EnvelopeIcon },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-dark-text-secondary">
            Welcome to your admin dashboard
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <StatCard
            key={stat.name}
            title={stat.name}
            value={stat.value}
            icon={stat.icon}
            color="bg-primary"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg p-6 border border-gray-200 dark:border-dark-border">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <p className="text-gray-500 dark:text-dark-text-secondary">
              No recent activity to display
            </p>
          </div>
        </div>

        <div className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg p-6 border border-gray-200 dark:border-dark-border">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              Create Event
            </button>
            <button className="p-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              Add Resource
            </button>
            <button className="p-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              New Blog Post
            </button>
            <button className="p-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              View Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 