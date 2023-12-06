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
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
        loader: () => fetch("https://foodie-backend-tan.vercel.app/products"),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://foodie-backend-tan.vercel.app/products/${params.id}`),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/addbrand",
        element: (
          <PrivateRoute>
            <AddBrand />
          </PrivateRoute>
        ),
      },
      {
        path: "/brands/:name",
        element: <BrandDetail />,
        loader: ({ params }) =>
          fetch(`https://foodie-backend-tan.vercel.app/brands/${params.name}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: () => fetch("https://foodie-backend-tan.vercel.app/cart"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
