import styles from "./Button.module.css";

const Button = ({ onClick, type = "button", text, role = "primary" }) => {
    return (
        <button className={` ${styles.btn} ${styles[role]}`} type={type} onClick={onClick} > {text} </button>
    );
};

export default Button;