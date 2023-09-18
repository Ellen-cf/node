const express  =require ('express')
const exphbs = require('express-handlebars')

const app = express ()

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars" )

app.use(express.static("public"))

const products = [
    {
        id: "1",
        title: "livro",
        price: "3.00"
    },
    {
        id: "2",
        title: "livro",
        price: "5.00"
    },
    {
        id: "3",
        title: "livro",
        price: "8.00"
    },

]


app.get("/", (req,res) =>{
    res.render("home", {products})
})
app.listen(3000)