import React from 'react'

function Navbar() {
    let divStyle ={
        color:'blue',
        fontSize:'45px',
        backgroundColor:'green'
    }
    let food = {
        swallow:'amala',
        soup:'Abula',
        animal:'Ponmo',
    }
    return (
        <>
           <div style={{color:'red', backgroundColor:"yellow"}}>
                Navbar
            </div> 
            {food.swallow}
            <div style={divStyle}>this is styling {food.animal}</div>
           
        </>
    )
}

export default Navbar
