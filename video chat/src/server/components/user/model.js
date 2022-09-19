const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mySchema = new Schema({
    id:Schema.ObjectId,
    name:{
        type:String,
        required:true,
    },
    profile_img:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})

const model = mongoose.model("User", mySchema)
module.exports = model