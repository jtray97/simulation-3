import React from 'react'
import {Link} from 'react-router-dom'

//COMPONENT IMPORTS
import Dashboard from './Dashboard'
import Post from './Post'
import Auth from './Auth'

export default function Nav (){
    if (window.location.pathname !== '/'){
        return(
            <div className="nav">
                <Link to ={Dashboard}><button>Home</button></Link>
                <Link to ={Post}><button>New Post</button></Link>
                <Link to ={Auth}><button>Logout</button></Link>
            </div>
        )

    }else{
        return null
    }
}
