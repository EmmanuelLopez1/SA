const express = require("express")
const app = express()
const server = require("http").Server(app)
const path = require("path")
const config = require("./config")
const bodyParser = require("body-parser")

// const socket = require("socket")
const {connect} = require("./db")
const router = require("./network/routes")

//VARS
const db_uri = config.db_uri

connect(db_uri)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// ROUTES
router(app)
server.listen(config.port,()=>{
    console.log(`server listening on ${config.host}:${config.port}`);
})