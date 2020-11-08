import React from 'react'
import Popup from '../popup'

class Header extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {show:false}
        this.handleClose  = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }
    handleClose()
    {
        this.setState({show:false})
    }
    handleShow()
    {
        this.setState({show:true})
    }
    render()
    {
        return(
        <header>
            <button style={{background:"purple",color:"white"}} className="addNoteBtn" onClick={this.handleShow}>
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </button>
            {this.state.show && <Popup handleClose={this.handleClose}/>}
        </header>
        )
    }
}

export default Header