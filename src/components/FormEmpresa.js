import React from "react";
import { useForm } from "react-hook-form";

export default function FormPersona({ Registrar }) {
  let { register, handleSubmit } = useForm();

  const Register = (objEmpresa, e) => {
    Registrar(objEmpresa);
    // console.log(objEmpresa);
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-sm-6" onSubmit={handleSubmit(Register)}>
          <div className="form-group">
            <label>Nombre empresa</label>
            <input
              type="text"
              className="form-control"
              name="emp_nomb"
              placeholder="Ingrese su nombre"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Razon Social</label>
            <input
              type="text"
              className="form-control"
              name="emp_rsoc"
              placeholder="Ingrese su apellido"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>RUC</label>
            <input
              type="text"
              className="form-control"
              name="emp_ruc"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Rubro</label>
            <input
              type="text"
              className="form-control"
              name="emp_rubr"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Correo Electronico</label>
            <input
              type="email"
              className="form-control"
              name="emp_emal"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Ingrese su contraseña"
              ref={register({ required: true })}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
