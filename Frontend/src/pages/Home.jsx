import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

import Dropdown from 'react-bootstrap/Dropdown';
import Silder from './Silder';

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
      const api= "http://localhost:8000/employer/datadisplay"
      const res = await axios.get(api);
      setData(res.data);
   
    
  };


  useEffect(() => {
    loadData();
  }, []);


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
            
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Rating
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >1</Dropdown.Item>
        <Dropdown.Item >2</Dropdown.Item>
        <Dropdown.Item >3</Dropdown.Item>
        <Dropdown.Item >4</Dropdown.Item>
        <Dropdown.Item >5</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>



        </Card.Body>
            
      </Card>
   

    );
  });

  return (

     <div >
      
      <Silder/>
   
         

   


 
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
    
     <br />
      {cards}
    </div>
    </div>
  
  
  );
};



export default Home;
