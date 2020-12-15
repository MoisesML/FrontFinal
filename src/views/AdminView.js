import React, { useState, useEffect, Fragment } from "react";
// import { Link } from 'react-router-dom';
import { informacionPersona } from "../Services/PersonaServices";
import Loading from "../components/Loading/Loading";

export default function AdminView() {
  const [cargando, setCargando] = useState(true);
  const [persona, setPersona] = useState();

  const mostrarInformacion = async () => {
    const id = sessionStorage.getItem("token");
    const { data } = await informacionPersona(id);
    console.log(data.content);
    await setPersona(data.content);
    await setCargando(false);
  };

  useEffect(() => {
    mostrarInformacion();
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-sm-4">Barra lateral</div>
            <div className="col-sm-8">
              <h1>{persona.per_nomb + " " + persona.per_apel}</h1>
            </div>
          </div>
          <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">Start Bootstrap</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
            {/* <!-- Navbar Search--> */}
            <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
            {/* <!-- Navbar-->
            <ul class="navbar-nav ml-auto ml-md-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <Link class="dropdown-item" to="/">Settings</Link>
                        <Link class="dropdown-item" to="/">Activity Log</Link>
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item" to="/login">Logout</Link> 
                    </div>
                </li>
            </ul> */}
        </nav>
        </div>
      )}
    </Fragment>
  );
}
