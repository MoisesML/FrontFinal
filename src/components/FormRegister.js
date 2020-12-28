import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function FormRegister({ Registrar }) {
  let { register, handleSubmit } = useForm();

  const Register = (data, e) => {
    let objAdicional = {
      per_dire: "Ingrese su dirección",
      per_dni: "Ingrese su DNI",
      per_fnac: "",
    };
    let objPersona = { ...data, ...objAdicional };
    console.log(objPersona);
    Registrar(objPersona);
    e.target.reset();
  };
  return (
    <Fragment>
      <div className="d-flex flex-column align-items-center mb-4">
        <div>Registrate</div>
      </div>
      <div className="row justify-content-center">
        <form id="crear" className="col-8" onSubmit={handleSubmit(Register)}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              className="form-control"
              name="per_nomb"
              type="text"
              placeholder="Ingrese su nombre"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input
              className="form-control"
              name="per_apel"
              type="text"
              placeholder="Ingrese su apellido"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Correo electrónico:</label>
            <input
              className="form-control"
              name="per_emal"
              type="email"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              ref={register({ required: true })}
            />
          </div>
          <button className="btn btn-primary align-self-center" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </Fragment>
  );
}
