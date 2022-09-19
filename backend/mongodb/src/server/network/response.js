exports.success = (req, res, message, status)=>{
    res.status(status).send({
        error: "",
        message: message
    })
}
exports.error = (req, res, message, status)=>{
    res.status(status).send({
        error: message,
        message: ""
    })
}