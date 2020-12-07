import React from 'react'
import Popup from '../popup'
import Cards from '../body/index'
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Toolbar from '@material-ui/core/Toolbar';
import { Checkbox, Button, IconButton} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
class Header extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {show:false}
        this.cardRef = React.createRef()
        this.handleClose  = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.onSave = this.onSave.bind(this)
        this.decrementCounter=this.decrementCounter.bind(this)
    }
    handleClose()
    {
        this.setState({show:false})
        
    }
    handleShow()
    {
        this.setState({show:true})
    }
    onSave(list,color,title)
    {
        this.handleClose()
        axios.post("http://localhost:5000/todos",{
            title: title,
            color: color,
            list: list
        })
        .then((res)=> {
            console.log('success!!!!')
            this.cardRef.current.getAllTodos()
        })
        .catch((error)=> console.log(error))
    }
    decrementCounter(id1){
        console.log(id1);
        axios.delete("http://localhost:5000/todos/"+id1).then((res)=>{
            console.log('recorded delete...no issues')
            this.cardRef.current.getAllTodos()
        }).catch((err)=>console.log(err))
    }
    render()
    {
        return(
        /*<div>
        <header>
            <button style={{background:"purple",color:"white"}} className="addNoteBtn" onClick={this.handleShow}>
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </button>
            {this.state.show && <Popup handleClose={this.handleClose} onsave={this.onSave}/>}
        </header>
        <Cards ref={this.cardRef} delete1={this.decrementCounter}/>*/
        <div>
        <AppBar position="static" style={{backgroundColor: 'rgb(30,30,30,0.9)'}}>
        <Toolbar>
        <IconButton onClick={this.handleShow} color="inherit" edge="start" style={{minHeight:'0'}}>
      <AddCircleSharpIcon/>
    </IconButton>
    <Typography variant="h4" color="inherit" align="center" style={{flexGrow: 1}}><b>
      DO-IT!</b>
    </Typography>
    <IconButton href="https://www.instagram.com/" target="_blank" color="inherit">
    <InstagramIcon style={{minWidth: '35'}} onClick/>
    </IconButton><IconButton href="https://www.linkedin.com/" target="_blank" color="inherit">
    <LinkedInIcon style={{minWidth: '35'}}/>
    </IconButton><IconButton href="https://github.com/compspandan/DO-IT" target="blank" color="inherit">
    <GitHubIcon style={{minWidth: '35'}}/>   
    </IconButton>
        </Toolbar>
      </AppBar>
      {this.state.show && <Popup handleClose={this.handleClose} onsave={this.onSave}/>}
      <Cards ref={this.cardRef} delete1={this.decrementCounter}/>
        </div>
        )
    }
}

export default Header