import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//COMPONENT IMPORTS
// import Dashboard from './Dashboard'
// import Post from './Post'
// import Auth from './Auth'

function Nav (props){
    // console.log(window.location)
    // console.log(props)
    // console.log(window.location.pathname !== '/', window.location.pathname)
    if (window.location.hash !== '#/'){
        // console.log('something')
        return(
            <div className="nav">
                {console.log(props)}
                <Link to ={'/dashboard'}><button>Home</button></Link>
                <Link to ={'/post'}><button>New Post</button></Link>
                <Link to ={'/'}><button>Logout</button></Link>
               <br/>
                username is: {props.username}
                <br/>
                avatar is: {props.avatar}
            </div>
        )

    }else{
        console.log('its false')
        return null
    }
}

function mapStateToProps(state){
    // console.log('this has run.')
  return {
        username:state.username,
        avatar:state.avatar,
  }
}
export default connect(mapStateToProps)(Nav)