import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(response => setData(response.message))
  }, []);

  return (
    <div className="App">
      {
        !data ? "Loading..." : data
      }
    </div>
  );
}

export default App;
