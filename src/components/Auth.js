import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

var nullified = false
class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUpdate = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        // console.log(this.state)
    }
    handleRegister = () => {
        axios.post('/api/register', {
            username: this.state.username, password: this.state.password,
            avatar: null
        }).then(response => {
            console.log(response)
            this.props.history.push('/dashboard')
        })
            .catch(err => console.log(err))
    }
    handleLogin = () => {
        if (this.state.username && this.state.password) {
            axios.post('/api/login', {
                username: this.state.username,
                password: this.state.password
            }).then(response => {
                console.log(response.data, 'axios')
                if (response.data !== []) {
                    console.log(response.data[0].username)
                    this.props.history.push('/dashboard')
                } else { console.log('shut up') }


            })
        } else { console.log('input something please') }
    }
    render() {
        return (

            <div className="auth">
                <hr />
                <input type="text" id='username' placeholder="username" onChange={(event) => { this.handleUpdate(event) }} />
                <input type="text" id='password' placeholder="password" onChange={event => { this.handleUpdate(event) }} />
                <br />
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
                <hr />
                {/* {nullified?<div>"User is not found"</div>:null} */}
            </div>

        )
    }
}

export default Auth