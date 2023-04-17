import PizzaCard from "../../components/pizzaCard/PizzaCard";
import Slider from "../../components/slider/Slider";
import css from "./Homepage.module.css";
import LoadingBar from 'react-top-loading-bar'
import { useSelector } from "react-redux";

function HomePage() {
  const { progress, pizzaData: pizzas, error } = useSelector((state) => state.pizza)

  if(error) return <h1>Что то пошло не так!</h1>
  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => {}}
      />
      <Slider />
      <br />
      <br />
      <br />
      <br />
      <section className="container">
        <div className="title">Пицца</div>
        <div className={"pizzasWrapper"}>
          {pizzas.map((item) => (
            <PizzaCard key={item.id} {...item}  />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
