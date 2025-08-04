import React, { useState } from 'react';
import WeatherWidget from './WeatherWidget';
import NewsWidget from './NewsWidget';
import StockWidget from './StockWidget';
import './Dashboard.css';

const Dashboard = () => {
  const [widgets, setWidgets] = useState([]);

  const addWidget = (type) => {
    setWidgets([...widgets, type]);
  };

  return (
    <div className="dashboard">
      <h2>Your Dashboard</h2>
      <div className="widget-container">
        {widgets.map((widget, index) => {
          if (widget === 'weather') return <WeatherWidget key={index} />;
          if (widget === 'news') return <NewsWidget key={index} />;
          if (widget === 'stocks') return <StockWidget key={index} />;
          return null;
        })}
      </div>
      <div className="widget-controls">
        <button onClick={() => addWidget('weather')}>Add Weather</button>
        <button onClick={() => addWidget('news')}>Add News</button>
        <button onClick={() => addWidget('stocks')}>Add Stocks</button>
      </div>
    </div>
  );
};

export default Dashboard;