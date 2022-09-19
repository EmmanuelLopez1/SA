const Model = require("./model")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const config = require("../../config")

const get = async (params) => {
    let document = await Model.find({[params.key]:params.value}).exec()
    
    return new Promise((resolve, reject) => {
        if (document.length>0) {
            document = {
                ...document[0]._doc,
                password:""
            }
            resolve(document)
        } else {
            reject({ message: "didnt found", status: 404 })
        }
    })
}

const add = async (user) => {
    let new_user = new Model(user)
    const finded_user = await Model.find({ email: user.email }).exec()

    return new Promise(async (resolve, reject) => {
        if (finded_user.length > 0) {
            resolve({ message: "El usuario ya existe", status: 200 })
        } else if (finded_user.length === 0) {
            new_user = await new_user.save()
            resolve(new_user)
        } else {
            reject()
        }
    })
}

const logIn = async (user) => {
    let is_user_exists = await Model.find({ email: user.email })
    console.log(is_user_exists);
    console.log(user.password);

    return new Promise(async (resolve, reject) => {
        if (is_user_exists.length > 0) {
            const valid_password = await bcrypt.compare(user.password, is_user_exists[0].password)
            if (valid_password) {
                const token = jwt.sign({
                    name: is_user_exists.name,
                    id: is_user_exists.id
                }, config.token_secret)
                resolve({ message: "contraseña valida", status: 200, token })
            } else {
                reject({ message: "contraseña no valida", status: 401 })
            }
        } else {
            reject({ message: "Usuario no encontrado" })
        }
    })
}


module.exports = {
    get,
    add,
    logIn,
}