import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css"

const ErrorPage = () => {
  const navigate = useNavigate();
  return <div>
    <h1>Page not found</h1>
    <p>Sorry, we couldn't find the page you're looking for. Please try again or <a className={styles.errorLink} href="mailto:support@fake.com">contact support</a></p>

    <Button text="Back" role="primary-light" onClick={() => navigate(-1)} />
  </div>;
};

export default ErrorPage;