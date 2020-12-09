import React from 'react';
import {Card } from 'react-bootstrap';
import { Checkbox, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import { baseURL } from '../../config';
class Cards extends React.Component {
    constructor(props){
        super(props)
        this.checkit=this.checkit.bind(this)
    }

    checkit(event)
    {       console.log("entered")
            let temp = this.props.list
            if(temp[event.target.id].checked) temp[event.target.id].checked=false
            else temp[event.target.id].checked=true
            axios.patch(baseURL+"todos/"+this.props.id1,{
                list: temp
            }).then((res)=>{
                console.log('ready to update checkbox status')
                this.props.update(this.props.id1)
            })
    }
    render() { 
        return (<div style={{float: 'left'}}>
            <Card style={{backgroundColor: this.props.color ,width: '17.5rem', margin:'10px' }} className="mb-2">
            <Card.Body>
            <Card.Title style={{textAlign: 'center'}}><b>{this.props.title}</b>
            <IconButton aria-label="delete" style={{float: 'right'}}>
            <DeleteIcon onClick={()=>{this.props.delete2(this.props.id1)}}/>
            </IconButton>
            </Card.Title> 
            {this.props.list.map((listItem,index)=>
            
            <div key={index}>
                <Checkbox id = {index} checked={listItem.checked} color={this.props.color} onChange={this.checkit}  inputProps={{ 'aria-label': 'primary checkbox' }}/>
                <span style={{textDecorationLine:listItem.checked?'line-through':''}}>{listItem.value}</span><br/>
            </div>
                
            )}

            </Card.Body>
            </Card>
            </div>)
    }
}
 
export default Cards;