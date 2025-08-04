import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Widget.css';

const NewsWidget = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://newsdata.io/api/1/news?apikey=pub_5b0f0420a5014fab98a54d93393d9519&q=technology&language=en')
      .then(res => setArticles(res.data.results.slice(0, 3)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="widget news">
      <h3>News</h3>
      {articles.map((item, i) => (
        <div key={i}>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsWidget;