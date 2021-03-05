import './App.css';
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Home from './components/home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Register from './components/register/Register'
import Contents from './components/contents/Contents'
import Login from './components/login/Login'
import MainPanel from './components/mainPanel/MainPanel'

import {getUsers, seed} from './redux/actions/user'
import {getCourses} from './redux/actions/course'


function App() {
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(seed())
    dispatch(getUsers())
    dispatch(getCourses())
  },[dispatch])

  return (
    <Router>
      <Route path="/" component={Home}/>
      <Switch>
          <Route  path="/register" component={Register} />
          <Route path="/panel" component={MainPanel} />
          <Route path="/contents" component={Contents}/>
          <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  )
}

export default App;
