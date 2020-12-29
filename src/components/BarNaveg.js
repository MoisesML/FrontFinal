import React, { useEffect, useContext } from "react";
import { Navbar, Nav, NavDropdown, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./css/BarNaveg.css";
import { SessionContext } from '../context/SessionContext';

export default function BarNaveg() {
  let id = sessionStorage.getItem("id");
  const { user, setSessionUser, nombreCompleto, setNombreCompleto } = useContext(SessionContext);
  const history = useHistory();

  const cerrarSesion = () => {
    history.push("/");
    sessionStorage.setItem("token", "null");
    sessionStorage.setItem("id", "null");
    sessionStorage.setItem("nombre", null);
    setNombreCompleto("null");
    setSessionUser("null");
    alert('Sesion cerrada exitosamente');
  };

  useEffect(() => {
    setSessionUser(sessionStorage.getItem("token"));
    // eslint-disable-next-line
  },[]);

  useEffect(() => {
    setNombreCompleto(sessionStorage.getItem("nombre"));
    // eslint-disable-next-line
  }, [user])

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
            <Link className="mx-1 hyperv" to="/registro">
              Registro
            </Link>
            <Link className="mx-1 hyperv" to="/pruebas">
              pruebas
            </Link>
            <Link className="mx-1 hyperv" to={"editar/cv/"+id+"/"} >
              editarcv
            </Link>
            <Link className="mx-1 hyperv" to="/anuncio">Anuncio</Link>
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
        <Link to="/login/empresa" className="btn btn-light ml-4">Soy empresa</Link>
        <Button variant="outline-light ml-4">Publicar gratis</Button>
        {user === "null" || user === null ? (
          <Link to="/login">
            <button className="btn btn-light ml-4">Iniciar sesión</button>
          </Link>
        ) : (
          <Dropdown as={ButtonGroup}>
            <Button className="ml-4" variant="success"><Link to="/admin">{nombreCompleto}</Link></Button>
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
