const express = require('express')
const router = express.Router()
const controller = require('./controller')
const {success, error} = require('../../network/response')


router.get("/",(req, res)=>{
    controller.get_users(req.query.id)
        .then(data=>success(req, res, data, 200))
        .catch(err=>error(req, res, err, 500))
})

router.post("/",(req, res)=>{
    controller.add_user(req.body)
        .then(data=>success(req, res, data, 200))
        .catch(err=>error(req, res, err, 500))
})

module.exports = router