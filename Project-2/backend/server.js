const app = require('./src/app')
const dbconnect = require('./src/config/database')

require('dotenv').config()

dbconnect()

app.listen(3000,()=>{
  console.log("server is start")
})