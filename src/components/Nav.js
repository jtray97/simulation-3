import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//COMPONENT IMPORTS
import Dashboard from './Dashboard'
import Post from './Post'
import Auth from './Auth'

function Nav (props){
    console.log(window.location.pathname)
    console.log(props)
    if (window.location.pathname !== '/'){
        return(
            <div className="nav">
            {console.log(window.location.pathname)}
                <Link to ={'/dashboard'}><button>Home</button></Link>
                <Link to ={'/post'}><button>New Post</button></Link>
                <Link to ={Auth}><button>Logout</button></Link>
            </div>
        )

    }else if (window.location.pathname ==='/'){
        return null
    }
}

function mapStateToProps(state){
    console.log('this has run.')
  return {
        username:state.username,
        avatar:state.avatar,
  }
}
export default connect(mapStateToProps)(Nav)