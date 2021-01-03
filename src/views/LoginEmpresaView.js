import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import FormLogin from "../components/FormLogin";
import { SessionContext } from "../context/SessionContext";
import { loginEmpresa, registrarEmpresa } from "../Services/AuthServices";
import Swal from "sweetalert2";
import FormRegister from "../components/FormRegister";

export default function LoginEmpresaView() {
  const history = useHistory();
  const { setSessionUser, setNombreCompleto, setId, setTipo } = useContext(
    SessionContext
  );

  const Ingresar = async (objPersona) => {
    let { data } = await loginEmpresa(objPersona);
    let { message, ok, content } = data;
    
    if (ok) {
      let { nombre, id, tipo, token } = content;
      setId(id);
      setTipo(tipo);
      setSessionUser(token);
      setNombreCompleto(nombre);
      sessionStorage.setItem("id", id);
      sessionStorage.setItem("tipo", tipo);
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("nombre", nombre);
      Swal.fire({
        title: "Iniciar sesión",
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      return history.push("/admin");
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
    let { data } = await registrarEmpresa(objPersona);
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
          <FormLogin IngresarEmpresa={Ingresar} tipo="empresa" />
        </div>
        <div className="col-sm-6">
          <FormRegister Registrar={Registrar} tipo="empresa"/>
        </div>
      </div>
    </div>
  );
}
