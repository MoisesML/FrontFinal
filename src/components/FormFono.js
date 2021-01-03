import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { agregarTelefono } from "../Services/PersonaServices";
import Swal from "sweetalert2";

export default function FormFono({ id, cerrar }) {
  let { register, handleSubmit } = useForm();
  const history = useHistory();

  // const insertarFono = (objFonos) => {
  //   console.log(id, objFonos);
  //   agregarFono(id, objFonos);
  // };

  const agregarFono = async (objFono) => {
    let { data } = await agregarTelefono(id, objFono);
    let { ok, message } = data;
    if (ok) {
      Swal.fire({
        title: "Actualizar datos",
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/admin");
    } else {
      Swal.fire({
        title: "Actualizar datos",
        text: message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center my-3">
        <form className="col-sm-10" onSubmit={handleSubmit(agregarFono)}>
          <div className="form-group">
            <label>N° de telefono</label>
            <input
              className="form-control"
              name="fono_num"
              type="text"
              placeholder="Ingrese su número telefónico"
              required="required"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Operador</label>
            <input
              name="fono_ope"
              className="form-control"
              type="text"
              placeholder="Ingrese su operador"
              ref={register({ required: false })}
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary mx-1" >
              Guardar telefono
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-1"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
