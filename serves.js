const express = require('express')
const app = express()

app.use(express.json())

const notes = []

app.get('/', (req, res) => {
  console.log(notes)
  res.json(notes)
})


app.post('/', (req, res) => {
  console.log(req.body)
  notes.push(req.body)
  res.json({
    message: "Note added successfully",
    notes: notes
  })
})

app.listen(3000, () => {
  console.log("server running on port 3000")
})
