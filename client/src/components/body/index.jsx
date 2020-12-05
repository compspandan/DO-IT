import React from 'react'
import {Card, Button } from 'react-bootstrap';
import { Checkbox } from '@material-ui/core';
import Cards from './cards'
import axios from 'axios'
class cardBody extends React.Component {
    constructor(props){ 
            super(props)  
            this.handleDecrement=this.handleDecrement.bind(this)
            this.updateTodoLists=this.updateTodoLists.bind(this)
            this.getAllTodos=this.getAllTodos.bind(this)
            this.state={
                todoLists:[]
            }
    }
    handleDecrement(id11)
    {
        console.log(id11)
        this.props.delete1(id11)
    }
    componentDidMount()
    {
        this.getAllTodos()
    }
    updateTodoLists(id1)
    {
        axios.get("http://localhost:5000/todos/"+id1).then((res)=> {
            this.setState(function(prev){
                const s = prev.todoLists.map(function(item){
                    if(item._id === id1)
                        return res.data.todolist
                    else
                        return item
                })
                return s
            })
        })
    }
    getAllTodos()
    {
        axios.get("http://localhost:5000/todos/").then((res)=> {
            this.setState({todoLists: res.data.todolist})
        }).catch((err)=> console.log(err))
    }
    render() {
        return (<div>
            {this.state.todoLists.map(item =>
            <Cards key={item._id} id1 = {item._id} list={item.list} color={item.color} 
                    title={item.title} delete2={this.handleDecrement} update={this.updateTodoLists}/>
        )}
            </div>)
    }
}

export default cardBody;