const express = require("express");
const app = express()
const port =  process.env.port||8080 
const router = express.Router("express")
const Book  = require("./model/List.js")
const cors = require("cors")
const mongoose = require('mongoose')
const Route = require("./api.js")
const { connection, Schem} = mongoose 
const bodyParser = require("body-parser")
const  mongoURI = "mongodb://localhost/Bookdb";
app.use(cors())
app.use(bodyParser.json())
app.use('/api',Route)
app.use((err,req,res,next)=> {
   res.status(422).send({error:err.message})
})
mongoose.connect(mongoURI,{ useNewUrlParser: true,useUnifiedTopology: true  } )
mongoose.Promise = global.Promise
mongoose.connection.once("open",function (){
    console.log("turned on")

}).on("error",function(error){
    console.log("mistake",error)
})





 // net start MongoDB
app.get("/",(req,res) => res.send("hello world "))






app.listen(process.env.port || 4000,() => console.log("listening on the good port ",process.env.port ))

