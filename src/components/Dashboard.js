import React, {Component} from 'react'

class Dashboard extends Component{
 componentDidMount(){
     window.location.pathname = '/dashboard'
 }
    render(){
        return(

<div className="dashboard">Dashboard</div>

        )
    }
}

export default Dashboard