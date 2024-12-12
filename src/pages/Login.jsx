import { useState } from "react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";


const Login = ({ loginHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkCredentials = (e) => {
    e.preventDefault();
    if (
      username.toLowerCase() === "steffi" &&
      password.toLowerCase() === "test"
    ) {
      loginHandler();
      navigate("/employeesData");
    }
    else {
      alert("use correct credentials");
    }
  };

  return (
    <div /* className={styles.loginContainer} */>
      <form /* className={styles.loginForm} */ onSubmit={checkCredentials}>
        <p>Log in</p>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          />
        </div>{" "}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <Button text="Log in" type="submit" />
      </form>
    </div>
  )
};

export default Login;
