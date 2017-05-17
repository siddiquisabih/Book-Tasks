import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/Signup" className="btn btn-danger">Register</Link>
        <Link to="/Login" className="btn btn-primary">Login</Link><br/>
        {/*<Link to="/Donor">Donor</Link>*/}
        
     {this.props.children}

      </div>
    );
  }
}

export default App;
