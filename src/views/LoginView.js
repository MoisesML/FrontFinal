import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { loginPersona } from "../Services/AuthServices";
import { registrarPersona } from "../Services/AuthServices";
import { SessionContext } from '../context/SessionContext';
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import Swal from "sweetalert2";

export default function LoginView() {
  const history = useHistory();
  const { setSessionUser, setNombreCompleto, setId } = useContext(SessionContext);

  const Ingresar = async (objPersona) => {
    let { data } = await loginPersona(objPersona);
    let { message, ok, content } = data;
    let { nombre, id, token } = content;

    if (ok) {
      Swal.fire({
        title: "Iniciar sesión",
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/admin");
      sessionStorage.setItem("nombre", nombre);
      setNombreCompleto(nombre);
      sessionStorage.setItem("id", id);
      setId(id)
      sessionStorage.setItem("token", token);
      setSessionUser(token);
    } else {
      Swal.fire({
        title: "Iniciar sesión",
        text: message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      sessionStorage.setItem("token", null);
      sessionStorage.setItem("nombre", null);
    }
  };

  const Registrar = async (objPersona) => {
    let { data } = await registrarPersona(objPersona);
    let { message, ok } = data;
    if (ok) {
      Swal.fire({
        title: "Nuevo registro",
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        title: "Nuevo registro",
        text: message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-6">
          <FormLogin Ingresar={Ingresar} />
        </div>
        <div className="col-sm-6">
          <FormRegister Registrar={Registrar} />
        </div>
      </div>
    </div>
  );
}
