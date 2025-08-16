import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/redux-store';

import './App.css';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import ProfileContainer from './components/Profile/ProfileContainer';
import SubscribersContainer from './components/Subscribers/SubscribersContainer';
import Posts from './components/Posts/Posts';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Navigate to={"/profile"} />} />

            <Route path='/login' element={<Login />} />

            <Route path='/registration' element={<Registration />} />

            <Route path='/profile' element={<Main><ProfileContainer /></Main>} />

            <Route exact path='/subscribers' element={<Main><SubscribersContainer /></Main>} />

            <Route path='/posts' element={<Main><Posts /></Main>} />

            <Route path='/messages' element={<Main><Messages /></Main>} />

            <Route path='/music' element={<Main><Music /></Main>} />

            <Route path='*' element={<Main><div>Error 404</div></Main>} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <Menu />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default App;
