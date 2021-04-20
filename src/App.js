import React , {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import SavedNews from './components/pages/SavedNews'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';
import Navbar from './components/layout/Navbar'
import NewsState from './context/news/NewsState'
import AuthState from './context/auth/AuthState'

function App() {
  return (
    <AuthState>
    <NewsState>
    <Router>
      <Fragment>
        <Navbar/>
        <div className = 'container'>
          <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/saved' component = {SavedNews}/>
          <Route exact path = '/register' component = {Register}/>
          <Route exact path = '/login' component = {Login}/>
          </Switch>
        </div>
      </Fragment>
    </Router>
    </NewsState>
    </AuthState>
  );
}

export default App;
