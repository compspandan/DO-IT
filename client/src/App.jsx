import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
class App extends React.Component
{
    render()
    {
       return(
        <div style={{ 
            backgroundImage: 'url(https://source.unsplash.com/1920x949/?work)',
            width: '100vw',
            height: '100vh'}}>
             <Header/>
            
        </div>
       )
    }
}

export default App