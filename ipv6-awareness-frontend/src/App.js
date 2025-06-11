// === src/App.js ===
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';
import AboutIPv6 from './pages/AboutIPv6';
import Resources from './pages/Resources';
import Events from './pages/Events';
import GetInvolved from './pages/GetInvolved';
import IPv6Dashboard from './pages/IPv6Dashboard';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-primary-dark text-primary dark:text-secondary transition-colors duration-200">
          <Navbar />
          <HeroSection />
          <div className="flex-1 px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutIPv6 />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/events" element={<Events />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/dashboard" element={<IPv6Dashboard />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
