import express from 'express'
import mongoose, { mongo } from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 5000
const mongodb_url = "mongodb://localhost:27017/todo-test"

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(express.static("public"))

mongoose.connect(mongodb_url,{useNewUrlParser:true,useUnifiedTopology:true})

app.listen(PORT,function(){
    console.log(`server stated successfully on port:[${PORT}]`)
})