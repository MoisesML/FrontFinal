import React from "react";
import { Navbar, Nav, NavDropdown, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./css/BarNaveg.css";

export default function BarNaveg() {
  const history = useHistory();

  const token = sessionStorage.getItem("token");

  const cerrarSesion = () => {
    history.push("/");
    sessionStorage.setItem("token", null);
    alert('Sesion cerrada exitosamente');
  };

  return (
    <Navbar className="navegador" expand="lg">
      <div className="container">
        <Navbar.Brand>
          <Link to="/" className="hyperv">
            FRISVIE
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto hyperv">
            <Link className="hyperv" to="/registro">
              Registro
            </Link>
            <Link className="hyperv" to="/pruebas">
              pruebas
            </Link>
            <NavDropdown
              title="Dropddsdsown"
              id="basic-nav-dropdown"
              className="hyperv"
            >
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
        <Link to="/"><button className="btn btn-light ml-4">Soy empresa</button></Link>
        <Button variant="outline-light ml-4">Publicar gratis</Button>
        {token === null ? (
          <Link to="/login">
            <button className="btn btn-light ml-4">Iniciar sesión</button>
          </Link>
        ) : (
          <Dropdown as={ButtonGroup}>
            <Button variant="success">Usuario</Button>
            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item onClick={(e) => {
                e.preventDefault();
                cerrarSesion();
              }}>Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </Navbar>
  );
}
