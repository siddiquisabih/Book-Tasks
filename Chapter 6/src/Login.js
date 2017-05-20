import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'



// Initialize Firebase
var config = {
  apiKey: "AIzaSyBDeWHGTIVZZXACv9c9i7dCtpT_SxezRvw",
  authDomain: "campus-recruitment-syste-b9d8a.firebaseapp.com",
  databaseURL: "https://campus-recruitment-syste-b9d8a.firebaseio.com",
  storageBucket: "campus-recruitment-syste-b9d8a.appspot.com",
  messagingSenderId: "1064020601165"
};
firebase.initializeApp(config)



class Login extends Component {
  constructor() {
    super()
    this.login = this.login.bind(this)

  }


  //login form k liye hai yai
  login() {

    const email = this.refs.email.value;
    const pass = this.refs.pass.value;

    const auth = firebase.auth();
    const signin = auth.signInWithEmailAndPassword(email, pass).then(
console.log(signin)

    )

    
  }



  render() {
    return (

      <div className="App">

        <input  ref="email" type="email" placeholder="Email" /><br />
        <input  type="password" ref="pass" placeholder="password" /><br />
        <button onClick={this.login} id="btnLogin" className="btn btn-primary">Login</button><br />
      </div>);


  }
}

export default Login;
