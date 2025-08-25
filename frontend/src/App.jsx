import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import store from './redux/redux-store';

import './App.css';

import LoginContainer from './components/Login/LoginContainer';
import RegistrationContainer from './components/Registration/RegistrationContainer';
import EditorContainer from './components/Editor/EditorContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Menu from './components/Menu/Menu';
import ProfileContainer from './components/Profile/ProfileContainer';
import SubscribersContainer from './components/Subscribers/SubscribersContainer';
import PostsContainer from './components/Posts/PostsContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import Music from './components/Music/Music';
import Footer from './components/Footer/Footer';

import { getIsAuth } from './redux/selectors/auth-selectors';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Navigate to={"/profile"} />} />

            <Route path='/login' element={<LoginContainer />} />

            <Route path='/registration' element={<RegistrationContainer />} />

            <Route path='/edit' element={<EditorContainer />} />

            <Route path='/profile/:id?' element={<MainContainer><ProfileContainer /></MainContainer>} />

            <Route exact path='/subscribers' element={<MainContainer><SubscribersContainer /></MainContainer>} />

            <Route path='/posts' element={<MainContainer><PostsContainer /></MainContainer>} />

            <Route path='/messages/*' element={<MainContainer><MessagesContainer /></MainContainer>} />

            <Route path='/music' element={<MainContainer><Music /></MainContainer>} />

            <Route path='*' element={<MainContainer><div>Error 404</div></MainContainer>} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

const Main = ({ children, isAuth }) => {
  if (!isAuth) {
    return (
      <Navigate to={'/login'} />
    )
  }
  
  return (
    <div>
      <HeaderContainer />
      <Menu />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

let mapStateToProps = (state) => {
    return ({
        isAuth: getIsAuth(state)
    })
};

const MainContainer = connect(mapStateToProps, {})(Main);

export default App;
