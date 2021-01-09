import React, { useState, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormFono from "./FormFono";
import FormEstudios from "./FormEstudios";
import FormTrabajo from "./FormTrabajo";
import FormPostulacion from "./FormPostulacion";

export default function ModalForm({ id, titulo, tipo, setActualizar, accion, info, informacion }) {
  const token = sessionStorage.getItem("token");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        {accion === "editar" ? <i className="fas fa-pen"></i> :  titulo }
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{accion === "editar" ? "Editar" :  titulo }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {tipo === "telefono" ? (
            <FormFono
              id={id}
              handleClose={handleClose}
              token={token}
              setActualizar={setActualizar}
              accion={accion}
              info={info}
            />
          ) : tipo === "estudio" ? (
            <FormEstudios
              id={id}
              handleClose={handleClose}
              token={token}
              setActualizar={setActualizar}
              accion={accion}
            />
          ) : tipo === "trabajo" ? (
            <FormTrabajo
              id={id}
              handleClose={handleClose}
              token={token}
              setActualizar={setActualizar}
              accion={accion}
            />
          ) : tipo === "postulacion" ? (
            <FormPostulacion
              id={id}
              informacion={informacion}
              handleClose={handleClose}
              token={token}
              setActualizar={setActualizar}
              accion={accion}
            />
          ) : tipo === "unlogin" ? (
            <Fragment>
              <div>Debes loguearte para poder postular</div>
              <Link to="/login">
                <button className="btn">Iniciar sesión</button>
              </Link>
            </Fragment>
          ) : (
            <div>Falta ingresar el tipo de dato</div>
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

//   return (
//     <div
//       className="modal fade"
//       id={id}
//       data-bs-backdrop="static"
//       data-bs-keyboard="false"
//       tabIndex="-1"
//       aria-labelledby="staticBackdropLabel"
//       aria-hidden="true"
//     >
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="staticBackdropLabel">
//               {titulo}
//             </h5>
//             <button
//               type="button"
//               className="btn"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             >
//               <i className="fas fa-times"></i>
//             </button>
//           </div>
//           <div className="modal-body">
//             {contenido}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
