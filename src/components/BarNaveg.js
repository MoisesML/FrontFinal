import React, { useEffect, useContext } from "react";
import { Navbar, Nav, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./css/BarNaveg.css";
import { SessionContext } from '../context/SessionContext';

export default function BarNaveg() {
  const { user, setSessionUser, nombreCompleto, setNombreCompleto, setTipo, id, setId } = useContext(SessionContext);
  const history = useHistory();

  const cerrarSesion = () => {
    sessionStorage.setItem("token", null);
    sessionStorage.setItem("id", null);
    sessionStorage.setItem("nombre", null);
    sessionStorage.setItem("tipo", null);
    setNombreCompleto(null);
    setSessionUser(null);
    setTipo(null);
    setId(null);
    alert('Sesion cerrada exitosamente');
    return history.push("/");
  };

  useEffect(() => {
    if (user === null) {
      setSessionUser(sessionStorage.getItem("token"));
      setNombreCompleto(sessionStorage.getItem("nombre"));
    }
  })

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
            <button className="btn btn-primary mx-1 hyperv" onClick={(e) => {
              let ruta = `/editar/cv/${id}`
              e.preventDefault();
              history.push(ruta)
            }} >
              Editar CV
            </button>
            <button className="btn btn-primary mx-1 hyperv" onClick={(e) => {
              let ruta2 = `/admin/postulaciones/${id}`
              e.preventDefault();
              history.push(ruta2)
            }} >
              Mis postulaciones
            </button>
            <Link className="mx-1 hyperv" to="/anuncio">Anuncio</Link>
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
            <Button className="ml-4" variant="success"><Link className="nombreUsuario" to="/admin">{nombreCompleto}</Link></Button>
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
