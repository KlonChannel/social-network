import React from 'react';

import './App.css';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Subscribers from './components/Subscribers/Subscribers';
import Posts from './components/Posts/Posts';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <Menu />
      
      <main>
        <Music />
      </main>

      <Footer />
    </div>
  );
}

export default App;
