import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { SessionContext } from "../context/SessionContext";
import FormCv from "../components/FormCv";
import FormFono from "../components/FormFono";
import FormEstudios from '../components/FormEstudios';
import FormTrabajo from '../components/FormTrabajo';
import { informacionPersona, actualizarPersona, agregarTelefono } from "../Services/PersonaServices";
import Swal from "sweetalert2";

export default function EditarCurriculumView(props) {
  const { idx } = props.match.params;
  const {
    setSessionUser,
    setNombreCompleto,
    id,
    setId,
    setTipo,
  } = useContext(SessionContext);
  const history = useHistory();
  const [ informacion, setInformacion] = useState(null);
  let id2 = sessionStorage.getItem("id");
  let tipo2 = sessionStorage.getItem("tipo");
  let token2 = sessionStorage.getItem("token");
  let nombre2 = sessionStorage.getItem("nombre");

  const verificarContext = () => {
    if (id == null) {
      setId(id2);
      setTipo(tipo2);
      setSessionUser(token2);
      setNombreCompleto(nombre2);
    }
    console.log("id", id);
  };

  const getInformacion = async () => {
    let { data } = await informacionPersona(idx);
    let datos = data.content
    console.log(datos);
    setInformacion(datos);
  };

  const Actualizar = async (idx, objPersona) => {
    let data = await actualizarPersona(idx, objPersona);
    let { message, ok } = data;
    if (ok) {
      Swal.fire({
        title: "Actualizar datos",
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/admin");
    } else {
      Swal.fire({
        title: "Actualizar datos",
        text: message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const agregarFono = async (idx, objFono) => {
    let { data } = await agregarTelefono(idx, objFono);
    let { ok, message } = data;
    if (ok) {
      Swal.fire({
        title: "Actualizar datos",
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      return history.push("/admin");
    } else {
      Swal.fire({
        title: "Actualizar datos",
        text: message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    console.log(data)
  }

  useEffect(() => {
    verificarContext();
    getInformacion();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <h2>Actualizar Curriculum</h2>
      <FormCv informacion={informacion} Actualizar={Actualizar} id={idx}/>
      <FormFono agregarFono={agregarFono} id={idx}/>
      <FormEstudios id={idx}/>
      <FormTrabajo id={idx}/>
    </div>
  );
}
