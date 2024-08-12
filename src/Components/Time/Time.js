import React, { useEffect, useState } from 'react';
import './Time.css';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Trigger animations on render
    const greetingElement = document.querySelector('.greeting');
    greetingElement.classList.add('animate');

    // Update real-time data every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="greeting-container">
      <h1 className="greeting">Current Time: {time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Time;