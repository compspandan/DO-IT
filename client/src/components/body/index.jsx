import React from 'react'
import {Card, Button } from 'react-bootstrap';
import { Checkbox } from '@material-ui/core';
import Cards from './cards'
class cardBody extends React.Component {
    constructor(props){ 
            super(props)  
            this.handleDecrement=this.handleDecrement.bind(this)
      }
      handleDecrement(id11)
      {
          console.log(id11)
          this.props.delete1(id11)
      }
    render() { 
        return (<div>
            {this.props.cardsid.map(item =>
            (item>0)? (<Cards id1 = {item} list={this.props.list} color={this.props.color} 
                    title={this.props.title} delete2={this.handleDecrement} />):<doesntDoAnything></doesntDoAnything>
            )}
            </div>)
    }
}

export default cardBody;