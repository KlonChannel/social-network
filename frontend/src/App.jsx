import React from 'react';

import './App.css';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <Menu />
      
      <main>
        <Profile />
      </main>
    </div>
  );
}

export default App;
