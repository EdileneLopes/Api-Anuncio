const express = require('express')
const app = express()
const db = require('./config/database')
const bodyParser = require('body-parser')

db.connect()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))  

const index = require('./routes/index')
const anuncios = require('./routes/anuncio-routes')

app.use("/", index)
app.use("/anuncios", anuncios)

module.exports = app 