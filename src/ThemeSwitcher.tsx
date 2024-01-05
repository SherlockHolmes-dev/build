// src/ThemeSwitcher.tsx
import React, { useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={'position:fixed top:50% left:50% transform:translate(-50%, -50%) z-index:999'}>
      <label>
        <input type="checkbox" onChange={toggleTheme} />
        Toggle Theme
      </label>
    </div>
  );
};

export default ThemeSwitcher;
