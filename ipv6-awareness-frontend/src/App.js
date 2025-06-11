// === src/App.js ===
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutIPv6 from './pages/AboutIPv6';
import Resources from './pages/Resources';
import Events from './pages/Events';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import IPv6Dashboard from './pages/IPv6Dashboard';
import TestIPv6 from './pages/TestIPv6';
import NotFound from './pages/NotFound';

// Global styles
const globalStyles = {
  mainContent: "flex-grow min-h-screen",
  contentWrapper: "container mx-auto px-4 py-8",
  transitions: "transition-all duration-300 ease-in-out"
};

// Page transition component
const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-[#004D00]/5 dark:from-[#004D00]/5 dark:to-[#004D00]/10">
          <Navbar />
          <main className={globalStyles.mainContent}>
            <div className={globalStyles.contentWrapper}>
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutIPv6 />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/get-involved" element={<GetInvolved />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/dashboard" element={<IPv6Dashboard />} />
                  <Route path="/test" element={<TestIPv6 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
