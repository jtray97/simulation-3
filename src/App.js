//Basic imports
import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
//Component imports
import Auth from './components/Auth';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Post from './components/Post';

//CSS imports
import './App.css';



class App extends Component {
  render() {
    return (
<HashRouter>



<div className="App">
      <Auth/>
      <Dashboard/>
      <Form/>
      <Nav/>
      <Post/>
      
</div>

</HashRouter>
    );
  }
}

export default App;
