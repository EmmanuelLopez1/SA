const mongoose = require("mongoose")

const Schema = mongoose.Schema

const mySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    date:Date
})

const model = mongoose.model("User", mySchema)
module.exports = model