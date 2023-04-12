import React, { useState } from 'react'

function Second() {
    let myName ='Alabi'
    let mySchool='SQI'
    let number = '8'
    
    const [first, set] = useState(0);
    const increment =()=>{
        set(first+1)
        console.log(first)
        
        // alert('I am working')
    } 
        
    let allstudents=[
        {name:'sola',school:'Lautech'},
        {name:'jide',school:'Laut'},
        {name:'nola',school:'tech'},
        {name:'lola',school:'Lau'}

    ]
  return (
    <>
    <div>
      my Name is {myName} and my school is {mySchool}
    </div>
    {number==8?
    <div>
        even number
    </div>:
    <div>
        odd number
    </div>}
    <button onClick={increment}>increase</button>
    <div>{first}</div>


    <table className='table table-striped table-dark'>
        <thead>
            <tr>
                <td>S/N</td>
                <td>Name</td>
                <td>School</td>
            </tr>
            </thead>
    {
        allstudents.map((item, index)=>(
            <>
            {/* <div>{item.name }</div>
            <div>{item.school }</div> */}
             <tbody>
                <tr>
                   <td>{index+1}</td>
                   <td>{item.name}</td>
                   <td>{item.school}</td>
                </tr>
            </tbody>   
        
            </>
            
            
            ))
        }
        </table> 
    
    </>
    
  )
}


export default Second
