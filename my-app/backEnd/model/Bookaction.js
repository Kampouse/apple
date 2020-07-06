const Book  = require("./List.js")
const express = require("express");
const router = express.Router("express")
const app = express()
const mongoose = require('mongoose')
function newBook(req) {
   
    const user = Book.findOne({ name: req.body.name }, 
        function(err,docs,res) {
    err ? res.send({error:err}): 
            docs ?console.log(docs)
                     : Book.create(req.body).then((req) => 
                        {express.res.send(JSON.stringify(req.body))}
            )})
            }




   module.exports  = newBook