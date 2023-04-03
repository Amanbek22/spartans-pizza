import { base_url } from "../../constants/api_const";
import Button from "../button/Button";
import css from "./PizzaCard.module.css";

function PizzaCard({ id, name, image, description, price, isAdmin }) {
  const handleDelete = () => {
    const res = window.confirm("Вы действительно хотите удалить " + name + "?");
    if (res) {
      fetch(base_url + "pizza/" + id, {
        method: "DELETE",
      }).then(() => {
        window.location.reload()
      })
    }
  };

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
          <Button title={"В корзину"} />
        )}
      </div>
    </div>
  );
}

export default PizzaCard;
