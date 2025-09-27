import HeroSection from '../HeroSection';
import { useState } from 'react';

export default function HeroSectionExample() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log('Theme toggled:', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <HeroSection isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
}