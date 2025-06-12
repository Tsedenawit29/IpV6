import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../pages/Dashboard';
import Events from '../pages/Events';
import Resources from '../pages/Resources';
import BlogPosts from '../pages/BlogPosts';
import ContactMessages from '../pages/ContactMessages';

function ProtectedRoute({ session, darkMode, toggleDarkMode, onLogout }) {
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-dark-bg-primary">
      <Sidebar session={session} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} onLogout={onLogout} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-dark-bg-primary">
          <div className="container mx-auto px-6 py-8">
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