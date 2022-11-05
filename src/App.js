import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Login from "./page/Login";
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import Root from "./page/Root";
import "bootstrap/dist/css/bootstrap.css";
import PrivateRoute from "./route/PrivateRoute";
function App() {
  const [check, setCheck] = useState();
  const [auth, setAuth] = useState(false);
  const router = createBrowserRouter([
    {
      element: <Root auth={auth} setAuth={setAuth} />,
      path: "/",
      children: [
        {
          index: true,
          element: <Product setCheck={setCheck} />,
        },
        {
          element: <Login setAuth={setAuth} />,
          path: "/login",
        },
        {
          element: <PrivateRoute check={check} auth={auth} />,
          path: "/products/:id",
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
