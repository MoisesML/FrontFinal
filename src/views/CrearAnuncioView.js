import React from 'react';
import { useHistory } from "react-router-dom";
import FormAnuncio from '../components/FormAnuncio';
import { crearAnuncio } from '../Services/AnuncioServices';
import Swal from "sweetalert2";

export default function CrearAnuncioView() {
  const history = useHistory();

    const publicarAnuncio = async (objAnuncio) => {
        let data = await crearAnuncio(objAnuncio);
        let { message, ok } = data;
        if (ok) {
            Swal.fire({
              title: "Nuevo anuncio",
              text: message,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            history.push("/");
          } else {
            Swal.fire({
              title: "Nuevo anuncio",
              text: message,
              icon: "error",
              showConfirmButton: false,
              timer: 2000,
            });
        }
    }

    return (
        <div className="container">
            <FormAnuncio publicarAnuncio={publicarAnuncio} />
        </div>
    )
}
