import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/slices/basketSlice";
import css from "./../Modal.module.css";

function ModalCard({ name, price, id } ) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch( deleteProduct(id) )
  } 

  return (
    <div className={css.card}>
      <div>{name}</div>
      <div>{price} сом</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ModalCard