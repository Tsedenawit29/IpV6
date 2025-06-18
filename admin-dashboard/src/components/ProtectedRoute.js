import React, { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../pages/Dashboard';
import Events from '../pages/Events';
import Resources from '../pages/Resources';
import BlogPosts from '../pages/BlogPosts';
import ContactMessages from '../pages/ContactMessages';

function ProtectedRoute({ session, darkMode, toggleDarkMode, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-dark-bg-primary">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar session={session} onClose={() => setSidebarOpen(false)} />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          onLogout={onLogout}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-dark-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/blog-posts" element={<BlogPosts />} />
              <Route path="/contact-messages" element={<ContactMessages />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProtectedRoute; 