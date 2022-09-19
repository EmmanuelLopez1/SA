const store = require("./store")
const bcrypt = require('bcrypt');
const {Schema_register, Schema_login} = require("./schema")

const get_user = (params)=>{
    return new Promise((resolve, reject)=>{
        if(!params || params === ""){
            return reject(params)  
        }
        store.get(params)
            .then(res=>{
              resolve(res)  
            })
            .catch(err=>{
                reject(err)
            })
    })
}

const register = (user) =>{
    return new Promise(async (resolve, reject)=>{

        // VALIDATE DATA SENDED BY USER
        const {error} = Schema_register.validate(user)
        if(error){
            reject({message: error.details[0].message})
        }else{

            // ENCRYPT THE PASSWORD
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(user.password, salt)

            // CREATE A NEW USER
            user = {
                ...user,
                date:new Date(),
                password
            }
            // STORE USER
            store.add(user)
                .then(user=>{
                    resolve(user)
                })
                .catch(err=>{
                    reject(err.errors)
                })
        }
    })
}

const logIn = (user) =>{
    return new Promise((resolve, reject)=>{
        const {error} = Schema_login.validate(user)
        if(error){
            reject({ error: error.details[0].message })
        }else{
            store.logIn(user)
                .then(res=>{
                    resolve(res)
                })
                .catch(err=>{
                    reject(err)
                })
        }
    })

}

module.exports = {
    get_user,
    register,
    logIn
}
