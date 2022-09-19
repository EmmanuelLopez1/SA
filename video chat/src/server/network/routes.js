const user = require("../components/user/network")
const meet = require("../components/meet/network")
const message = require("../components/message/messages")

const routes = (server)=>{
    server.use("/user", user)
    server.use("/meet", meet)
    server.use("/message", message)
}

module.exports = routes