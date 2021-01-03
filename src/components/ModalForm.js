import React from "react";

export default function ModalForm({ id, titulo, contenido }) {
  return (
    <div
      className="modal fade"
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {titulo}
            </h5>
            <button
              type="button"
              className="btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            {contenido}
          </div>
        </div>
      </div>
    </div>
  );
}
