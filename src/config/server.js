const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const AallowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(AallowCors)

server.listen(port, function(){
    console.log(`O servidor subiu na porta ${port}.`)
})
module.exports = server