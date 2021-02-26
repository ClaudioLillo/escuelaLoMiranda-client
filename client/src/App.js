import './App.css';
import React from 'react'
import Home from './components/home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Register from './components/register/Register'


function App() {
  return (
    <Router>
      <Route path="/" component={Home}/>
      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
      
    </Router>
  )
}

export default App;
