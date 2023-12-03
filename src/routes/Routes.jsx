import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import AddBrand from "../pages/AddBrand";
import Login from "../pages/Login";
import Products from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/addbrand",
        element: <AddBrand />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
