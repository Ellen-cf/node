const express = require ("express")

const app = express()
const port = 3000

const path = require("path")

//entre a rota principal e as configuraçoes vamos importar o router criado para usuarios
const users = require('./users')
//

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

//tirar todas as rotas de usuário e mandar pro outro index

//acima da rota principal, damos um middleware , idicando a rota e sera responsavel o users

app.use('/users', users)
//vamos tirar o /users das outras rotas pq aqui ele ja vai entender que o primeiro /users ja vai cair no outro index
//as rotas ficariam /users/users/id, entao eu so vou tirar o /users das outras rotas

app.get('/', (req,res) => {

    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () =>{

    console.log(`App rodando na porta ${port}`)

})

