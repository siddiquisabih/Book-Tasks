import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from'./Signup.js'
import Login from './Login'
import './index.css';
import { Router , Route , browserHistory } from 'react-router'
import Doner from './Doner.js';

ReactDOM.render(

    <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/Signup" component={Signup}/>
      
    <Route path="/Donor" component={Doner} />
    <Route path="/Login" component={Login} />
    

    </Router>
  ,
  document.getElementById('root')
);
