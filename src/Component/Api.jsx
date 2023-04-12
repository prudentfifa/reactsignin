import axios, { Axios } from 'axios'
import React, { useState } from 'react';



function Api() {
  const endpoint ='https://jsonplaceholder.typicode.com/users'
  const endpoint1 ='https://jsonplaceholder.typicode.com/posts'
  const endpoint2='https://api-football-beta.p.rapidapi.com/timezone'
  
  const [response , setresponse ] = useState([])
  const getData=()=>{
    axios.get(endpoint2)
    .then((result)=>{
        console.log(result);
        // setresponse(result.data);
        // console.log(response)
      })  
      .catch((err)=>{
        // console.log(err)
      })
    }
    
    return (
      <>
      <h1>Fetch API</h1>
      <button onClick={getData}>Get info</button>

          
      <table className='table table-striped table-bordered table-primary text-white container'>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            {
              response.map((item)=>(
                <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>

                    </tr>
                ))
            }
        </tbody>
      </table>
    </>
  )
}

export default Api
