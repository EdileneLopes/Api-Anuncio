const mongoose = require('mongoose')

//caminho
const DB_URL = 'mongodb://localhost:27017/capgemini'

const connect = () => {
    mongoose.connect(DB_URL,
        {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
    const connection = mongoose.connection
    connection.on('error', () => console.error('Erro ao se conectar com o MongoDb'))
    connection.once('open', () => console.log('Estamos conectadas MongoDB!'))
}

module.exports = {
    connect
}