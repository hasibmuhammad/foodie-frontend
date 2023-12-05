import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const loadedCart = useLoaderData();
  const [cart, setCart] = useState(loadedCart);

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
        fetch(`http://localhost:5000/cart/${id}`, {
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

      {cart.length === 0 && (
        <p className="text-center my-20 text-warning text-2xl">
          Your cart is empty!
        </p>
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
