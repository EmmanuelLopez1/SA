const Joi = require('joi');
const name = {
    min:4,
    max:255
}
const email = {
    min:8,
    max:255
}
const password = {
    min:8,
    max:1024
}

const Schema_register = Joi.object({
    name:Joi.string().min(name.min).max(name.max).required(),
    email:Joi.string().min(email.min).max(email.max).required().email(),
    password:Joi.string().min(password.min).max(password.max).required()
})

const Schema_login = Joi.object({
    email:Joi.string().min(email.min).max(email.max).required(),
    password:Joi.string().min(password.min).max(password.max).required()
})

module.exports = {
    Schema_register,
    Schema_login
}