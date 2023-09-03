import React, { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div>
      
      <p>Date: {formatDate(currentDateTime)} {formatTime(currentDateTime)}</p>
     
    </div>
  );
}

export default DateTimeDisplay;
