import { useEffect, useState } from "react";
import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const loadedProduct = useLoaderData();
  const selectedBrand = loadedProduct.brand.toLowerCase();

  const [selected, setSelected] = useState(selectedBrand);

  console.log(loadedProduct, selectedBrand);

  const [brands, setBrands] = useState([]);

  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch("https://foodie-backend-tan.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  const onChangeHandler = (e) => {
    setSelected(e.target.value);
  };

  const handleUpdateProdct = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const desc = form.description.value;

    if (!name) {
      setError("Product Name can't be empty!");
      return;
    }

    if (!brand) {
      setError("You must select a brand for product!");
      return;
    }
    if (!type) {
      setError("You must provide a type for product!");
      return;
    }
    if (!price) {
      setError("You must provide a price for product!");
      return;
    }
    if (!photo) {
      setError("You must provide a photo for product!");
      return;
    }
    if (!rating) {
      setError("You must provide a rating for product!");
      return;
    }
    if (!desc) {
      setError("You must provide a description for product!");
      return;
    }

    const product = { name, brand, type, price, photo, rating, desc };

    fetch(`https://foodie-backend-tan.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 0) {
          Swal.fire({
            title: "Ooopps!",
            text: "You didn't udpate anything!",
            icon: "error",
          });
        }
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Congratulations!",
            text: "Product Update Successfully",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto my-20 bg-base-200 p-24 rounded-lg">
      <h1 className="text-center text-5xl font-extrabold">Update Product</h1>
      <div className="flex justify-center items-center">
        <hr className="mt-4 border border-b-4 border-primary w-32" />
      </div>

      <form className="my-10 space-y-5" onSubmit={handleUpdateProdct}>
        <div className="md:flex gap-10">
          <div className="md:w-1/2">
            <label className="font-semibold">
              Product Name
              <input
                className="form-control border rounded p-2 w-full"
                type="text"
                name="name"
                placeholder="Enter Product Name"
                required
                defaultValue={loadedProduct.name}
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="font-semibold">
              Brand
              <select
                name="brand"
                className="form-control border rounded p-2 w-full"
                value={selected}
                onChange={onChangeHandler}
                required
              >
                <option value="">Select a brand</option>
                {brands.map((brand) => (
                  <option key={brand._id} value={brand.brandName.toLowerCase()}>
                    {brand.brandName}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="md:w-1/2">
            <label className="font-semibold">
              Type
              <input
                className="form-control border rounded p-2 w-full"
                type="text"
                name="type"
                placeholder="Enter product type(i.e. Beverage)"
                required
                defaultValue={loadedProduct.type}
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="font-semibold">
              Price
              <input
                className="form-control border rounded p-2 w-full"
                type="number"
                name="price"
                placeholder="Enter Product Price"
                required
                defaultValue={loadedProduct.price}
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="md:w-1/2">
            <label className="font-semibold">
              Photo URL
              <input
                className="form-control border rounded p-2 w-full"
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
                required
                defaultValue={loadedProduct.photo}
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="font-semibold">
              Rating
              <input
                type="range"
                min="1"
                max="5"
                name="rating"
                className="range range-warning"
                step=".5"
                required
                defaultValue={loadedProduct.rating}
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </label>
          </div>
        </div>
        <div>
          <div className="md:w-1/2">
            <label className="font-semibold">
              Short Description
              <textarea
                className="form-control border rounded p-2 w-full"
                type="text"
                name="description"
                placeholder="Enter Product Description"
                rows={8}
                required
                defaultValue={loadedProduct.desc}
              ></textarea>
            </label>
          </div>
        </div>
        {error && <p className="text-warning">{error}</p>}
        <button
          type="submit"
          className="btn btn-block bg-primary text-white font-bold hover:bg-black"
        >
          Update
        </button>
      </form>
      <ScrollRestoration />
    </div>
  );
};

export default UpdateProduct;
