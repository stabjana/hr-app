import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root.jsx";
import List from "../pages/List/List.jsx";
import Form from "../pages/Form/Form.jsx";
import Login from "../pages/Login/Login.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import SinglePage from "../pages/SinglePage/SinglePage";


const createRoutes = (isLoggedIn, loginHandler) => {
  return createBrowserRouter(
    [
      {
        path: "/",
        element: isLoggedIn ? (
          <Root isLoggedIn={isLoggedIn} loginHandler={loginHandler} />
        ) : (
          <Login loginHandler={loginHandler} />
        ),
        errorElement: <ErrorPage />,
        children: [
          { path: "/employeesData", element: <List /> },
          { path: "/employeesData/:id", element: <SinglePage /> },
          { path: "/new", element: <Form /> },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
};

export default createRoutes;
