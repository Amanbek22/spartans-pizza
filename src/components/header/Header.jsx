import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { incremented } from "../../redux";

function Header() {
  const [isModal, setModal] = useState(false);
  const number = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  const handlePlus = () => {
    dispatch( incremented() )
  }

  return (
    <div className={css.wrapper + " container"}>
      <header>
        <Link to="/">
          <img width={"200px"} src={logo} alt="PIZZA" />
        </Link>
          {number}
          <button onClick={handlePlus}>Plus</button>
          <button >Minus</button>
      </header>
      <nav>
        <Link to="/">Пиццы</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="aboutus">О нас</Link>
        <Button onClick={() => setModal(!isModal)} title={"Корзина"} />
        {isModal ? <Modal setModal={setModal} /> : null}
      </nav>
    </div>
  );
}

export default Header;
