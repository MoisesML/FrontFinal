import React from "react";

export default function CVItem({ dato, tipo }) {
  if (tipo === "fono") {
    let { fono_num, fono_ope } = dato;

    return (
      <div>
          <div>
          {"# de celuar es " + fono_num + " es de la operadora " + fono_ope}
          </div>
          <button>Editar</button>
          <button>Eliminar</button>
      </div>
    );
  } else if (tipo === "estudio") {
    let { est_nom, est_nvl, est_inst, est_ini, est_fin } = dato;
    
    return (
      <div>
          <div>
              
        {"Estudie " + est_nom + " nivel " + est_nvl +" en " + est_inst + " de " + est_ini +" a " + est_fin}
          </div>
          <button>Editar</button>
          <button>Eliminar</button>
      </div>
    );
  } else if (tipo === "trabajo") {
    let { trab_pue, tran_emp, trab_ini, trab_fin, trab_func } = dato;

    return (
      <div>
          <div>
          {"Trabaje de " + trab_pue + " en la empresa " +tran_emp + " desde " +  trab_ini + " hasta " +
          trab_fin +" realizando las funciones " + trab_func}
          </div>
          <button>Editar</button>
          <button>Eliminar</button>
      </div>
    );
  }
}
