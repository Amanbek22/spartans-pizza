import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { fetchCreatePizza } from "../../redux/slices/pizzaSlice";
import css from "./CreatePizza.module.css";

function CreatePizzaPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const isCreating = useSelector((state) => state.pizza.isCreating);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCreating === "success") {
      navigate("/admin");
    }
  }, [isCreating]);

  const submit = (e) => {
    e.preventDefault();
    const data = {
      name,
      price,
      image,
      description: desc,
    };
    dispatch(fetchCreatePizza(data));
  };

  return (
    <div className="container">
      <h2 className={css.title}>Создать продукт</h2>
      <form onSubmit={submit} className={css.form}>
        <label className={css.label}>
          <div>Название</div>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={css.input}
            type="text"
            placeholder="Название продукта"
          />
        </label>
        <label className={css.label}>
          <div>Цена</div>
          <input
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={css.input}
            type="number"
            placeholder="Цена продукта"
          />
        </label>
        <label className={css.label}>
          <div>Картинка</div>
          <input
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className={css.input}
            type="text"
            placeholder="Картинка продукта"
          />
        </label>
        <label className={css.label}>
          <div>Описание</div>
          <textarea
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={css.input}
            type="text"
            placeholder="Описание продукта"
          />
        </label>
        <Button
          variant={isCreating === "pending" ? "disabled" : ""}
          disabled={isCreating === "pending"}
          title={isCreating === "pending" ? "Создание..." : "Создать"}
          type="submit"
        />
      </form>
    </div>
  );
}

export default CreatePizzaPage;
