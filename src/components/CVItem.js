import React from "react";
import "./css/CVItem.css";
import { quitarTelefono, quitarEstudio, quitarTrabajo } from "../Services/PersonaServices";
import Swal from "sweetalert2";
import ModalForm from "./ModalForm";

export default function CVItem({ dato, tipo, setActualizar }) {
  let id = sessionStorage.getItem("id");
  let token = sessionStorage.getItem("token");

  if (tipo === "fono") {
    let { _id, fono_num, fono_ope, fono_sta } = dato;

    if (fono_sta === "true") {
      const eliminarFono = () => {
        Swal.fire({
          icon: "danger",
          title: "¿Estas seguro de eliminar este telefono",
          showConfirmButton: true,
          confirmButtonText: "Si, Eliminar",
          showCancelButton: true,
        }).then(async (resultSwal) => {
          if (resultSwal.isDismissed === true) {
            return;
          }
          const { data } = await quitarTelefono(id, _id, token);
          console.log(data);
          let { ok, message } = data;
          if (ok) {
            Swal.fire({
              title: "Eliminar telefono",
              text: message,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            setActualizar(true);
          } else {
            Swal.fire({
              title: "Eliminar telefono",
              text: message,
              icon: "error",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      };

      return (
        <div className="col-sm-8 etiqueta my-3 p-2">
          <div className="d-flex justify-content-between">
            <h4>Telefono</h4>
            <div>
              <ModalForm id={id} titulo={"Agregar telefono"} tipo="telefono" setActualizar={setActualizar} accion="editar" info={dato}/>
              <button className="btn btn-danger mx-1" onClick={eliminarFono}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <p>Número :</p>
              <p className="mx-1">{fono_num}</p>
            </div>
            <div className="d-flex">
              <p>Operador :</p>
              <p className="mx-1">{fono_ope}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  } else if (tipo === "estudio") {
    let { _id, est_nom, est_nvl, est_inst, est_ini, est_fin, est_sta } = dato;

    if (est_sta === "true") {
      const eliminarEstudio = () => {
        Swal.fire({
          icon: "danger",
          title: "¿Estas seguro de eliminar este estudio",
          showConfirmButton: true,
          confirmButtonText: "Si, Eliminar",
          showCancelButton: true,
        }).then(async (resultSwal) => {
          if (resultSwal.isDismissed === true) {
            return;
          }
          const { data } = await quitarEstudio(id, _id, token);
          console.log(data);
          let { ok, message } = data;
          if (ok) {
            Swal.fire({
              title: "Eliminar estudio",
              text: message,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            setActualizar(true);
          } else {
            Swal.fire({
              title: "Eliminar estudio",
              text: message,
              icon: "error",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      };

      return (
        <div className="col-sm-8 etiqueta my-3 p-2">
          <div className="d-flex justify-content-between">
            <h4>{est_nom}</h4>
            <div>
              <ModalForm id={id} titulo={"Agregar estudio"} tipo="estudio" setActualizar={setActualizar} accion="editar" info={dato}/>
              <button className="btn btn-danger mx-1" onClick={eliminarEstudio}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <p>Institucion :</p>
              <p className="mx-1">{est_inst}</p>
            </div>
            <div className="d-flex">
              <p>Nivel :</p>
              <p className="mx-1">{est_nvl}</p>
            </div>
            <div className="d-flex">
              <p>Duracion :</p>
              <p className="mx-1">
                De : {est_ini} hasta : {est_fin}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  } else if (tipo === "trabajo") {
    let { _id, trab_pue, trab_emp, trab_ini, trab_fin, trab_func, trab_sta } = dato;

    if (trab_sta === "true") {
      const eliminarTrabajo = () => {
        Swal.fire({
          icon: "danger",
          title: "¿Estas seguro de eliminar este trabajo",
          showConfirmButton: true,
          confirmButtonText: "Si, Eliminar",
          showCancelButton: true,
        }).then(async (resultSwal) => {
          if (resultSwal.isDismissed === true) {
            return;
          }
          const { data } = await quitarTrabajo(id, _id, token);
          console.log(data);
          let { ok, message } = data;
          if (ok) {
            Swal.fire({
              title: "Eliminar trabajo",
              text: message,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            setActualizar(true);
          } else {
            Swal.fire({
              title: "Eliminar trabajo",
              text: message,
              icon: "error",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      };

      return (
        <div className="col-sm-8 etiqueta my-3 p-2">
          <div className="d-flex justify-content-between">
            <h4>{trab_pue}</h4>
            <div>
              <ModalForm id={id} titulo={"Agregar trabajo"} tipo="trabajo" setActualizar={setActualizar} accion="editar" info={dato}/>
              <button className="btn btn-danger mx-1" onClick={eliminarTrabajo}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <p>Empresa :</p>
              <p className="mx-1">{trab_emp}</p>
            </div>
            <div className="d-flex">
              <p>Duracion :</p>
              <p className="mx-1">
                De : {trab_ini} hasta : {trab_fin}
              </p>
            </div>
            <div className="d-flex">
              <p>Funciones :</p>
              <p className="mx-1">{trab_func}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
