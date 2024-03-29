import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://foodie-backend-tan.vercel.app/cart?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://foodie-backend-tan.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setCart(cart.filter((ct) => ct._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="bg-green-100 w-full py-24 bg-cover bg-center object-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center h-full space-y-5">
          <h1 className="text-primary text-center text-4xl tracking-widest uppercase">
            Your Cart
          </h1>
        </div>
      </div>

      {!loading && cart.length === 0 && (
        <p className="text-center my-20 text-warning text-2xl">
          Your cart is empty!
        </p>
      )}

      {loading && (
        <div className="flex justify-center my-20">
          <div className="flex justify-center">
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto my-24 px-10 lg:px-0">
        {cart.map((ct) => (
          <div
            className="flex items-center my-10 gap-10 border border-primary rounded-lg p-4"
            key={ct._id}
          >
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src={ct.photo}
              alt={ct.name}
            />
            <div className="flex justify-between w-full items-center gap-8">
              <div>
                <div>
                  <h3 className="text-xl font-bold">{ct.name}</h3>
                  <small>{ct.brand.toUpperCase()}</small>
                </div>
                <p className="badge bg-primary text-white font-bold">
                  ${ct.price}
                </p>
              </div>
              <div>
                <span className="text-slate-400 text-md">X</span>
                <span className="text-md font-semibold"> {ct.amount}</span>
              </div>
              <button
                onClick={() => handleDelete(ct._id)}
                className="btn bg-primary text-white hover:bg-red-400"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
