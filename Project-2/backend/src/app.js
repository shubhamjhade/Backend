const express = require('express')
const modelnote = require('./models/note.model')
const app = express()
const cors = require('cors')
const path = require('path')
app.use(express.json())
app.use(cors())
app.use(express.static('./public'))
app.get('/fatch',async(req,res)=>{
  const note = await modelnote.find()

  res.status(200).json({
    message:"fatched",
    note
  })
})

app.post('/post', async(req,res)=>{
const {title,description} = req.body

const note = await modelnote.create({
  title,description
})

res.status(201).json({
  message:"saved ",
  note
})

})

app.patch('/note/:id', async(req,res)=>{
const id = req.params.id
const {description} = req.body
 await modelnote.findByIdAndUpdate(id ,{description})

 res.status(200).json({
  message:"updated"
 })
})

app.delete('/delete/:id', async(req,res)=>{
  const id = req.params.id
 
  await modelnote.findByIdAndDelete(id)
  
res.status(200).json({
message:"deleted"
})

})

module.exports = app