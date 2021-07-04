const { response, request } = require("express")
const anunciosCollection = require('../model/anuncio-schema')

const addAnuncio = (request, response) => {
    const anuncioDoBody = request.body //pegando o que o usuário digitou
    const anuncio = new anunciosCollection(anuncioDoBody)
    anuncio.save((error) => {
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(201).json({

               mensagem: 'POST feito com sucesso',
                
            })
        }
    })
}


const getByCliente = (request, response) => {
    const nomeQuery = request.query

    anunciosCollection.findOne(nomeQuery, (error, anuncio) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: 'GET com sucesso',
                anuncio
            })
        }
    })
}

const getByData = (request, response) => {
    const dataQuery = request.query

    anunciosCollection.find(dataQuery, (error, anuncio) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: 'GET com sucesso',
                anuncio
            })
        }
    })
}





module.exports = {
    getByCliente,
    addAnuncio,
    getByData,   

}