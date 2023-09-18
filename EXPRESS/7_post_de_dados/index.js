const express = require ("express")

const app = express()
const port = 3000

const path = require("path")
//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

//aqui podemos apagar toda a parte do middlwware para nao ocupar espaço

//vamos criar uma nova rota que precisa estar acima do '/', criamos acima pq se criarmos abaixo, toda rota tem / no começo 
//e ai vai acabar caindo sempre nela, que é a principal, por isso sempre ciramos as outras urls acima da principal

//esse tipo de aplicação front com back, deve ter uma rota get para trazer o formulario

app.get('/users/add',(req,res) => {
    res.sendFile(`${basePath}/usersform.html`) //e aqui ele vai estar enviando u  arquivo pro front que é o basePath com o html
})

app.post('/users/save', (req,res) =>{
    
    //como estamos recebendo dados por post, temos acesso ao req body mas ainda não está configurado
    console.log(req.body)
    //mas assim, consigo extrair as variaveis

    const name =req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)

    res.sendFile(`${basePath}/usersform.html`)
})

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

