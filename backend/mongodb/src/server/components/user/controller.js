const store = require('./store')

const get_users = (id)=>{
    return new Promise((resolve, reject)=>{
        store.users(id)
            .then(data=>resolve(data))
            .catch(err=>reject(err))
    })
}

const add_user = (user)=>{
    return new Promise(async(resolve, reject)=>{
        const {
            name,
            lastname,
            age
        } = user
        if(!name || !age || !lastname){
            reject('datos insuficientes')
        }
        
        const new_user = {
            name,
            lastname,
            age,
            date:new Date()
        }
        console.log(new_user);
        
        await store.add(new_user)
        resolve('usuario creado con exito')
    })
}


module.exports = {
    get_users,
    add_user
}