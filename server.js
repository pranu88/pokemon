const express = require('express')

const app = express()
const pokemonData = require('./models/pokemon')


app.get('/',(req,res)=>{
  res.send("Welcome to the Pokemon App!")
})
 
app.get('/pokemon',(req,res)=>{
 res.send(pokemonData)
})












app.listen('3000',(req,res)=>{
 console.log('srever is running in port 3000')
})