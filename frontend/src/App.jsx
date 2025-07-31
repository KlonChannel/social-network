import React from 'react';

import './App.css';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

const App = () => {
  return (
    <div className="App">
      <main>
        <Registration />
      </main>
    </div>
  );
}

export default App;
