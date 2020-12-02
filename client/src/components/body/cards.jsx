import React from 'react';
import {Card } from 'react-bootstrap';
import { Checkbox, Button, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
class Cards extends React.Component {
    constructor(props){
        super(props)
        this.checkit=this.checkit.bind(this)
    }
    state={list: this.props.list, color: this.props.color, title: this.props.title}

    checkit(event)
    {
        /*console.log(event.target.id);*/
        this.setState(()=>{
            let temp = this.state.list
            if(temp[event.target.id].checked) temp[event.target.id].checked=false
            else temp[event.target.id].checked=true
            return({list:temp})  });
            /*<Button style={{border: '2px solid black',float: 'right'}} onClick={()=>{this.props.delete2(this.props.id1)}} variant={this.state.color} size="sm"><b> Delete </b> </Button> */
    }
    render() { 
        return (<div style={{float: 'left'}}>
            <Card style={{backgroundColor: this.state.color,width: '17.5rem', margin:'10px' }} className="mb-2">
            <Card.Body>
            <Card.Title style={{textAlign: 'center'}}><b>{this.state.title}</b>
            <IconButton aria-label="delete" style={{float: 'right'}}>
            <DeleteIcon onClick={()=>{this.props.delete2(this.props.id1)}}/>
            </IconButton>
            </Card.Title> 
            {this.state.list.map((listItem,index)=>
            
            <div><Checkbox id = {index} checked={listItem.checked} color={this.state.color} onChange={this.checkit}  inputProps={{ 'aria-label': 'primary checkbox' }}/>
             <span style={{textDecorationLine:listItem.checked?'line-through':''}}>{listItem.value}</span><br/>
                 
             </div>
                
            )}

            </Card.Body>
            </Card>
            </div>)
    }
}
 
export default Cards;