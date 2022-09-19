const express = require('express');
const multer = require("multer")
const path = require("path")
const router = express.Router();
const controller = require("./controller")
const {success, error} = require("../../network/response");

const public_path = path.join(__dirname + "../../../../../public")

const upload = multer({
    "dest": path.join(public_path + "/files")
})

router.get("/", (req, res)=>{
    const filter_mesages = req.query.user
    controller.get_messages(filter_mesages)
        .then(resolve =>{
            success(req, res, resolve, 200)
        })
        .catch(err=>{
            error(req, res, err, 500)
        })

    // res.send("baby te quiero wo")
})

router.post("/", upload.single("file"), (req, res)=>{
    console.log(public_path)
    controller.add_message(req.body.user, req.body.message, req.body.chat, req.file)
        .then(response=>{
            success(req, res, response, 200)
        })
        .catch((err)=>{
            error(req, res, err, 500)
        })
    // res.send("message saved")
})

router.patch("/:id", (req, res)=>{
    console.log(req.params.id);
    controller.update_message(req.params.id, req.body.message)
        .then(data=>{
            success(req, res, data, 200)
        })
        .catch(err=>{
            error(req, res, err, 500)
        })
})

router.delete("/:id", (req, res)=>{
    controller.delete_message(req.params.id)
        .then(data=>{
            success(req, res, data, 200)
        })
        .catch(err=>{
            console.log(err);
            error(req, res, err, 500)
        })
})

module.exports = router