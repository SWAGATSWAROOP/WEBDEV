import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'

function Swagat(){
    return (
      <div className='swagat'>
        <BlockChain />
        <Reactjs />
        <h1>Swagat Swaroop Parida</h1>
      </div>
    );
}

const BlockChain = ()=>{
    return <h4>BlockChain + React = Deadly</h4>
}

const Reactjs = () =>{
    return <h4>Reactjs is best UI Library.</h4>
}

ReactDOM.render( <Swagat />,document.getElementById('root'));