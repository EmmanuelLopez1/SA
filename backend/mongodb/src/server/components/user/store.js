const Model = require('./model')

const users = async (id) => {
    let user = {}
    id !== undefined ? user = { _id: id } : user = {}
    return await Model.find(user)
}

const create_user = async (user) => {
    let new_user = new Model(user)
    return await new_user.save()
}

module.exports = {
    users,
    add: create_user,
}