import React from 'react';
import { SunIcon, MoonIcon, ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/outline';

function Header({ darkMode, toggleDarkMode, onLogout, onMenuClick }) {
  return (
    <header className="bg-white dark:bg-dark-bg-secondary border-b border-gray-200 dark:border-dark-border h-16">
      <div className="flex justify-between items-center h-full px-4">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg text-gray-500 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary transition-colors focus:outline-none focus:ring-2 focus:ring-black"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        
        {/* Desktop spacer */}
        <div className="hidden lg:block" />
        
        {/* Center tagline */}
        <div className="hidden sm:block flex-1 text-center">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Think Fast, Think IPv6
          </h1>
        </div>
        
        {/* Right side buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-gray-500 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary transition-colors focus:outline-none focus:ring-2 focus:ring-black"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
          <button
            onClick={onLogout}
            className="p-2 rounded-lg text-gray-500 dark:text-dark-text-secondary hover:bg-red-100 dark:hover:bg-red-900 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header; 