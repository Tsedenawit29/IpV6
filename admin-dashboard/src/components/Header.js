import React from 'react';
import { SunIcon, MoonIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

function Header({ darkMode, toggleDarkMode, onLogout }) {
  return (
    <header className="bg-white dark:bg-dark-bg-secondary border-b border-gray-200 dark:border-dark-border h-16">
      <div className="flex justify-end items-center h-full px-4 space-x-2">
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
    </header>
  );
}

export default Header; 