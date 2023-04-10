import React from "react";
import ModalCard from "./components/ModalCard";
import ModalHeader from "./components/ModalHeader";
import ModalResult from "./components/ModalResult";
import css from "./Modal.module.css";

const basket = [1, 2, 3];

function Modal({ setModal }) {
  return (
    <div onClick={() => setModal(false)} className={css.wrapper}>
      <div onClick={(e) => e.stopPropagation()} className={css.modal}>
        {basket.length ? (
          <>
            <ModalHeader />
            <div>
              <ModalCard />
              <ModalCard />
              <ModalCard />
            </div>
            <ModalResult />
          </>
        ) : (
          "DOG"
        )}
      </div>
    </div>
  );
}

export default Modal;
