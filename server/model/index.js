const mongoose = require("mongoose")
const {Schema} = mongoose

const taskSchema = new Schema({
    value : String,
    checked : Boolean
})

const todoSchema = new Schema({
    title : String,
    list : [taskSchema],
    color : String
})

const todo = mongoose.model("todo",todoSchema);
module.exports = todo
