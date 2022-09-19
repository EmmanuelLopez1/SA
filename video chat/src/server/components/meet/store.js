const Model = require("./model")

const add = (meet)=>{
    const new_meet = new Model(meet)
    
    return new Promise(async(resolve, reject)=>{
        try{
            const meet_created = await new_meet.save()
            console.log(meet_created)
            resolve({meet_created})
        }catch(err){    
            reject(err)
        }
    })
}

module.exports = {
    add,
}