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
      _id,
    } = dato;
    const detalle = `/anuncio/detalle/${_id}`;
    const postulantes = anun_post.length;
    console.log(key);

    return (
      <tr>
        <th scope="row">{key}</th>
        <td>{anun_psto}</td>
        <td>{anun_desc}</td>
        <td>{postulantes}</td>
        <td>{anun_esta === "true" ? "Activo" : "Finalizado"}</td>
        <td>{anun_cont}</td>
        <td>
          <button className="btn btn-primary">
            <Link to={detalle}>Ver detalle</Link>
          </button>
        </td>
      </tr>
    );
  } else if (tipo === "cv") {
    let { post_cv, post_id } = dato;
    // const detalle = `/anuncio/detalle/${_id}`;
    console.log(key);

    return (
      <tr>
        <th scope="row">{key}</th>
        <td>{post_cv}</td>
        <td>{post_id}</td>
      </tr>
    );
  }
}
