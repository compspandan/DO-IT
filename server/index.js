const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const todoRouter = require('./router')

const app = express()
const PORT = 5000
const mongodb_url = "mongodb://localhost:27017/todo-test"

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(express.static("public"))

mongoose.connect(mongodb_url,{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err)
        throw err
    console.log(`successfully connected to mongodb at ${mongodb_url}`)
})

app.use('/todo',todoRouter)

app.listen(PORT,function(){
    console.log(`server stated successfully on port:[${PORT}]`)
})