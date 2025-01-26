import React from 'react'

import Nav from 'react-bootstrap/Nav';

// import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Sidebar = () => {
    // const [show, setShow] = useState(false);
    const navigate = useNavigate()
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const logout=()=>{
        window.localStorage.clear()
        navigate("/")
    }
    return (
      <>
       

    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="Insert">Add poetry</Nav.Link>
            <Nav.Link as={Link} to="display">Display your poerty</Nav.Link>
         
          </Nav>
          <button onClick={logout}>Log out</button>
        </Container>
      </Navbar>
      </>
  )
}

export default Sidebar