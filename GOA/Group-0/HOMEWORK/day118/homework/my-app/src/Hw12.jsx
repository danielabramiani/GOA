import React, { useState, useEffect } from 'react';

const Hw12 = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <h2>Current Time: {time}</h2>;
};

export default Hw12;
