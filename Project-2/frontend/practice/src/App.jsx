import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
const App = () => {
const [first, setfirst] = useState([])

  function fetch(){
      axios.get('http://localhost:3000/fatch')
      .then(res=>{
        setfirst(res.data.note)
      })
  }

  function handlesubmit(e){
    e.preventDefault()

   const {title,description} = e.target.elements
   console.log(title.value,description.value)
   axios.post('http://localhost:3000/post',{
    title : title.value,
    description:description.value
   }).then(res=>{
     console.log(res.data)
     fetch()
   })
  }

function deletenote(id){
  axios.delete('http://localhost:3000/delete/'+id)
  .then(res=>{
    console.log(res.data)
    fetch()
  })
}


  useEffect(()=>{
  fetch()
  },[])
    
   return (<>
      <form className='formcreated' onSubmit={handlesubmit}>
    <input type="text" name='title'placeholder='enter the title' />
    <input type="text" name='description' placeholder='enter the description' />
    <button type="submit">submit</button>
      </form>

    <div>{first.map(item=>{
      return <div className='box'>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <button className='btn' onClick={()=>{
          deletenote(item._id)
        }}>delete</button>
      </div>
    })}</div>
    </>
  )
}

export default App