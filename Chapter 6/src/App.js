import React, { Component } from 'react';
import './App.css';
import Login from './Login.js'
import Signup from './Signup.js'
// import Profile from './StudentProfile.js'

class App extends Component {
  render() {
    return (
      <div>
        
<Signup/>
<Login/>


      </div>
    );
  }
}

export default App;
