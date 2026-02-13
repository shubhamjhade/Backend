import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
const App = () => {
const [first, setfirst] = useState([])

  function fetch(){
      axios.get('http://localhost:3000/')
      .then(res=>{
        setfirst(res.data.note)
      })
  }

  useEffect(()=>{
  fetch()
  },[])
    
   return (
    <div>{first.map(item=>{
      return <div className='box'>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>
    })}</div>
  )
}

export default App