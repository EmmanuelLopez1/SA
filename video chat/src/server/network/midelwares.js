const jwt = require('jsonwebtoken')
const config = require("../config")
const { success, error } = require("./response")

const verify_token = (req, res, next) => {
    const token = req.header("auth-token")
    if (!token) {
        return error(req, res, { message: "no autorizado", status: 401 })
    } else {
        const verified = jwt.verify(token, config.token_secret)
        console.log(verified)
        if (verified) {
            next()
        } else {
            return error(req, res, { message: "no autorizado", status: 401 })
        }
    }
}

module.exports = {
    verify_token
}