import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
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
    <div className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-dark-border">
      <div className="flex items-center">
        <div className={`p-2 sm:p-3 rounded-lg bg-primary bg-opacity-10 flex-shrink-0`}>
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </div>
        <div className="ml-3 sm:ml-4 min-w-0 flex-1">
          <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-dark-text-secondary">{title}</p>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();
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
        .from('ipv6_resources')
        .select('*', { count: 'exact', head: true });

      // Fetch blog posts count
      const { count: blogPostsCount } = await supabase
        .from('ipv6_blog_posts')
        .select('*', { count: 'exact', head: true });

      // Fetch events count
      const { count: eventsCount } = await supabase
        .from('ipv6_events')
        .select('*', { count: 'exact', head: true });

      // Fetch contact messages count
      const { count: contactMessagesCount } = await supabase
        .from('ipv6_contact_messages')
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
      console.log('Starting to fetch recent activity...');
      
      // Fetch recent resources
      const { data: recentResources, error: resourcesError } = await supabase
        .from('ipv6_resources')
        .select('*')
        .order('date', { ascending: false })
        .limit(3);

      if (resourcesError) {
        console.error('Error fetching resources:', resourcesError);
        throw new Error(`Failed to fetch resources: ${resourcesError.message}`);
      }
      console.log('Resources fetched successfully:', recentResources?.length || 0);

      // Fetch recent blog posts
      const { data: recentBlogPosts, error: blogError } = await supabase
        .from('ipv6_blog_posts')
        .select('*')
        .order('published_on', { ascending: false })
        .limit(3);

      if (blogError) {
        console.error('Error fetching blog posts:', blogError);
        throw new Error(`Failed to fetch blog posts: ${blogError.message}`);
      }
      console.log('Blog posts fetched successfully:', recentBlogPosts?.length || 0);

      // Fetch recent events
      const { data: recentEvents, error: eventsError } = await supabase
        .from('ipv6_events')
        .select('*')
        .order('event_date', { ascending: false })
        .limit(3);

      if (eventsError) {
        console.error('Error fetching events:', eventsError);
        throw new Error(`Failed to fetch events: ${eventsError.message}`);
      }
      console.log('Events fetched successfully:', recentEvents?.length || 0);

      // Fetch recent contact messages
      const { data: recentMessages, error: messagesError } = await supabase
        .from('ipv6_contact_messages')
        .select('*')
        .order('submitted_at', { ascending: false })
        .limit(3);

      if (messagesError) {
        console.error('Error fetching messages:', messagesError);
        throw new Error(`Failed to fetch messages: ${messagesError.message}`);
      }
      console.log('Messages fetched successfully:', recentMessages?.length || 0);

      // Combine and sort all activities with more detailed information
      const allActivities = [
        ...(recentResources?.map(resource => ({
          type: 'New Resource Added',
          title: resource.title,
          description: resource.description,
          date: resource.date,
          icon: BookOpenIcon,
          category: resource.category,
          url: resource.url
        })) || []),
        ...(recentBlogPosts?.map(post => ({
          type: 'New Blog Post',
          title: post.title,
          description: post.content?.substring(0, 100) + '...',
          date: post.published_on,
          icon: NewspaperIcon,
          author: post.author,
          status: post.status
        })) || []),
        ...(recentEvents?.map(event => ({
          type: 'New Event Created',
          title: event.title,
          description: event.description,
          date: event.event_date,
          icon: CalendarIcon,
          location: event.location,
          status: event.status
        })) || []),
        ...(recentMessages?.map(message => ({
          type: 'New Contact Message',
          title: message.subject,
          description: message.message,
          date: message.submitted_at,
          icon: EnvelopeIcon,
          from: message.name,
          email: message.email
        })) || []),
      ].sort((a, b) => new Date(b.date) - new Date(a.date))

        .slice(0, 4);

      console.log('Combined activities:', allActivities.length);
      setRecentActivity(allActivities);
    } catch (error) {
      console.error('Detailed error in fetchRecentActivity:', error);
      toast.error(`Error fetching recent activity: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const statsData = [
    { name: 'Resources', value: stats.resources, icon: DocumentTextIcon },
    { name: 'Events', value: stats.events, icon: CalendarIcon },
    { name: 'Blog Posts', value: stats.blogPosts, icon: NewspaperIcon },
    { name: 'Messages', value: stats.contactMessages, icon: EnvelopeIcon },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-dark-text-secondary">
            Welcome to your admin dashboard
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-dark-border">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {recentActivity.length > 0 ? (
              recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-3 hover:bg-gray-50 dark:hover:bg-dark-hover rounded-lg transition-colors">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary bg-opacity-10 flex-shrink-0">
                    <activity.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium text-primary mb-1 block">
                          {activity.type}
                        </span>
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {activity.title}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-dark-text-secondary mt-1 sm:mt-0 sm:ml-2">
                        {new Date(activity.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-dark-text-secondary mt-1 line-clamp-2">
                      {activity.description}
                    </p>
                    {activity.type === 'New Event Created' && (
                      <div className="mt-1 flex flex-col sm:flex-row sm:items-center text-xs text-gray-500 dark:text-dark-text-secondary">
                        <span className="mr-0 sm:mr-2 mb-1 sm:mb-0">📍 {activity.location}</span>
                        <span className={`px-2 py-0.5 rounded-full w-fit ${
                          activity.status === 'upcoming' ? 'bg-green-100 text-green-800' :
                          activity.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                    )}
                    {activity.type === 'New Contact Message' && (
                      <div className="mt-1 text-xs text-gray-500 dark:text-dark-text-secondary">
                        <span>From: {activity.from}</span>
                        <span className="mx-2">•</span>
                        <span className="truncate">{activity.email}</span>
                      </div>
                    )}
                    {activity.type === 'New Blog Post' && (
                      <div className="mt-1 flex flex-col sm:flex-row sm:items-center text-xs text-gray-500 dark:text-dark-text-secondary">
                        <span className="mr-0 sm:mr-2 mb-1 sm:mb-0">By: {activity.author}</span>
                        <span className={`px-2 py-0.5 rounded-full w-fit ${
                          activity.status === 'published' ? 'bg-green-100 text-green-800' :
                          activity.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                    )}
                    {activity.type === 'New Resource Added' && (
                      <div className="mt-1 flex flex-col sm:flex-row sm:items-center text-xs text-gray-500 dark:text-dark-text-secondary">
                        <span className="mr-0 sm:mr-2 mb-1 sm:mb-0">Category: {activity.category}</span>
                        {activity.url && (
                          <a 
                            href={activity.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            View Resource
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-dark-text-secondary">
                No recent activity to display
              </p>
            )}
          </div>
        </div>

        <div className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-dark-border">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <button 
              onClick={() => navigate('/events')}
              className="p-3 sm:p-4 bg-[#00C389] text-white rounded-lg hover:bg-[#009C6B] transition-colors text-sm sm:text-base"
            >
              Create Event
            </button>
            <button 
              onClick={() => navigate('/resources')}
              className="p-3 sm:p-4 bg-[#00C389] text-white rounded-lg hover:bg-[#009C6B] transition-colors text-sm sm:text-base"
            >
              Add Resource
            </button>
            <button 
              onClick={() => navigate('/blog-posts')}
              className="p-3 sm:p-4 bg-[#00C389] text-white rounded-lg hover:bg-[#009C6B] transition-colors text-sm sm:text-base"
            >
              New Blog Post
            </button>
            <button 
              onClick={() => navigate('/contact-messages')}
              className="p-3 sm:p-4 bg-[#00C389] text-white rounded-lg hover:bg-[#009C6B] transition-colors text-sm sm:text-base"
            >
              View Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 