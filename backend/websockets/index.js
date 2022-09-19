const express  = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.static('public'))

io.on('connection', (socket)=>{
    console.log('nuevo cliente conectado');
    socket.emit('message', 'Bienvenido!')
})

server.listen(8080,()=>{
    console.log('server inited in http://localhost:8080')
})