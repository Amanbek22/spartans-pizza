import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import {useState} from "react";
import Modal from "../modal/Modal";

function Header() {
    const [isModal, setModal] = useState(false);

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
        <Button onClick={() => setModal(!isModal)} title={"Корзина"} />
          {
              isModal ? <Modal setModal={setModal} /> : null
          }

      </nav>
    </div>
  );
}

export default Header;
