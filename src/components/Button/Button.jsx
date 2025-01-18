import css from "./Button.module.css";

const Button = ({ size = "medium", children, onClick }) => {
    return (
        <button type="button" className={`${css.button} ${css[`button--${size}`]}`} onClick={onClick}>{ children }</button>
    )
}

export default Button