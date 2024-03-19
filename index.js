require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()

server.use(express.json())
server.use(cors())

server.use('*', (req, res) => {
    res.send(`<h1>WORKING SITE</h1>`)
})

console.log(process.env.PORT, process.env.NODE_ENV)