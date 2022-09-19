const Joi = require("joi")

const Schema_message = Joi.object({
    title: Joi.string().min(10).required(),
    body: Joi.string().min(10).required(),
    author: Joi.string().email(),
    destiny: Joi.string().email().required()
})