import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

import Dropdown from 'react-bootstrap/Dropdown';
// import Silder from './Silder';

const Home = () => {
  const [data, setData] = useState([]);
  const [Rattingdata, setRattingData] = useState([]);

  const loadData = async () => {
      const api= "http://localhost:8000/employer/dataDisplayall"
      const res = await axios.get(api);
      setData(res.data);
   
    
  };


  useEffect(() => {
    loadData();
  }, []);


  const  handlerattingsave = (id)=>{

  }

  const cards = data.map((key) => {
    return (
    


      <Card  style={{ width: '18rem', marginTop: '50px' }}>
        <Card.Img variant="top" style={{height:"250px"}} src={key.image} alt={key.name} />
        <Card.Body>
          <Card.Title>{key.name}</Card.Title>
          <Card.Text>
           {key.category}
          </Card.Text>
          <Card.Text>
           {key.description}
          </Card.Text>
            
          {/* <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Rating
      </Dropdown.Toggle> */}

      {/* <Dropdown.Menu>
        <Dropdown.Item >1</Dropdown.Item>
        <Dropdown.Item >2</Dropdown.Item>
        <Dropdown.Item >3</Dropdown.Item>
        <Dropdown.Item >4</Dropdown.Item>
        <Dropdown.Item >5</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

        <select className='btn black' onClick={(e)=>setRattingData(e.target.value)}>
          <option value="" hidden>select ratting</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        </Card.Body>
            

        <button className='btn btn-danger' onClick={()=>handlerattingsave(key._id)}>save</button>

      </Card>
   

    );
  });

  return (

     <div >
{/*       
      <Silder/> */}
   
         

   


 
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
    
     <br />
      {cards}
    </div>
    </div>
  
  
  );
};



export default Home;
