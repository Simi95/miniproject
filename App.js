import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [hongKongTime, setHongKongTime] = useState('');
  const [indiaTime, setIndiaTime] = useState('');
  const [usaTime, setUsaTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      
      // Hong Kong Time
      const hongKongOffset = 8; // UTC +8
      const hongKongLocalTime = currentTime.getTime() + (hongKongOffset * 60 * 60 * 1000);
      const hongKongFormattedTime = new Date(hongKongLocalTime).toLocaleTimeString();
      setHongKongTime(hongKongFormattedTime);
      
      // India Time
      const indiaOffset = 5.5; // UTC +5.5
      const indiaLocalTime = currentTime.getTime() + (indiaOffset * 60 * 60 * 1000);
      const indiaFormattedTime = new Date(indiaLocalTime).toLocaleTimeString();
      setIndiaTime(indiaFormattedTime);
      
      // USA Time
      const usaOffset = -4; // UTC -4
      const usaLocalTime = currentTime.getTime() + (usaOffset * 60 * 60 * 1000);
      const usaFormattedTime = new Date(usaLocalTime).toLocaleTimeString();
      setUsaTime(usaFormattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Hong Kong Time: {hongKongTime}</h2>
      <h2>India Time: {indiaTime}</h2>
      <h2>USA Time: {usaTime}</h2>
    </div>
  );
};

export default TimeDisplay;
