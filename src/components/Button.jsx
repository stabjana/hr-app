const Button = ({ onClick, type = "button", text, role }) => {
    return <button type={type} onClick={onClick} > {text} </button>
};

export default Button;