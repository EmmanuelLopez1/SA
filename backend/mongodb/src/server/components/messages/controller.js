const store = require("./store")
const socket = require('../../socket').socket
const config = require("../../config")
const add_message = (user, message, chat, file)=>{
    return new Promise(async(resolve, reject)=>{
        if(!user || !message, !chat){
            reject("El usuario, contraseña o el chat estan vacios")
        }

        let fileUrl = ""
        if(file){
            fileUrl = `${config.host}:${config.port}/${config.public_route}/files/` + file.filename
        }

        try{
            const new_message = {
                user,
                message,
                date: new Date(),
                chat,
                file:fileUrl
            }
            await store.add(new_message)
            socket.io.emit('message', new_message)
            resolve("mensaje añadido con exito")
        }catch(err){
            console.log('un error muy cabron acaba de suceder')
            console.log(err);
            reject(err)
        }
        // console.log(new_message);
    })
}

const get_messages = (filter_mesages)=>{
    return new Promise((resolve, reject)=>{
        resolve(store.list(filter_mesages))
    })
}

const update_message = (id, message)=>{
    return new Promise(async (resolve, reject)=>{
        if(!id || !message){
            reject("Invalid data")
        }
        const result = await store.update_text(id, message)
        resolve(result)
    })
}

const delete_message = (id)=>{
    return new Promise(async (resolve, reject)=>{
        console.log(id);
        if(!id){
            reject("ningun id especificado")
        }
        await store.delete(id)
            .then((data)=>{
                if(data.deletedCount > 0){
                    resolve({data, message:"mensaje eliminado exitosamente"})
                }
                reject(data)
            })
            .catch((e)=>{
                reject(e)
            })
    })
}

module.exports = {
    add_message,
    get_messages,
    update_message,
    delete_message
}