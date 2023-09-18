const express = require ("express")

const app = express()
const port = 3000

const path = require("path")

const basePath = path.join(__dirname, 'templates')

//aqui entramos com o middleware
//vamos criar uma variavel checkAuth que fará a verificação de autenticação, simulado por meio da requisição
const checkAuth = function (req,res,next) {

    req.authStatus = true //modificando o req, verifica se esta verificado = true

    if(req.authStatus){
        console.log("   Está logado.")
        next() //vá para ao próxima etapa, que é o sendFile abaixo, vai deixar prosseguir, sem ele a pag vai carregar infinito
    } else{
        console.log("Nõ está logado, faça o login para continuar.")
        next() //aqui, inves de prosseguir deve direcionar a outra pag
    }

}
 //use é um metodo do express assim como o next
app.use(checkAuth)

app.get('/', (req,res) => {

    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () =>{

    console.log(`App rodando na porta ${port}`)

})