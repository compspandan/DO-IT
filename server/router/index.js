const express = require("express")
const router = express.Router()
const todo = require("../model")

router.get("/",function(req,res){  //gets a list of all todo cards
    todo.find(function(err,todolist){
        if(err)
            res.json({todolist:todolist,message:"some error occurred"}).status(404)
        else
            res.json({todolist:todolist,message:"successful"}).status(200)
    })
})

router.post("/",function(req,res){  //create a new todo card
    const newTodo = new todo({
        title : req.body.title,
        color : req.body.color,
        list : req.body.list
    })
    newTodo.save(function(err,doc){
        if(err)
            res.json({todolist:doc,message:"some error occurred"}).status(404)
        else
            res.json({todolist:doc,message:"successful"}).status(200)
    })
})

router.delete("/:todolistId",function(req,res){  //delete a todo card with matching mongodb id
    todo.findByIdAndRemove(req.params.todolistId,function(err,doc){
        if (!err) {
                    res.json({ message: 'Succesfully deleted todo' }).status(200);
                } else res.json({ err, message: 'Some error occured in deleting todo' }).status(404);
    })
})

router.delete("/",function(req,res){  //delete all todo cards
    todo.deleteMany(function(err){
        if (!err) {
            res.json({ message: 'Succesfully deleted all todos' }).status(200);
        } else res.json({ err, message: 'Some error occured in deleting all todos' }).status(404);
    })
})

module.exports = router