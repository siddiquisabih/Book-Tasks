import React, { Component } from 'react';
import * as firebase from 'firebase'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.signup = this.signup.bind(this)
    }

    signup() {

        let email = this.refs.email.value;
        let password = this.refs.pass.value;
        let auth = firebase.auth();
        let signup = auth.createUserWithEmailAndPassword(email, password).then(

            console.log(signup)


        )
    }



    render() {
        return (

            <div>

                <input  ref="email" type="email" placeholder="Email" /><br />
                <input  type="password" ref="pass" placeholder="password" /><br />
                <button onClick={this.signup} className="btn btn-primary">Signup</button>
            </div>



        );
    }
}

export default Signup;