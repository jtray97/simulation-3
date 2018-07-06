//REGULAR IMPORTS
import {Switch, Route} from 'react-router-dom'
import React from 'react'
//COMPONENT IMPORTS

import Auth from '../components/Auth'
import Dashboard from '../components/Dashboard'
import Form from '../components/Form'
// import Nav from '../components/Nav'
import Post from '../components/Post'

//ROUTES AND STUFF:

    export default <Switch>
        <Route exact path = '/' component = {Auth}/>
        <Route path = '/dashboard' component = {Dashboard}/>
        <Route path = '/post/:postid' component = {Post}/>
        <Route path = '/new' component = {Form}/>

    </Switch>