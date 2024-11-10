import { useState } from 'react';
import './App.css';
import React from 'react';
import Weather from 'src/Weather';
function MainApp() {
  const [city, setCity] = useState('London');
  const [inputCity, setInputCIty] = useState('')
  const handleSearch = () => {
    setCity(inputCity);
  };
  
  return (
    <div className ="main">
      <h1>Weather App</h1>
      <input type="text" placeholder='Enter city you want to check weather' value={inputCity} onChange={(e) => setInputCIty(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <Weather city={city} />
    </div>
  );
}

export default MainApp;