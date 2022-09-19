const express = require("express")
const router = express.Router()
const controller = require("./controller")
const {error, success} = require("../../network/response")

router.post("/", (req, res)=>{
    controller.new_call(req.body)
        .then(response=>{
            success(req, res, response)
        }).catch(err=>{ 
            error(req, res, err)
        })
})

module.exports = router