const express = require("express")
const router = express.Router()
const {verify_token} = require("../../network/midelwares")
const { success, error } = require("../../network/response")
const controller = require("./controller")

router.get("/", (req, res)=>{
    controller.get_user(req.query)
        .then(user=>{
            success(req, res, user)
        })
        .catch(err=>{
            error(req, res, err)
        })
})

router.post("/register", (req, res) => {
    controller.register(req.body)
        .then(user => {
            success(req, res, user)
        })
        .catch(err => {
            error(req, res, err)
        })
})

router.post("/login", (req, res) => {
    controller.logIn(req.body)
        .then(user => {
                res.header('auth-token', user.token)
                success(req, res, user)
        })
        .catch(err => {
            error(req, res, err)
        })
})

module.exports = router 