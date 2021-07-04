const app = require('./src/app')

const PORT = 8080


app.listen(PORT, () => {
    console.log(`O APP Está rodando em http://localhost: ${PORT}`)
})