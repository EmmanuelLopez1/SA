const express = require('express');
const router = express.Router();


router.get("/", (req, res)=>{
    res.send("user route working")
})

router.get("/user", (req, res)=>{
    res.send("smn we")
})

module.exports = router