import React from "react";
import CVInfo from "./CVInfo";
import CVArray from "./CVArray";
import ModalForm from "./ModalForm";

export default function Profile({ informacion, id, setActualizar }) {
  console.log(informacion);
  if (informacion != null) {
    console.log(informacion);
    const { per_apel, per_dire, per_dni, per_estu, per_fnac, per_fonos, per_trab, per_nomb, per_img } = informacion;
      // per_emal,

    return (
      <div>
        <CVInfo
          nombreCompleto={per_nomb + " " + per_apel}
          direccion={per_dire}
          dni={per_dni}
          foto={per_img}
          fnac={per_fnac}
        />
        <div>
          <div className="d-flex justify-content-between">
            <h4>Datos de contacto</h4>
            <ModalForm id={id} titulo={"Agregar telefono"} tipo="telefono" setActualizar={setActualizar}/>
          </div>
          <div>
            <CVArray tipo={"fono"} datos={per_fonos} setActualizar={setActualizar}/>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <h4>Educacion</h4>
            <ModalForm id={id} titulo={"Agregar estudio"} tipo="estudio" setActualizar={setActualizar}/>
          </div>
          <div>
            <CVArray tipo={"estudio"} datos={per_estu} setActualizar={setActualizar}/>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <h4>Trabajo</h4>
            <ModalForm id={id} titulo={"Agregar experiencia"} tipo="trabajo" setActualizar={setActualizar}/>
          </div>
          <div>
            <CVArray tipo={"trabajo"} datos={per_trab} setActualizar={setActualizar}/>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Hola</div>;
  }
}
