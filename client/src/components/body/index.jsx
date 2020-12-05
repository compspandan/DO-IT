import React from 'react'
import {Card, Button } from 'react-bootstrap';
import { Checkbox } from '@material-ui/core';
import Cards from './cards'
import axios from 'axios'
class cardBody extends React.Component {
    constructor(props){ 
            super(props)  
            this.handleDecrement=this.handleDecrement.bind(this)
            this.state={
                todoLists:[]
            }
      }
      handleDecrement(id11)
      {
          console.log(id11)
          this.props.delete1(id11)
      }
    render() { 
        axios.get("http://localhost:5000/").then((res)=> {
            this.setState({todoLists: res.data.todolist})
            //console.log(this.state.todoLists)
        }).catch((err)=> console.log(err))
        
        return (<div>
            {this.state.todoLists.map(item =>
            <Cards id1 = {item._id} list={item.list} color={item.color} 
                    title={item.title} delete2={this.handleDecrement} />
        )}
            </div>)
    }
}

export default cardBody;