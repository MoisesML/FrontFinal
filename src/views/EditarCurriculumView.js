import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormCv from "../components/FormCv";
import FormFono from "../components/FormFono";
import { informacionPersona, actualizarPersona } from "../Services/PersonaServices";
import Swal from "sweetalert2";

export default function EditarCurriculumView(props) {
  const history = useHistory();
  const { id } = props.match.params;
  const [ informacion, setInformacion] = useState();

  const getInformacion = async () => {
    let { data } = await informacionPersona(id);
    let datos = data.content
    setInformacion(datos);
  };

  const Actualizar = async (id, objPersona) => {
    let { message, ok } = await actualizarPersona(id, objPersona);
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
  }

  useEffect(() => {
    getInformacion();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <h2>Actualizar Curriculum</h2>
      <FormCv informacion={informacion} Actualizar={Actualizar} id={id}/>
      <FormFono />
    </div>
  );
}
