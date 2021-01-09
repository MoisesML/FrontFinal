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
        per_img: "https://firebasestorage.googleapis.com/v0/b/codigo-final.appspot.com/o/personas%2Ffondo_sin_imagen_perfil_usuario.png?alt=media&token=ef2f8f17-b825-42bf-8cc9-c075e2b44df7"
      };
      let objPersona = { ...data, ...objAdicional };
      console.log(objPersona);
      Registrar(objPersona);
      e.target.reset();
    };

    return (
      <Fragment>
        <div className="d-flex flex-column align-items-center mb-4">
          <h3>Crea tu cuenta personal y postula al trabajo que deseas</h3>
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
    const Register = (data, e) => {
      let objAdicional = {
        emp_rsoc: "",
        emp_ruc: "",
        emp_dire: "",
        emp_ubic: "",
        emp_img: "https://firebasestorage.googleapis.com/v0/b/codigo-final.appspot.com/o/personas%2Ffondo_sin_imagen_perfil_usuario.png?alt=media&token=ef2f8f17-b825-42bf-8cc9-c075e2b44df7"
      };
      let objEmpresa = { ...data, ...objAdicional };
      Registrar(objEmpresa);
      e.target.reset();
    };

    return (
      <div className="container">
        <h3 className="text-center">Cree su cuenta corporativa y anuncie sus ofertas laborales</h3>
        <div className="row justify-content-center">
          <form className="col-sm-9" onSubmit={handleSubmit(Register)}>
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
