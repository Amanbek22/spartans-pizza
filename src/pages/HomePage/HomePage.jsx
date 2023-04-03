import PizzaCard from "../../components/pizzaCard/PizzaCard";
import Slider from "../../components/slider/Slider";
import css from "./Homepage.module.css";

const pizzasArr = [
  {
    id: "1",
    name: "Пеперони",
    description: "Соберите свою пиццу 35 см с двумя разными вкусами",
    price: 580,
    image:
      "https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png",
  },
  {
    id: "2",
    name: "Пеперони 2",
    description: "Соберите свою пиццу 35 см с двумя разными вкусами",
    price: 580,
    image:
      "https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png",
  },
];

function HomePage() {
  return (
    <div>
      <Slider />
      <br />
      <br />
      <br />
      <br />
      <section className="container">
        <div className="title">Пицца</div>
        <div className={css.pizzasWrapper}>
          {pizzasArr.map((item) => (
            <PizzaCard key={item.id} {...item}  />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
