import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function FormLogin({Ingresar}) {
  let { register, handleSubmit } = useForm();

  const Login = data => {
    Ingresar(data);
  };

  return (
    <Fragment>
      <div className="d-flex flex-column align-items-center mb-4">
        <div>Ingrese a su cuenta</div>
        <i className="fas fa-user fa-9x"></i>
      </div>
      <div className="row justify-content-center">
        <form id="login" className="col-8" onSubmit={handleSubmit(Login)}>
          <div className="form-group">
            <label>Correo electrónico:</label>
            <input
              className="form-control"
              name="email"
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
            Ingresar
          </button>
        </form>
      </div>
    </Fragment>
  );
}
