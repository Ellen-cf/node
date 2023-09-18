const express = require ("express")
const exphbs = require("express-handlebars")

const app = express() 
app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

//criando a view da dashboard
app.get('/dashboard', (req,res) =>{
    res.render('dashboard')
})
app.get('/',(req,res) =>{

    const user = {
        name:"Ellen",
        surname: "Florencio"
    }

    const palavra = "Teste"
     
    //variavel auth que mostra se o usuario esta autenticado
    const auth = true
    //é criado uma nova view (dashborad.handlebars)que o usuario só poderá acessar se for autenticado

    res.render('home', {user: user, palavra, auth}) 
})
 
app.listen(3000,()=>{
    console.log('App funcionando')
})