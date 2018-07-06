import React, { Component } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom'
// import Dashboard from './Dashboard'
import {functionName} from '../ducktales/reducer'
import {connect} from 'react-redux'



// var nullified = false
class Auth extends Component {
    constructor() {
        super()
        // console.log(window.location)

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
            functionName(response[0])
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
                console.log(response, 'axios')

                if (response.data[0]) {
                // functionName(response[0].id, response[0].username, response[0].avatar)
                functionName(response.data[0])
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

export default connect(null,{functionName})(Auth)