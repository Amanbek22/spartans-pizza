import css from "./Button.module.css";

function Button({ title, variant }) {
  return (
    <button
      className={`
      ${css.wrapper} 
      ${variant === "secondary" ? css.secondary : ""} 
      ${variant === "disabled" ? css.disabled : ""}`}
    >
      {title}
    </button>
  );
}

export default Button;
