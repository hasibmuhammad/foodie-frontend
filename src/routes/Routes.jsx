import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import AddBrand from "../pages/AddBrand";
import Login from "../pages/Login";
import Products from "../pages/Products";
import BrandDetail from "../pages/BrandDetail";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

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
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
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
        path: "/brands/:name",
        element: <BrandDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brands/${params.name}`),
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
