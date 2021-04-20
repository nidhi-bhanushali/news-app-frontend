import React , {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <div className = 'container'>
          <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/about' component = {About}/>
          <Route exact path = '/register' component = {Register}/>
          <Route exact path = '/login' component = {Login}/>
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
