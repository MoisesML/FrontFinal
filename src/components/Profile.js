import React from "react";
import CVInfo from "./CVInfo";
import CVArray from "./CVArray";
import FormFono from "./FormFono";
import FormEstudios from "./FormEstudios";
import FormTrabajo from "./FormTrabajo";
import ModalForm from "./ModalForm";

export default function Profile({ informacion, id }) {
  console.log(informacion);
  if (informacion != null) {
    console.log(informacion);
    const {
      per_apel,
      per_dire,
      per_dni,
      per_emal,
      per_estu,
      per_fnac,
      per_fonos,
      per_trab,
      per_nomb,
    } = informacion;
    
    return (
      <div>
        <CVInfo
          nombreCompleto={per_nomb + " " + per_apel}
          direccion={per_dire}
          dni={per_dni}
        />
        <div>
          <div>
            <h4>Datos de contacto</h4>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#ModalTelefono"
            >
              Agregar telefono
            </button>
          </div>
          <div>
            <CVArray tipo={"fono"} datos={per_fonos} />
          </div>
        </div>
        <div>
          <h4>Educacion</h4>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#ModalEducacion"
          >
            Agregar educacion
          </button>
          <div>
            <CVArray tipo={"estudio"} datos={per_estu} />
          </div>
        </div>
        <div>
          <h4>Trabajo</h4>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#ModalTrabajo"
          >
            Agregar experiencia
          </button>
          <div>
            <CVArray tipo={"trabajo"} datos={per_trab} />
          </div>
        </div>
        <ModalForm
          id={"ModalTelefono"}
          titulo={"Agregar telefono"}
          contenido={<FormFono id={id} />}
        />
        <ModalForm
          id={"ModalEducacion"}
          titulo={"Agregar estudio"}
          contenido={<FormEstudios id={id}/>}
        />
        <ModalForm
          id={"ModalTrabajo"}
          titulo={"Agregar experiencia"}
          contenido={<FormTrabajo id={id}/>}
        />
      </div>
    );
  } else {
    return <div>Hola</div>;
  }
}
