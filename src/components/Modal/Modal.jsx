import React from "react";
import "./modal.css";

function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? `modal active` : `modal`}
      onClick={() => {
        console.log(active);
        setActive(false);
      }}
    >
      <div
        className={active ? `modal_content active` : `modal_content`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;