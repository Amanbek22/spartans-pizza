import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { base_url } from "../../constants/api_const";
import css from "./CreatePizza.module.css"

function CreatePizzaPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [isSending, setSending] = useState(false);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setSending(true)
    fetch(base_url + 'pizza', {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify({ 
        name,
        price,
        image,
        description: desc
      })
    })
      .finally(() => {
        setSending(false)
      })
      .then((res) => {
        if(res.status === 201) {
          navigate('/admin')
        }
      })


  }

  return (
    <div className="container">
      <h2 className={css.title}>Создать продукт</h2>
      <form onSubmit={submit} className={css.form}>
        <label className={css.label}>
          <div>Название</div>
          <input required value={name} onChange={(e) => setName(e.target.value)} className={css.input} type="text" placeholder="Название продукта" />
        </label>
        <label className={css.label}>
          <div>Цена</div>
          <input required value={price} onChange={(e) => setPrice(e.target.value)} className={css.input} type="number" placeholder="Цена продукта" />
        </label>
        <label className={css.label}>
          <div>Картинка</div>
          <input required value={image} onChange={(e) => setImage(e.target.value)} className={css.input} type="text" placeholder="Картинка продукта" />
        </label>
        <label className={css.label}>
          <div>Описание</div>
          <textarea required value={desc} onChange={(e) => setDesc(e.target.value)} className={css.input} type="text" placeholder="Описание продукта" />
        </label>
        <Button 
          variant={isSending ? 'disabled' : ''} 
          disabled={isSending} 
          title={ isSending ? "Создание..." : "Создать"} 
          type="submit" 
        />
      </form>
    </div>
  )
}

export default CreatePizzaPage