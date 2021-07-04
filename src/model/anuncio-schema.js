const mongoose = require('mongoose')

const Schema = mongoose.Schema

const anuncioSchema = new Schema ({
    nomeAnuncio: {
        type: String,
        maxlength: 50,
        required: true
    },
    nomeCliente: {
        type: String,
        maxlength: 80,
        unique: true,
        required: true        
    },
    
    dataInicio:{
        type: Date,
        required: true
    },
    dataFim: {
        type: Date,
        required: true
    },
    
    investimentoDia:{
        type: Number,
        required: true,
    }
    
})


const anunciosCollection = mongoose.model('anuncio', anuncioSchema)

module.exports =  anunciosCollection