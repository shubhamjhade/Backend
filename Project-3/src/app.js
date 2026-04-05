const express = require('express')
const app = express()

const user = require('./models/user.model')

app.use(express.json())

app.get("/hello",(req,res)=>{
  res.send("hello")
})

app.post("/hello", async (req,res)=>{
  const { name } = req.body

  const users = await user.create({
    name
  })
  
  res.status(201).json({
    message:"saved",
    users
  })
  console.log(users)

})

module.exports = app