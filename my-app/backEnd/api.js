const express = require("express");
const router = express.Router("express")
const mongoose = require('mongoose')
const Book = require("./model/List.js")
const BookAction = require("./model/Bookaction")
const { connection, Schem } = mongoose
// http://localhost:4000/api/help
router.get('/help', (req, res, next) => {

        body = Book.findOne().where("name").equals("cat").then((body) => {
                res.status(200).send(JSON.stringify(body))
        })
        console.log(res)
})

router.post('/help', (req, res, next) => {
        const user = Book.findOne({ name: req.body.name },
                function (err, docs) {
                        err ? res.send({ error: err }) :
                        docs ? res.send({boook:docs,Registered:true})
                        : Book.create(req.body).then((req)=> {res.send({data:req.body,Registered:false})})})
                });
















module.exports = router