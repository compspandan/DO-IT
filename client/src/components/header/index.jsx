import React from 'react'
import Popup from '../popup'
import Cards from '../body/index'
class Header extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {show:false,save:false,newlist:[],newcolor:"",newtitle:"",cardsId: [],noOfCards: 1}
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
        this.setState(() => {
                    let l=this.state.cardsId;
                    l.push(this.state.noOfCards);
                    return {cardsId: l};
                }
        );
        this.setState({noOfCards: this.state.noOfCards+1})
        this.setState({save:true})
        this.setState({newlist:list})
        this.setState({newcolor:color})
        this.setState({newtitle:title})
    }
    decrementCounter(id1){
        console.log(id1);
        const temp = this.state.cardsId.map(c => c==id1?c=-1:c);
        this.setState({cardsId: temp});
    }
    render()
    {
        return(
        <div>
        <header>
            <button style={{background:"purple",color:"white"}} className="addNoteBtn" onClick={this.handleShow}>
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            </button>
            {this.state.show && <Popup handleClose={this.handleClose} onsave={this.onSave}/>}
        </header>
        {this.state.save && <Cards cardsid={this.state.cardsId} list={this.state.newlist} color={this.state.newcolor} title={this.state.newtitle} delete1={this.decrementCounter}/> }

        </div>
        )
    }
}

export default Header