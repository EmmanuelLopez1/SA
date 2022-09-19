const express = require('express')
const router = express.Router()
const {success, error} = require('../../network/response')
const controller = require('./controller')

router.get("/", (req, res)=>{
    controller.list_chat(req.query.id)
        .then(chats=>success(req, res, chats, 200))
        .catch(err=>error(req, res, err, 500))
})

router.post('/', (req, res)=>{
    controller.new_chat(req.body.users)
        .then(data=>success(req, res, data, 200))
        .catch(err=>error(req, res, err, 500))
})


module.exports = router