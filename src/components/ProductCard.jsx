import { FaStar, FaCartShopping, FaEye } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure>
        <img
          className="w-full h-60 object-cover"
          src={product.photo}
          alt={product.name}
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">{product.name}</h2>
        <div className="card-actions">
          <div className="badge badge-secondary uppercase font-bold">
            ${product.price}
          </div>
          <div className="badge badge-accent text-white font-bold">
            {product.brand}
          </div>
          <div className="badge badge-outline">{product.type}</div>
          <div className="badge badge-outline text-warning gap-1">
            <FaStar />
            <span className="font-extrabold">{product.rating}</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap gap-4 text-lg">
          <button className="btn btn-warning btn-xs">
            <FaEye className="cursor-pointer" />
            Vew Detail
          </button>
          <button className="btn btn-warning btn-xs">
            <FaCartShopping className="cursor-pointer" />
            Add To Cart
          </button>
          <button className="btn btn-warning btn-xs">
            <FaEdit className="cursor-pointer" />
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
