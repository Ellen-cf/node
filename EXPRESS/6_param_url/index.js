const express = require ("express")

const app = express()
const port = 3000

const path = require("path")

const basePath = path.join(__dirname, 'templates')

//aqui podemos apagar toda a parte do middlwware para nao ocupar espaço

//vamos criar uma nova rota que precisa estar acima do '/', criamos acima pq se criarmos abaixo, toda rota tem / no começo 
//e ai vai acabar caindo sempre nela, que é a principal, por isso sempre ciramos as outras urls acima da principal

app.get('/users/:id', (req,res) => {
    const id = req.params.id
    //leityra da tabela users, resgatar um usuário do banco

    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})


app.get('/', (req,res) => {

    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () =>{

    console.log(`App rodando na porta ${port}`)

})