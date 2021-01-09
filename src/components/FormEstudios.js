import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { agregarEstudio, editarEstudio } from "../Services/PersonaServices";
import Swal from "sweetalert2";

export default function FormEstudios({ id, handleClose, token, setActualizar, accion, info }) {
  let { register, handleSubmit, setValue } = useForm();

  const cerrarModal = () => {
    handleClose();
  };

  let traerValores = () => {
    if (accion === "editar") {
      let { est_nom, est_nvl, est_inst, est_ini, est_fin } = info;
      setValue("est_nom", est_nom);
      setValue("est_nvl", est_nvl);
      setValue("est_inst", est_inst);
      setValue("est_ini", est_ini);
      setValue("est_fin", est_fin);
    }
  };

  useEffect(() => {
    traerValores();
    // eslint-disable-next-line
  }, []);

  const registrarEstudio = async (objEstudio) => {
    if (accion !== "editar") {
      let { data } = await agregarEstudio(id, objEstudio, token);
      let { ok, message } = data;
      if (ok) {
        Swal.fire({
          title: "Actualizar datos",
          text: message,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        setActualizar(true)
      } else {
        Swal.fire({
          title: "Actualizar datos",
          text: message,
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      handleClose();
    } else {
      let { _id } = info;
      let { data } = await editarEstudio(id, _id, objEstudio, token);
      let { ok, message } = data;
      if (ok) {
        Swal.fire({
          title: "Actualizar estudio",
          text: message,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        setActualizar(true);
      } else {
        Swal.fire({
          title: "Actualizar estudio",
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
    <Fragment>
      <div className="row justify-content-center">
        <form
          id="crear"
          className="col-8"
          onSubmit={handleSubmit(registrarEstudio)}
        >
          <div className="form-group">
            <label>Título obtenido</label>
            <input
              className="form-control"
              name="est_nom"
              type="text"
              placeholder="Ingrese su nombre"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Nivel de estudio</label>
            <input
              className="form-control"
              name="est_nvl"
              type="text"
              placeholder="Ingrese su apellido"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Institución formadora</label>
            <input
              className="form-control"
              name="est_inst"
              type="text"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Fecha de inicio</label>
            <input
              className="form-control"
              name="est_ini"
              type="date"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <label>Fecha de fin</label>
            <input
              className="form-control"
              name="est_fin"
              type="date"
              placeholder="Ingrese su correo"
              ref={register({ required: true })}
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary mx-1">
            {accion === "editar" ? "Editar estudio" : "Guardar estudio"}
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
    </Fragment>
  );
}
