import React, { Component } from 'react'

export default class RegisterForm extends Component {
    state={
        name: '',
        email: '',
        password: '',
    }

    handleNameChange = (event) =>{
        this.setState({name: event.target.value});
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
                <input type='text' onChage={this.handleNameChange} placeholder='name'/>
                <input type='text' onChage={this.handleEmailChange} placeholder='email' />
                <input type='text' onChage={this.handlePasswordChange} placeholder='password' />
                <button>Submit</button>
            </div>
        )
    }
}
