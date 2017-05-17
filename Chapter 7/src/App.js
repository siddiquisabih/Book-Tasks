import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
this.checker = this.checker.bind(this)
this.state ={selectedValue : "React"}
  } 
  
  checker(i){

this.setState({

selectedValue : i.target.value


})



  }
  
  
  
  render() {
    return (

      <select  onChange ={this.checker}
      value= {this.state.selectedValue}
      >
      <option>node</option>
      <option>React</option>
      <option>JQuery</option>
      
      
      
      
      </select>
    );
  }
}

export default App;
