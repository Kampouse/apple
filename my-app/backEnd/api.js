const express = require("express");
const router = express.Router("express")
const mongoose = require('mongoose')
const Book = require("./model/List.js")
const BookAction = require("./model/Bookaction")
const { connection, Schem } = mongoose
// http://localhost:4000/api/help
router.get('/book/get', (req, res, next) => {
        const user = Book.findOne({ name: req.body.name },(req,book,err) => 
        {  book &&  res.send({book:book}) || res.send({book:false})}) 
 

        })
router.post('/book/post', (req, res, next) => {
        const user = Book.findOne({ name: req.body.name },
                function (err, docs) {
                        err ? res.send({ error: err }) :
                          docs ? res.send({boook:docs,Registered:true})
                           : Book.create(req.body).then((req)=> 
                        {res.send({data:req.body,Registered:false})})})
                });
router.post('/book/update', (req, res, next) => {
        // how to change a value in the data base 
        // might be better way to find the one...-+- r
        const user = Book.findOneAndUpdate({name:req.body.name}, 
        {year:2001}).then(res.send({value:req.body})) 
})


        
       















module.exports = router