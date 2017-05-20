import React, { Component } from 'react';
class LinkClass extends Component{


render(){
return <div>
<a href={'/' + this.props.data}>
{this.props.data} </a>
<br/>

 </div>
}
}
export default LinkClass;