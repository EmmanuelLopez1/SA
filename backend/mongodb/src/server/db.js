const db = require("mongoose")
db.promise = global.Promise
const connect = (uri)=>{
    db.connect(uri, {
        useNewUrlParser:true,
        dbName:"Chat"
    })
}

module.exports = {connect}