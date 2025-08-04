import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Widget.css';

const StockWidget = () => {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    axios.get('https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=tOWvoFmmwtcPtrRKeVEWDBLDTAgGkyi9')
      .then(res => setStock(res.data[0]))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="widget stock">
      <h3>Stock - AAPL</h3>
      {stock ? (
        <p>Price: ${stock.price}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockWidget;