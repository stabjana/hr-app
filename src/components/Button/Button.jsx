import "./Button.css";

const Button = ({ onClick, type = "button", text, role = "primary" }) => {
    return (
        <button className={`btn ${role}`} type={type} onClick={onClick} > {text} </button>
    );
};

export default Button;