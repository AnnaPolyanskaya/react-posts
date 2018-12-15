import React, { Component } from 'react'

export default class LoginForm extends Component {
    state={
        email: '',
        password: '',
    }
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    } 
    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    } 

    render() {
        return (
            <div>
                <input type='text' onChage={this.handleEmailChange} placeholder='email' />
                <input type='text' onChage={this.handlePasswordChange} placeholder='password' />
                <button>Submit</button>
            </div>
        )
    }
}
