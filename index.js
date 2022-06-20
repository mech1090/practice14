const express = require('express')
const cors = require('cors')
const config = require('config')
const mongoose = require('mongoose')


const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('OOOK')
})

app.get('*',(req,res)=>{
    res.send('Bad_Request')
})

port = config.get('port') || 8080

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})