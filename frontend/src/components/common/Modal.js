import React from "react";

const Modal = ({ title, msg }) => {
    function closeModal() {
        const modal = document.querySelector(".modal");
        const backdrop = document.querySelector(".modal__backdrop");
        modal.classList.remove("modal--show");
        backdrop.classList.remove("modal__backdrop--show");
    }
  return (
    <>
      <div className="modal__backdrop" onClick={() => closeModal()}></div>
      <div className="modal">
        <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <p className="modal__text">{msg}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
