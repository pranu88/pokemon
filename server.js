const express = require('express')

const app = express()



app.get('/',(req,res)=>{
  res.send("Welcome to the Pokemon App!")
})













app.listen('3000',(req,res)=>{
 console.log('srever is running in port 3000')
})