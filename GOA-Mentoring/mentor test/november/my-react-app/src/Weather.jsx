import React, { useEffect, useState } from 'react';

function Weather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1564d3c19e953ed8b3e7a178cced82fa`
          );

          if (!response.ok) throw new Error("City not found");

          const data = await response.json();
          setWeatherData(data);
          setError(null);
        } catch (err) {
          setWeatherData(null);
          setError(err.message);
        }
      };

      fetchWeather();
    }
  }, [city]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default Weather;
