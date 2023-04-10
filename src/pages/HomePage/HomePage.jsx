import { useState } from "react";
import { useEffect } from "react";
import PizzaCard from "../../components/pizzaCard/PizzaCard";
import Slider from "../../components/slider/Slider";
import css from "./Homepage.module.css";
import LoadingBar from 'react-top-loading-bar'
import { getPizzas } from "../../api/Api";

function HomePage() {
  const [pizzas, setPizzas] = useState([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(30)
    setTimeout(() => {
      setProgress(60)
    }, 350)

    getPizzas()
      .then((res) => setPizzas(res.data))
      .finally(() => {
        setProgress(100)
      })
  }, [])

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
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
