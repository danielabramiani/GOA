import { useState } from 'react';
import './App.css';
import Weather from './Weather';

function MainApp() {
  const [city, setCity] = useState('London');
  const [inputCity, setInputCity] = useState('');

  const handleSearch = () => {
    if (inputCity.trim()) {
      setCity(inputCity.trim());
      setInputCity('');
    }
  };

  return (
    <div className="main">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city you want to check weather"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <Weather city={city} />
    </div>
  );
}

export default MainApp;
