const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mySchema = new Schema({
    id:Schema.ObjectId,
        date:{
        required:true,
        type:Date,
    },
    participants:{
        required:false,
        type:[
            {
                type:String,
            }
        ],
    },
    host:{
        required:true,
        type:Schema.ObjectId,
        ref:"User"
    },
    admins:[
        {
            required:false,
            type:Schema.ObjectId,
            ref:"User"
        }
    ]
})

const model = mongoose.model("Meet", mySchema)
module.exports = model