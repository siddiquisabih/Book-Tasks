import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
super(props)
this.state = {opacity : false} 
  }

showAndHide(){  
  const {offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this)
  this.setState({
opacity : !this.state.opacity,
top,left

  })
}

  render() {

    return (
      <div>

<h1>ToolTip</h1>
      </div>
    );
  }
}

export default App;
