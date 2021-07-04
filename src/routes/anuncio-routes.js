const express = require('express')
const router = express.Router()
const controller = require('../controller/anuncio-controller')

/**
@route GET anuncios por cliente
@desc Retornar todos os anuncios do cliente
@acess Public
@endpoint http://localhost:porta/anuncios/cliente
**/
router.get('/cliente', controller.getByCliente)

/**
@route GET anuncios por data
@desc Retornar todos os anuncios de uma data
@acess Public
@endpoint http://localhost:porta/anuncios/data
**/
router.get('/data', controller.getByData)

/**
@route POST anuncio
@desc Cria um novo anuncio na lista
@access Public 
@endpoint http://localhost:porta/anuncios/criar
**/
router.post('/criar', controller.addAnuncio)



module.exports = router