const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require("dotenv")
const todoRouter = require('./router')
const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

// const mongodb_url = process.env.PORT ?
//                      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.8l2ly.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
//                      :"mongodb://localhost:27017/todo-test"

const mongodb_url = `mongodb+srv://swaroop:8618966682@cluster0.8l2ly.mongodb.net/todoDataBase?retryWrites=true&w=majority`
                    
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

app.use('/todos',todoRouter)

app.listen(PORT,function(){
    console.log(`server stated successfully on port:[${PORT}]`)
    
})