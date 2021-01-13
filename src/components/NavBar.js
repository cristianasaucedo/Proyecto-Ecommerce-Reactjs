import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
//import Booststrap from 'bootstrap';
import { Button, Navbar, Nav, Form} from 'react-bootstrap';

function NavBar(){
    return(
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#/">Ecommerce</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#productos">Productos</Nav.Link>
      <Nav.Link href="#tv">TV Led</Nav.Link>
      <Nav.Link href="#notebooks">Notebooks</Nav.Link>
      <Nav.Link href="#celulares">Celulares</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
</>    
)}

export default NavBar;