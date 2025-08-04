import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Widget.css';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=51.05&longitude=-114.07&current_weather=true')
      .then(res => setWeather(res.data.current_weather))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="widget weather">
      <h3>Weather</h3>
      {weather ? (
        <p>Temperature: {weather.temperature}°C<br />Wind: {weather.windspeed} km/h</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherWidget;