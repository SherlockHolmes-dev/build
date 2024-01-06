import React, { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setDarkMode(storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches));
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.className = isDarkMode ? 'light' : 'dark';
  };

  return { isDarkMode, toggleTheme };
};

const ThemeSwitcher: React.FC = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
      <label>
        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
        Toggle Theme
      </label>
    </div>
  );
};

export default ThemeSwitcher;
