const express = require("express")
const app = express()
const server = require('http').Server(app)
const path = require('path')

const config = require("./config")

const bodyParser = require('body-parser')
const socket = require('./socket')
const {connect} = require("./db")
const router = require("./network/routes")

// GLOBAL
global.root_path = path.join(__dirname, "../../")

// VARS
const db_uri = config.db_url

socket.connect(server)

// CONFIG
connect(db_uri)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ROUTES
router(app)

app.use('/' + config.public_route, express.static(path.join(global.root_path, "public")))
server.listen(config.port, ()=>{
    console.log("running on port ", config.port)
})