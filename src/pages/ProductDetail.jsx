import { useState } from "react";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import {
  ScrollRestoration,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const success = () => toast.success("Added to cart!");
  const error = () => toast.error("Already added to cart!");

  const handleAddToCart = (e) => {
    e.preventDefault();

    const cart = { ...product };

    fetch("https://foodie-backend-tan.vercel.app/addcart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          success();
        }
        if (data.alreadyExist) {
          error();
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-10 lg:px-0 my-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 lg:justify-around">
        <img
          className="w-full lg:w-1/3 object-cover rounded-lg"
          src={product.photo}
          alt=""
        />
        <div className="space-y-4">
          <div>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <div className="">
              <hr className="mt-4 border border-b-4 border-primary w-32" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">${product.price}</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="badge badge-outline text-warning gap-1">
              <FaStar />
              <span className="font-extrabold">{product.rating}</span>
            </div>
            <div className="badge badge-accent uppercase text-white gap-1">
              <span className="font-bold">{product.brand}</span>
            </div>
            <div className="badge badge-outline gap-1">
              <span className="font-semibold">{product.type}</span>
            </div>
          </div>
          <p>{product.desc}</p>

          <form onSubmit={handleAddToCart} className="space-y-5">
            <button type="submit" className="btn btn-block btn-outline">
              <FaCartShopping className="cursor-pointer" />
              Add To Cart
            </button>
          </form>
        </div>
      </div>
      <ScrollRestoration />
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
