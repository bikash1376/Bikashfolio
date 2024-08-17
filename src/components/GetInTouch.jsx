import { useState, useEffect } from 'react';
import '../App.css'
import './GetInTouch.css'

function GetInTouch() {

  const [currentDateTime, setCurrentDateTime] = useState(formatDateTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(formatDateTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <footer>
      <span>{currentDateTime}</span>
      <br />
      <span>©2024 Bikash || All Rights Reserved</span>
    </footer>
  );
}

function formatDateTime() {
  const date = new Date();
  
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: false
  };
  
  return date.toLocaleString('en-US', options);
}

export default GetInTouch;
