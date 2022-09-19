const express = require("express")
const nodemailer = require("nodemailer")
const router = express.Router()
const {success, error} = require("../../network/response")
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

router.post("/", (req, res)=>{
    console.log("here we send the message");
    const {user, pass, message} = req.body
    console.log(req.body);
    const transporter  = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user,
            pass
        }
    })
    
    const mail_options = {
        from:message.author,
        to:message.destiny,
        subject:message.title,
        text: message.body
    }
    console.log(mail_options);

    transporter.sendMail(mail_options, (error, info)=>{
        return new Promise((resolve, reject)=>{
            if(error){
                reject(error)
            }else{
                resolve(info.response)
            }
        })
    })
})

module.exports = router