import React from "react";
import "./modal.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
