import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/basketSlice";
import { fetchDeletePizza } from "../../redux/slices/pizzaSlice";
import Button from "../button/Button";
import css from "./PizzaCard.module.css";

function PizzaCard({ id, name, image, description, price, isAdmin }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const res = window.confirm("Вы действительно хотите удалить " + name + "?");
    if (res) {
      dispatch( fetchDeletePizza(id) )
    }
  };

  const handleAddToBasket = () => {
    dispatch( addToBasket({ id, name, image, description, price, }) )
  }

  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img src={image} alt={name} />
      </div>
      <div className={css.name}>{name}</div>
      <p className={css.description}>{description}</p>
      <div className={css.footer}>
        <div className={css.price}>от {price} сом</div>
        {isAdmin ? (
          <Button title={"Удалить"} onClick={handleDelete} />
        ) : (
          <Button title={"В корзину"} onClick={handleAddToBasket} />
        )}
      </div>
    </div>
  );
}

export default PizzaCard;
