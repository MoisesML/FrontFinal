import React from "react";
import { Link } from "react-router-dom";

export default function TablaItem({ key, dato, tipo }) {
  if (tipo === "anuncio") {
    let {
      anun_cont,
      anun_desc,
      // anun_emId,
      // anun_empr,
      // anun_esco,
      anun_esta,
      anun_post,
      anun_psto,
      anun_inic,
      anun_fin,
      _id,
    } = dato;
    const detalle = `/anuncio/detalle/${_id}`;
    const postulantes = anun_post.length;
    var date_1 = new Date(anun_inic);
    var date_2 = new Date(anun_fin);

    var day_as_milliseconds = 86400000;
    var diff_in_millisenconds = date_2 - date_1;
    var diff_in_days = diff_in_millisenconds / day_as_milliseconds;

    console.log(diff_in_days);

    return (
      <tr>
        <th scope="row">{key}</th>
        <td>{anun_psto}</td>
        <td>{anun_desc.slice(0, 20)}</td>
        <td>{postulantes}</td>
        <td>{anun_esta === "true" ? "Activo" : "Finalizado"}</td>
        <td>{diff_in_days} dias</td>
        <td>
          <button className="btn btn-primary">
            <Link to={detalle}>Ver detalle</Link>
          </button>
        </td>
      </tr>
    );
  } else if (tipo === "cv") {
    let { post_cuvi, post_nmPe, post_esta } = dato;
    // const detalle = `/anuncio/detalle/${_id}`;
    let estado =
      post_esta === "Postulacion Enviada"
        ? "Postulacion recibida"
        : "En otra fase";
    let Enlace = post_cuvi ? (
      <a href={post_cuvi} target="_blank">
        ver CV
      </a>
    ) : (
      "No hay cv"
    );

    return (
      <tr>
        <th scope="row">{key}</th>
        <td>{post_nmPe}</td>
        <td>{estado}</td>
        <td>{Enlace}</td>
      </tr>
    );
  } else if (tipo === "postulaciones") {
    let { post_empr, post_esta, post_psto, post_idAn } = dato;
    const detalle = `/detalle/postulacion/${post_idAn}`;

    return (
      <tr>
        <th scope="row">{key}</th>
        <td>{post_psto}</td>
        <td>{post_empr}</td>
        <td>{post_esta}</td>
        <td>
          <button className="btn btn-primary">
            <Link to={detalle}>Ver detalle</Link>
          </button>
        </td>
      </tr>
    );
  }
}
