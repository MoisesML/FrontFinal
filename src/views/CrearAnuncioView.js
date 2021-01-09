import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import FormAnuncio from "../components/FormAnuncio";
import { SessionContext } from "../context/SessionContext";
import { crearAnuncio } from "../Services/AnuncioServices";
import Swal from "sweetalert2";

export default function CrearAnuncioView() {
  const {
    user,
    id,
    setId,
    // tipo,
    setTipo,
    setSessionUser,
    setNombreCompleto,
  } = useContext(SessionContext);
  let id2 = sessionStorage.getItem("id");
  let tipo2 = sessionStorage.getItem("tipo");
  let token2 = sessionStorage.getItem("token");
  let nombre2 = sessionStorage.getItem("nombre");
  const history = useHistory();

  const publicarAnuncio = async (objAnuncio, token) => {
    let data = await crearAnuncio(objAnuncio, token);
    console.log(data);
    let { message, ok } = data;
    if (ok) {
      Swal.fire({
        title: "Nuevo anuncio",
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/admin");
    } else {
      Swal.fire({
        title: "Nuevo anuncio",
        text: message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const verificarContext = () => {
    if (id === "null" || id === null) {
      console.log("SeteoContext", id2, tipo2);
      setId(id2);
      setTipo(tipo2);
      setSessionUser(token2);
      setNombreCompleto(nombre2);
    } else {
      console.log(id, "Context lleno");
    }
  };

  useEffect(() => {
    verificarContext();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Crear anuncio</h2>
      <FormAnuncio publicarAnuncio={publicarAnuncio} token={user} />
    </div>
  );
}
