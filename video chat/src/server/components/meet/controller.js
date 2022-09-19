const store = require("./store")
const axios = require("axios")
const config = require("../../config")
const base_url = `${config.host}:${config.port}`
const {Schema_meet} = require("./schema")

// const Joi = require("joi")

const new_call = (meet)=>{
    return new Promise(async (resolve, reject)=>{
            const {error} = Schema_meet.validate(meet)
            if(error){
                return reject(error)
            }

        try{
            const new_meet = await store.add(meet)
            // resolve(new_meet)
            // SEND INVETE TO PARTICIPANTS
            meet.participants.forEach(email=>{
                console.log(`${base_url}/message`);
                // MESSAGE
                const message = {
                    title:"Invite to meeting",
                    body:`The meet will be ${meet.date}`,
                    author:"emmanuel.lopez@softwareallies.com",
                    destiny:email
                }
                axios({
                    method:"post",
                    url:`${base_url}/message`,
                    data:{
                        user:"emmanuel.lopez@softwareallies.com",
                        pass:"Alterego1",
                        message
                    }
                })
                .then(ms_res=>{
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
            })
        }catch(err){
            reject(err)
        }
    })
}

module.exports = {
    new_call
}