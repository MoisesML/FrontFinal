import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './BarNaveg.css'

export default function BarNaveg() {
  return (
    <Navbar className="navegador" expand="lg">
      <div className="container">
        <Navbar.Brand href="#home"><Link to="/" className="hyperv" >FRISVIE</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto hyperv">
            <Link className="hyperv" to="/registro">Registro</Link>
            <NavDropdown title="Dropddsdsown" id="basic-nav-dropdown" className="hyperv" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-light">Publicar gratis</Button>
        <Link to='/login'><button className='btn btn-light ml-4'>Iniciar sesión</button></Link>
      </div>
    </Navbar>
  );
}
