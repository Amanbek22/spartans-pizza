import PizzaCard from "../../components/pizzaCard/PizzaCard";
import LoadingBar from "react-top-loading-bar";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminPage() {
  const { progress, pizzaData: pizzas, error } = useSelector((state) => state.pizza)

  if(error) return <h1>Что то пошло не так!</h1>
  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => {}}
      />
      <section className="container">
        <Link to="/create-pizza">
            <Button title="+ Добавить пиццу" />
        </Link>
        <div className="title">Пицца</div>
        <div className={"pizzasWrapper"}>
          {pizzas.map((item) => (
            <PizzaCard key={item.id} {...item} isAdmin={true} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdminPage;
