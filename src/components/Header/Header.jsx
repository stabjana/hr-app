import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.css";

const Header = ({ isLoggedIn, loginHandler }) => {
    const buttonText = isLoggedIn ? "Log out" : "Log in";

    return (
        <header>
            <h1>Employee dashboard</h1>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="employeesData">Employees</Link>
                        </li>
                        <li>
                            <Link to="new">Add new</Link>
                        </li>
                    </ul>
                </nav>
                {/*  <Button
                    onClick={loginHandler}
                    text={buttonText}
                    role="primary-light"
                /> */}
            </div>
        </header>
    );
};

export default Header;
