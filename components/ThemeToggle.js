import { useState, useEffect, createContext, useContext } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

// Create Theme Context
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// Theme Provider Component
export function ThemeProvider({ children }) {
  // Start with light theme by default for SSR
  const [theme, setTheme] = useState('light');
  
  // Flag to track if component has mounted
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Mark component as mounted
    setMounted(true);
    
    // Check for user's preferred color scheme
    const userPrefersDark = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (userPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Theme Toggle Button
export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Avoid rendering the toggle until after mounting to prevent hydration mismatch
  if (!mounted) {
    return null;
  }
  
  return (
    <motion.button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
      <style jsx>{`
        .theme-toggle-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--grey-900);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          cursor: pointer;
          z-index: 999;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </motion.button>
  );
}