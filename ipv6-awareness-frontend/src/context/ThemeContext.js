import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Theme configuration
const themeConfig = {
  light: {
    primary: '#004D00',
    secondary: '#FFD700',
    accent: '#00FF00',
    background: '#FFFFFF',
    text: '#004D00',
    card: '#FFFFFF',
    border: '#E5E7EB',
    hover: '#F3F4F6'
  },
  dark: {
    primary: '#FFFFFF',
    secondary: '#FFD700',
    accent: '#FFD700',
    background: '#121212',
    text: '#FFFFFF',
    card: '#1E1E1E',
    border: '#2D2D2D',
    hover: '#2D2D2D'
  }
};

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      // Apply dark theme colors
      document.documentElement.style.setProperty('--color-primary', themeConfig.dark.primary);
      document.documentElement.style.setProperty('--color-secondary', themeConfig.dark.secondary);
      document.documentElement.style.setProperty('--color-accent', themeConfig.dark.accent);
      document.documentElement.style.setProperty('--color-background', themeConfig.dark.background);
      document.documentElement.style.setProperty('--color-text', themeConfig.dark.text);
      document.documentElement.style.setProperty('--color-card', themeConfig.dark.card);
      document.documentElement.style.setProperty('--color-border', themeConfig.dark.border);
      document.documentElement.style.setProperty('--color-hover', themeConfig.dark.hover);
    } else {
      document.documentElement.classList.remove('dark');
      // Apply light theme colors
      document.documentElement.style.setProperty('--color-primary', themeConfig.light.primary);
      document.documentElement.style.setProperty('--color-secondary', themeConfig.light.secondary);
      document.documentElement.style.setProperty('--color-accent', themeConfig.light.accent);
      document.documentElement.style.setProperty('--color-background', themeConfig.light.background);
      document.documentElement.style.setProperty('--color-text', themeConfig.light.text);
      document.documentElement.style.setProperty('--color-card', themeConfig.light.card);
      document.documentElement.style.setProperty('--color-border', themeConfig.light.border);
      document.documentElement.style.setProperty('--color-hover', themeConfig.light.hover);
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, theme: darkMode ? themeConfig.dark : themeConfig.light }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 