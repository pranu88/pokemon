const express = require('express')

const app = express()
const pokemonData = require('./models/pokemon')


app.set("view engine","jsx")
app.engine("jsx", require("express-react-views").createEngine())

app.use(express.urlencoded({extended:false}))
app.use((req,res,next) => {
    next()
})

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// ---------------------------------[Middleware]

app.get('/',(req,res)=>{
  res.send("Welcome to the Pokemon App!")
})
 
// app.get('/pokemon',(req,res)=>{
//  res.send(pokemonData)
// })

app.get('/pokemon',(req,res)=>{
    res.render('Index',{data:pokemonData})
})


app.get('/pokemon/new',(req,res)=>{
    res.render('New')
})

app.post('/pokemon',(req,res)=>{
    pokemonData.push(req.body)
    res.redirect('/pokemon')
})
// app.get('/pokemon/:id',(req,res)=>{
//     res.send(req.params.id)
// })

app.get('/pokemon/:indexOfPokemon',(req,res) => {
    res.render("Show",{
       pm:pokemonData[req.params.indexOfPokemon] 
    })
})

app.listen('3000',(req,res)=>{
 console.log('srever is running in port 3000')
})