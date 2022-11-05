import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./page/Login";
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import Root from "./page/Root";
function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      path: "/",
      children: [
        {
          index: true,
          element: <Product />,
        },
        {
          element: <Login />,
          path: "/login",
        },
        {
          element: <ProductDetail />,
          path: "/products/:id",
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
