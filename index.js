const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send({
        message:"Server is live"
    })
})
var Connection=require('./config/db.config')
Connection()

require('./routes/app.routes')(app)

app.listen(3000,()=>{
    console.log('Server is running')
})