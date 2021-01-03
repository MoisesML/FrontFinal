import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { storage } from "../config/firebase";
import { subirImagen } from "../Services/PersonaServices";
import Swal from "sweetalert2";

export default function FormCv({ informacion, Actualizar, id }) {
  // console.log(informacion);
  let imagenPersona;
  let { register, handleSubmit, setValue } = useForm();

  const manejarImagen = (e) => {
    e.preventDefault();
    let miImagen = e.target.files[0];
    imagenPersona = miImagen;
  };

  const actualizarInformacion = (objCv) => {
    if (imagenPersona !== undefined) {
      const refStorage = storage.ref(`personas/${informacion.per_nomb}`);
      subirImagen(imagenPersona, refStorage)
        .then((urlImagen) => {
          let objActualizar = {
            ...objCv,
            per_img : urlImagen
          };
          Actualizar(id, objActualizar);
        })
        .catch((error) => {
          Swal.fire({
            title: "Actualizar datos",
            text: error,
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        });
    } else {
      Actualizar(id, objCv);
    }
  };

  let traerValores = () => {
    if (informacion !== null) {
      let { per_nomb, per_apel, per_emal, per_dni, per_dire, per_img, per_fnac } = informacion;
      console.log(per_nomb, per_apel, per_emal, per_img);
      setValue("per_nomb", per_nomb);
      setValue("per_apel", per_apel);
      setValue("per_emal", per_emal);
      setValue("per_dni", per_dni);
      setValue("per_dire", per_dire);
      setValue("per_fnac", per_fnac);
    } else {
      console.log("prueba");
    }
  };

  useEffect(() => {
    traerValores();
    // eslint-disable-next-line
  }, [informacion]);

  return (
    <div className="row justify-content-center my-3">
      <form className="col-sm-6" onSubmit={handleSubmit(actualizarInformacion)}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            id="per_nomb"
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
            id="per_apel"
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
            id="per_emal"
            name="per_emal"
            placeholder="Ingrese su correo"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>DNI</label>
          <input
            type="text"
            className="form-control"
            id="per_dni"
            name="per_dni"
            placeholder="Ingrese su dni"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            className="form-control"
            id="per_fnac"
            name="per_fnac"
            placeholder="Ingrese su dni"
            ref={register({ required: false })}
          />
        </div>
        <div className="form-group">
          <label>Dirección</label>
          <input
            type="text"
            className="form-control"
            id="per_dire"
            name="per_dire"
            placeholder="Ingrese su direccion"
            ref={register({ required: false })}
          />
        </div>
        <div className="form-group">
          <label>Elegir foto personal</label>
          <input
            type="file"
            onChange={(e) => {
              manejarImagen(e);
            }}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
}
