const Model = require("./model")

// DATABASE CONFIG

console.log("db conectada con exito");

const add_message = async (message) => {
    const new_message = new Model(message)
    return new_message.save()
}

const get_message =(filter_messages) => {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (filter_messages) {
            filter = { user: filter_messages }
        }
        Model.find(filter)
            .populate('user')
            .exec((err, populated)=>{
                if(err){
                    // console.log('ocurrion un error')
                    reject(err)
                }
                resolve(populated)
            })
    })
}

const update_text = async (id, message) => {
    let found_message = await Model.findOne({
        _id: id
    })
    found_message.message = message
    console.log(found_message);
    return await found_message.save()
}

const delete_message = async (id) => {
    return await Model.deleteOne({ _id: id })
}

module.exports = {
    add: add_message,
    list: get_message,
    update_text,
    delete: delete_message
}