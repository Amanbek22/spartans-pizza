import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import Button from "../button/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={css.wrapper + " container"}>
      <header>
        <Link to="/">
          <img width={"200px"} src={logo} alt="PIZZA" />
        </Link>
      </header>
      <nav>
        <Link to="/">Пиццы</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="aboutus">О нас</Link>
        <Button title={"Корзина"} />
        {/* <Button title={"Корзина 2"} variant="secondary"/>
            <Button title={"Корзина 2"} variant="disabled"/> */}
      </nav>
    </div>
  );
}

export default Header;
