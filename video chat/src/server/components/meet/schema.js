const Joi = require('joi');

const Schema_meet = Joi.object({
    date: Joi.date().greater("now").required(),
    participants: Joi.array().items(Joi.string().email()).required(),
    admins: Joi.array().required(),
    host:Joi.string().required()
})

module.exports = {
    Schema_meet
}