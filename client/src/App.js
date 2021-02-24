import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Home from './components/home/Home'


function App() {
  const [msg, setMsg] = useState({})

  useEffect(()=>{
    axios.get('https://apilomiranda.herokuapp.com/')
    .then((res)=>res.data)
    .then(data=>{
      setMsg(data)
    })
  },[])

  if(msg){
    console.log(msg)
  }
  return (
    <div className="App">
     <Home/>
     
     <p className="notice">24-02-2021. Sitio en mantención por migración de servidores</p>
    </div>
  );
}

export default App;
