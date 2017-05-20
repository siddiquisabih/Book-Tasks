import React, { Component } from 'react';
import * as firebase from 'firebase';



class Profile extends Component {
   
   
   sendData(){

let name = this.refs.name.value;
let email = this.refs.email.value;
let number = this.refs.number.value;
   }
   
   
   
    render() {
        return (

            <div>


<form >
<input type="text" placeholder="Enter Name" ref="name"/><br/>
<input type="text" placeholder="Enter Email" ref="email"/><br/>
<input type="text" placeholder="Enter Contact Number" ref="number"/><br/>
<input type="submit" value="click me"/>
</form>

            </div>



        )
    }
}
export default Profile;