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
import { baseURL } from '../../config';
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
        axios.post(baseURL+"todos",{
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