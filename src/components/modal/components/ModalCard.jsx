import css from "./../Modal.module.css";

function ModalCard() {
  return (
    <div className={css.card}>
      <div>Name</div>
      <div>Price</div>
    </div>
  )
}

export default ModalCard