import React, { useEffect, useContext } from "react";
// import { Link } from 'react-router-dom';
import { informacionPersona } from "../Services/PersonaServices";
// import Loading from "../components/Loading";
import { SessionContext } from '../context/SessionContext';

export default function AdminView() {
  const { id } = useContext(SessionContext);
  // const [cargando, setCargando] = useState(true);
  // const [persona, setPersona] = useState();

  const mostrarInformacion = async () => {
    
    console.log(id)
    const { data } = await informacionPersona(id);
    console.log(data.content);
    // await setPersona(data.content);
    // await setCargando(false);
    sessionStorage.getItem("nombre");
  };

  useEffect(() => {
    mostrarInformacion();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {sessionStorage.getItem("nombre")}
      <div className="row">
        <div className="col-sm-4">
          Barra lateral
        </div>
        <div className="col-sm-8">
          Contenido
        </div>
      </div>
    </div>
  );
}
