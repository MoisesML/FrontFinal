import React, { useState, useEffect } from "react";
import FormCv from "../components/FormCv";
import FormFono from "../components/FormFono";
import { informacionPersona } from "../Services/PersonaServices";

export default function EditarCurriculumView(props) {
  const { id } = props.match.params;
  const [ informacion, setInformacion] = useState();

  const getInformacion = async () => {
    let { data } = await informacionPersona(id);
    let datos = data.content
    setInformacion(datos);
  };

  useEffect(() => {
    getInformacion();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <h2>Actualizar Curriculum</h2>
      <FormCv informacion={informacion} />
      <FormFono />
    </div>
  );
}
