import { FaStar, FaCartShopping, FaEye } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure>
        <img
          className="w-full h-56 object-cover rounded-lg"
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
          <div className="badge badge-accent text-white font-bold uppercase">
            {product.brand}
          </div>
          <div className="badge badge-outline">{product.type}</div>
          <div className="badge badge-outline text-warning gap-1">
            <FaStar />
            <span className="font-extrabold">{product.rating}</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap gap-4">
          <Link to={`/products/${product._id}`}>
            <button className="btn btn-warning btn-md text-white hover:bg-black">
              <FaEye className="cursor-pointer" />
              Detail
            </button>
          </Link>
          <Link to={`/update/${product._id}`}>
            <button className="btn btn-warning btn-md text-white hover:bg-black">
              <FaEdit className="cursor-pointer" />
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
