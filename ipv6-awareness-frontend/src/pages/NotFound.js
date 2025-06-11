import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-[#004D00] dark:text-white mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-[#004D00] dark:text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-[#004D00]/80 dark:text-[#009900]/80 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn btn-primary">
              <FaHome className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-outline">
              <FaArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NotFound; 