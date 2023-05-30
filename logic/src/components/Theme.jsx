import React, { useState } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
   <div>
      <div className={`${theme}`}>
      <h2>Theme Changer</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
    <hr />
   </div>
  );
};

export default Theme;
