const express = require ("express")
const exphbs = require("express-handlebars")

const app = express() //inicializando o express

//define o handlebars como template engine e executamos a função que importamos exphbs
app.engine('handlebars', exphbs.engine())
//esse é o setup para instalar o handlebrs
app.set('view engine', 'handlebars')

//renderizando a view, com rota '/' 
//vai renderizar a view home, o layout false é pq ainda nao temos o layput mas depois vamos remover e criar um
//apenas para inicialização
app.get('/',(req,res) =>{
    res.render('home', {layout: false})
})

//
app.listen(3000,()=>{
    console.log('App funcionando')
})