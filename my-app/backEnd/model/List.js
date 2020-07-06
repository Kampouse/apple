const mongoose = require("mongoose")
const  Schema = mongoose.Schema;


const BookShema = new Schema ({
 name : {
     type:String,
     required:[true,"name require"]
 },year: {
     type:String,
     required: [true,"year require"]


 },avaible: {
     type: Boolean,
     default:true
 },
 

})
const Book = mongoose.model("book",BookShema);
module.exports = Book