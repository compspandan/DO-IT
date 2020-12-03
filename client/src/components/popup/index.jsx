import React from 'react'
import { Modal,Button,Card } from 'react-bootstrap';
import ListItem from './listItem'
import cards from '../body'
class Popup extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={title:"",list : [],todo:"",color:""}
        this.setValue = this.setValue.bind(this)
        this.insTodo = this.insTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.setChecked = this.setChecked.bind(this)
        this.onsavebutton=this.onsavebutton.bind(this)
        this.setRef = (elem)=>{this.input = elem}
    }
    insTodo(event)
    {
        this.setState(function(prevState){
            return {list:prevState.list.concat({value:prevState.todo,checked:false}),todo:""}
        })
        this.input.value = ""
    }
    setValue(event)
    {
        this.setState({[event.target.name]:event.target.value})
    }
    
    deleteTodo(id)
    {
        var l = this.state.list.filter((item,index)=>{
                return parseInt(index)!==parseInt(id)
            }
            )
        this.setState({list:l})
    }
    setChecked(id)
    {
        this.setState(function(prevState){
          let t = prevState.list
          if(t[id].checked)
            t[id].checked=false
          else
            t[id].checked=true
          return({list:t})
        })
    }
    onsavebutton(event)
    {
        this.props.onsave(this.state.list,this.state.color,this.state.title)
    }
    render()
    {
        return (
            <>
              <Modal show={true} onHide={this.props.handleClose} backdrop="static">
                <Modal.Header>
                  <Modal.Title>Create a Note</Modal.Title>
                  <input name="color" defaultValue="#FFFFFF" type="color" onChange={this.setValue}/>
                </Modal.Header>
                <Modal.Body>
                    <input name="title" type="text" placeholder="Title" onChange={this.setValue}/>
                    <br/>
                    <br/>
                    {
                      this.state.list.map((item,index)=>{
                          return <ListItem deletefunc={this.deleteTodo} id={index} key={index} value={item.value} checked={item.checked} onChecked={this.setChecked}/> //https://reactjs.org/docs/lists-and-keys.html
                      })
                    }
                    <div style={{display:"flex"}}>
                    <button className="addNoteBtn" onClick={this.insTodo}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg>
                    </button>
                    <input name="todo" placeholder="enter todo" type="text" ref={this.setRef} onChange={this.setValue}/>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.onsavebutton} >
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
    }
}



export default Popup;