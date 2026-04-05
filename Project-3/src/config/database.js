const mongoose = require("mongoose");

function dbconnect(){
    mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
    .then(()=> console.log("DB Connected"))
    .catch((err)=> console.log(err));
}

module.exports = dbconnect;