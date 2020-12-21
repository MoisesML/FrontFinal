import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormPersona({ crearPersona }) {
  let { register, handleSubmit } = useForm();
  const history = useHistory();

  const Registrar = async (objPersona) => {
    let { ok, message } = await crearPersona(objPersona);
    if (ok) {
        Swal.fire({
            title : 'Nuevo registro',
            text : message,
            icon : "success",  
            showConfirmButton : false,
            timer : 2000
        });
        history.push("/login");
      } else {
        Swal.fire({
          title : 'Nuevo registro',
          text : message,
          icon : "error",
          showConfirmButton : false,
          timer : 2000
        });
      }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-sm-6" onSubmit={handleSubmit(Registrar)}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
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
              name="per_emal"
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
