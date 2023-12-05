import { FaCartShopping, FaStar } from "react-icons/fa6";
import { ScrollRestoration, useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const product = useLoaderData();
  console.log(product);
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

          <form className="space-y-5">
            <div className="flex items-center gap-5">
              <label className="font-bold">Quantity</label>
              <input
                type="number"
                className="border border-black rounded-md p-2"
                min={1}
                max={10}
                defaultValue={1}
              />
            </div>
            <button className="btn btn-block btn-outline">
              <FaCartShopping className="cursor-pointer" />
              Add To Cart
            </button>
          </form>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default ProductDetail;
