import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';



const Display = () => {
  const [mydata , setMydata] = useState([]);

  const loaddata=()=>{
    let api= "http://localhost:8000/employer/datadisplay";
    axios.get(api).then((res)=>{
      setMydata(res.data);
      console.log(res.data);
      
    })
  }

  useEffect(()=>{
    loaddata()
  },[])


  const ans= mydata.map((key)=>{
    return(
      <>
      <tr style={{border:"2px solid black"}}  >
        <td>{key.name}</td>
        <td>{key.price}</td>
        <td>{key.description}</td>
     
        <th >
        
        
        <img style={{width:"200px", height:"200px"}} src={key.image}  alt=""  /></th>
        
      </tr>
      
      </>
    )
  })

  return(
    <>
    <div className='image'>
        <div  style={{paddingLeft:"300px", width:"50%", height:"200px"}}>



    <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Title name</th>
          <th>Your price</th>
          <th>Description</th>
          <th>Images</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
      {ans}
      </tbody>
      </Table>
    </div>
    </div>
    </>
  )
  
  
  
  
}

export default Display;