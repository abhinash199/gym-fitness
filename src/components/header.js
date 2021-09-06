import { Collapse,NavDropdown,Navbar,Nav,Container} from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';
function header() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
       
          <Navbar.Brand href="/">Fitness Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Own a franchise</Nav.Link>
                
              <Nav.Link >
                  <Link to="/our-facilities">Our Facilities</Link>
              </Nav.Link>
              <Nav.Link >
                  <Link to="/register">Join</Link>
              </Nav.Link>
            
            
              <Nav.Link >
                  <Link to="/membership">Membership</Link>
              </Nav.Link>
            
              <Nav.Link >
                  <Link to="/about">About us</Link>
              </Nav.Link>
            
            


            
            </Nav>
          </Navbar.Collapse>
      
      </Navbar>
           
        )
        
        }

export default header;
