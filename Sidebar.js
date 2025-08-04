import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Widgets</h2>
      <ul>
        <li>Weather</li>
        <li>News</li>
        <li>Stocks</li>
      </ul>
    </div>
  );
};

export default Sidebar;