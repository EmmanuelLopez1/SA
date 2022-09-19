const store = require('./store')

const new_chat = (users)=>{
    return new Promise((resolve, reject)=>{
        if(users.length < 2){
            reject('debe haber al menos 2 usuarios en el chat')
        }
        users = {users, date: new Date()}
        store.add(users)
            .then(data=>resolve(data))
            .catch(err=>reject(err))
    })
}

const list_chat = (id)=>{
    return new Promise((resolve, reject)=>{
        store.list(id)
            .then(chats=>resolve(chats))
            .catch(err=>{reject(err)})
    })
}


module.exports = {
    new_chat,
    list_chat
}