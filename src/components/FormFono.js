import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { agregarTelefono, editarTelefono } from "../Services/PersonaServices";
import Swal from "sweetalert2";

export default function FormFono({
  id,
  handleClose,
  token,
  setActualizar,
  accion,
  info,
}) {
  let { register, handleSubmit, setValue } = useForm();

  const cerrarModal = () => {
    handleClose();
  };

  let traerValores = () => {
    if (accion === "editar") {
      let { fono_num, fono_ope } = info;
      setValue("fono_num", fono_num);
      setValue("fono_ope", fono_ope);
    }
  };

  useEffect(() => {
    traerValores();
    // eslint-disable-next-line
  }, []);

  const agregarFono = async (objFono) => {
    if (accion !== "editar") {
      let { data } = await agregarTelefono(id, objFono, token);
      let { ok, message } = data;
      if (ok) {
        Swal.fire({
          title: "Agregar telefono",
          text: message,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        setActualizar(true);
      } else {
        Swal.fire({
          title: "Agregar telefono",
          text: message,
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      handleClose();
    } else {
      let { _id } = info;
      let { data } = await editarTelefono(id, _id, objFono, token);
      let { ok, message } = data;
      if (ok) {
        Swal.fire({
          title: "Actualizar telefono",
          text: message,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        setActualizar(true);
      } else {
        Swal.fire({
          title: "Actualizar telefono",
          text: message,
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      handleClose();
    }
  };

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
            <button type="submit" className="btn btn-primary mx-1">
              {accion === "editar" ? "Editar telefono" : "Guardar telefono"}
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-1"
              data-bs-dismiss="modal"
              onClick={cerrarModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
