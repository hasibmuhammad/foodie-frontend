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
import UpdateProduct from "../pages/UpdateProduct";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
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
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://foodie-backend-tan.vercel.app/products/${params.id}`),
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
