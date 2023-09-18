const express = require ("express")
const exphbs = require("express-handlebars")

const app = express() 
app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res) =>{
    
    const items = ["Item a", "Item b", "Item c"]

    res.render('dashboard', {items})
})

//criando nova página, como se acessase o post de um blog
app.get('/post', (req, res)=>{
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Este arquivo vai ter ajudar a aprender node.js',
        comments: 4,
    }

    res.render('blogpost', {post})
})



app.get('/',(req,res) =>{

    const user = {
        name:"Ellen",
        surname: "Florencio"
    }

    const palavra = "Teste"
    const auth = false

    const approved = false
 
    res.render('home', {user: user, palavra, auth, approved}) 
})
 
app.listen(3000,()=>{
    console.log('App funcionando')
})