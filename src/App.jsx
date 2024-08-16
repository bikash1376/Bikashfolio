import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Experience from './components/Experience';
import GetInTouch from './components/GetInTouch';
import './ForButton.css'

function App() {

  const [theme, setTheme] = useState('light');

  // Load theme from local storage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme to local storage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <Router>
      <div className="container">
        <div className="for-button">
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌑' : '☀️'}
      </button>
      </div>
        <Profile />
        <TechStack />

        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/work" element={<Work />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>

        <GetInTouch />
      </div>
    </Router>
  );
}

export default App;
