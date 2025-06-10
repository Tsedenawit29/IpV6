// === src/components/Navbar.js ===
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">IPv6 Awareness</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About IPv6</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;