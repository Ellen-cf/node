const express = require ("express")
const exphbs = require("express-handlebars")

const app = express() 
app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/',(req,res) =>{

    //metodo render, enviado por chaves e valores
const user = {
    name:"Ellen",
    surname: "Florencio"
}

//posso enviar para o front quantas variaveis eu quiser
const palavra = "Teste"

    res.render('home', {user: user, palavra}) //especificando chave e o valor
})
///comunicação da view com o front end


app.listen(3000,()=>{
    console.log('App funcionando')
})