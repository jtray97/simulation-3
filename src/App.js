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
//OTHER IMPORTS
import routes from './routes/routes'


class App extends Component {
  render() {
    return (
<HashRouter>



<div className="App">
     {routes}
      <Nav/>
      
      
</div>

</HashRouter>
    );
  }
}

export default App;
