import './App.css';
import React from 'react'
import Home from './components/home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Register from './components/register/Register'
import AdminPanel from './components/adminPanel/AdminPanel'


function App() {
  return (
    <Router>
      <Route path="/" component={Home}/>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/admin" component={AdminPanel} />
      </Switch>
      
    </Router>
  )
}

export default App;
