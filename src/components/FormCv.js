import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function FormCv({ informacion }) {
  console.log(informacion);
  let { register, handleSubmit, setValue } = useForm();

  const Actualizar = (objCv) => {
    console.log(objCv);
  };

  let traerValores = () => {
    if (informacion !== undefined) {
      let { per_nomb, per_apel, per_emal } = informacion;
      console.log(per_nomb, per_apel, per_emal);
      setValue("per_nomb", per_nomb);
      setValue("per_apel", per_apel);
      setValue("per_emal", per_emal);
    } else {
      console.log("prueba")
    }
  }

  useEffect(() => {
    traerValores();
    // eslint-disable-next-line
  }, [informacion]);

  return (
    <div className="row justify-content-center my-3">
      <form className="col-sm-6" onSubmit={handleSubmit(Actualizar)}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            id="per_nomb"
            name="per_nomb"
            placeholder="Ingrese su nombre"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            id="per_apel"
            name="per_apel"
            placeholder="Ingrese su apellido"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            id="per_emal"
            name="per_emal"
            placeholder="Ingrese su correo"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>DNI</label>
          <input
            type="text"
            className="form-control"
            id="per_dni"
            name="per_dni"
            placeholder="Ingrese su dni"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            className="form-control"
            id="per_fnac"
            name="per_fnac"
            placeholder="Ingrese su dni"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>Dirección</label>
          <input
            type="text"
            className="form-control"
            id="per_dire"
            name="per_dire"
            placeholder="Ingrese su dni"
            ref={register({ required: true })}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
}
