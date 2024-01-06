import React, { useState, useEffect } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);

    document.documentElement.style.backgroundColor = newTheme === 'dark' ? '#2b2b2b' : '#ffffff';
    document.documentElement.style.color = newTheme === 'dark' ? '#ffffff' : '#000000';
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
