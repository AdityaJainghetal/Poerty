import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { RiLoginBoxFill } from "react-icons/ri";

const Header = () => {

 
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Poerty review System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">All poetry</Nav.Link>
           
          </Nav>

      

        <Nav>
            <Nav.Link as={Link} to="login">
              
            <RiLoginBoxFill />
                
            </Nav.Link>
        </Nav>



        </Container>
      </Navbar>

    </>
  )
}

export default Header