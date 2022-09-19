const Model = require('./model')

const create_chat = async (users)=>{
    const new_chat = new Model(users)
    console.log(new_chat)
    return await new_chat.save()
}

const list_chats = async(id)=>{
    return new Promise((resolve, reject) =>{
        let filter_chat = {}
        if(id){
            filter_chat = {_id:id}
        }
        console.log(filter_chat)
        Model.find(filter_chat)
            .populate("users")
            .exec((err, user)=>{
                if(err){
                    console.log(err)
                    reject(err)
                }
                console.log(user);
                resolve(user)
            })
    })
}


module.exports = {
    add:create_chat,
    list:list_chats
}