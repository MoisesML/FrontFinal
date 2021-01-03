import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function FormRegister({ Registrar, tipo }) {
  let { register, handleSubmit } = useForm();

  if (tipo === "persona") {
    const Register = (data, e) => {
      let objAdicional = {
        per_dni: "",
        per_fnac: "",
        per_dire: "",
        per_img: "",
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
  } else if (tipo === "empresa") {
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
}
