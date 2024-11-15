import React, { useState, useEffect } from 'react';

function Clock({ format = '24-hour' }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock-container">
      <p className="time">
        {currentTime.toLocaleTimeString('en-US', {
          hour12: format === '12-hour',
        })}
      </p>
    </div>
  );
}

export default Clock;