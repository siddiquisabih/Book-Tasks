import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Whoops404 from './Whoops404.js'
import {Router , Route , hashHistory} from 'react-router'

ReactDOM.render(

<Router history={hashHistory}>
<Route path="/" component ={App}/>
<Route path="*" component={Whoops404}/>
</Router>
  
  
  ,
  document.getElementById('root')
);
