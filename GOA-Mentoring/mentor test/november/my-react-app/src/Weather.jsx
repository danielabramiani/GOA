import React, { useState, useEffect } from 'react';

function Weather() {
  const apiKey = '9afza5vpuemopj82ffu65gt9sh9v8n9s'; 
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      <h2>Weather in {city}</h2>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;