import React, { Component } from 'react';
import './App.css';
import LinkClass from './LinkClass.js'
class Menu extends Component {
  render() {
 
 const options = ["home " , "about us " , " contact"]
    return <div >
    {options.map(function(optns , i){
    return <div key={i}> <LinkClass data={optns}/> </div>
    }
      ) }

    </div>

  }}

export default Menu;