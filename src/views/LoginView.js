import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { loginPersona } from '../Services/AuthServices';
import Swal from 'sweetalert2';

export default function LoginView() {
  let { register, handleSubmit } = useForm();
  const history = useHistory();

  const Ingresar = async (objPersona) => {
    let { data } = await loginPersona(objPersona);
    let { message, ok,content } = data;
    if (ok) {
      Swal.fire({
        title : 'Iniciar sesión',
        text : message,
        icon : "success",
        showConfirmButton : false,
        timer : 2000
      });
      history.push("/admin");
      sessionStorage.setItem("token", content);
    } else {
      Swal.fire({
        title : 'Iniciar sesión',
        text : message,
        icon : "error",
        showConfirmButton : false,
        timer : 2000
      });
      sessionStorage.setItem("token", null);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-sm-6" onSubmit={handleSubmit(Ingresar)}>
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
          <button className="btn btn-primary" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
