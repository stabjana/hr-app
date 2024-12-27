import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return <div>
    <h1>Page not found</h1>
    <p>Sorry, we couldn't find the page you're looking for. Please try again or contact the support.</p>
    <Button text="Back" role="primary-light" onClick={() => navigate(-1)} />
  </div>;
};

export default ErrorPage;