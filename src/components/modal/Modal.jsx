import React from "react";
import { useSelector } from "react-redux";
import ModalCard from "./components/ModalCard";
import ModalHeader from "./components/ModalHeader";
import ModalResult from "./components/ModalResult";
import css from "./Modal.module.css";


function Modal({ setModal }) {
  const basket = useSelector((state) => state.basket.data)
  return (
    <div onClick={() => setModal(false)} className={css.wrapper}>
      <div onClick={(e) => e.stopPropagation()} className={css.modal}>
        {basket.length ? (
          <>
            <ModalHeader count={basket.length} />
            <div className={css.cardsWrapper}>
              {
                basket?.map((item) => <ModalCard key={item.id} {...item} />)
              }
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
