import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  CalendarIcon,
  DocumentTextIcon,
  BookOpenIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Events', href: '/events', icon: CalendarIcon },
  { name: 'Resources', href: '/resources', icon: DocumentTextIcon },
  { name: 'Blog Posts', href: '/blog-posts', icon: BookOpenIcon },
  { name: 'Contact Messages', href: '/contact-messages', icon: EnvelopeIcon },
];

function Sidebar({ session }) {
  const location = useLocation();
  const userEmail = session?.user?.email || 'admin@example.com';

  return (
    <div className="flex flex-col h-full bg-white dark:bg-dark-bg-secondary border-r border-gray-200 dark:border-dark-border">
      {/* Logo and Tagline */}
      <div className="flex flex-col items-center justify-center h-24 px-4 border-b border-gray-200 dark:border-dark-border">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="h-16 w-auto mb-2"
        />
        <p className="text-sm font-medium text-primary dark:text-primary-light">
          Think Fast, Think IPv6
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-dark-text-secondary hover:bg-[#009C6B] hover:text-white dark:hover:bg-[#009C6B]'
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200 dark:border-dark-border">
        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User Avatar"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 dark:text-dark-text-primary">
              Admin User
            </p>
            <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
              {userEmail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar; 