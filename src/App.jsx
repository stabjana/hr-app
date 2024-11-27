import "./App.css";
import createRoutes from "./routes/appRoutes";
import { RouterProvider } from "react-router-dom";

function App() {
  /*   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
  }; */

  return (
    <RouterProvider
      router={createRoutes}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
