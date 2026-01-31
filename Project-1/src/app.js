const express = require('express')
const app = express()

app.use(express.json())

const note = []

app.get("/",(req,res)=>{
res.send(note)
})

app.post('/',(req,res)=>{
 console.log(req.body)
 note.push(req.body)
 res.send("completed")
})

app.delete('/:index',(req,res)=>{
delete note[req.params.index]
  res.send("deleted")
})

 app.patch('/:index',(req,res)=>{
  note[req.params.index].description2 = req.body.description2
  res.send("patched")
 })

module.exports = app
