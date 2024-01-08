import React, { useState, useEffect } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import adjustIcon from '@iconify/icons-mdi/brightness-6';

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
    <div className={'f:gray-80@light f:gray-20@dark bg:fade-20@dark bg:fade-80@light position:fixed top:10px right:10px transform:translate(-50%, -50%) z-index:999'}>
      <label>
        <input type="checkbox" onChange={toggleTheme} style={{ display: 'none' }} />
        <div style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>
          <Icon icon={adjustIcon} width="1.5em" height="1.5em"/>
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
