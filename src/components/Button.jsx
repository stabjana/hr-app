const Button = ({ onClick, type = "button", text, role }) => {
    return <button role={role} type={type} onClick={onClick} > {text} </button>
};

export default Button;