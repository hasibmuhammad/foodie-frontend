import { useState } from "react";
import Swal from "sweetalert2";

const AddBrands = () => {
  const [error, setError] = useState("");

  const handleAddBrand = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;
    const brandName = form.name.value;
    const brandPhoto = form.photo.value;

    if (!brandName || !brandName.length > 0) {
      setError("Brand Name can't be empty!");
      return;
    }

    if (!brandPhoto) {
      setError("Brand Image can't be empty");
      return;
    }

    const brand = { brandName, brandPhoto };

    // Submit to the server
    fetch("http://localhost:5000/addbrand", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brand),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "Brand Added Successfully",
            icon: "success",
          });

          form.reset();
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto bg-base-200 p-24 rounded-lg translate-y-24">
      <h1 className="text-center text-5xl font-extrabold">Add a brand</h1>
      <div className="flex justify-center items-center">
        <hr className="mt-4 border border-b-4 border-primary w-32" />
      </div>

      <form onSubmit={handleAddBrand} className="my-10 space-y-4">
        <div className="md:flex flex-col gap-4">
          <div className="w-full">
            <label className="font-semibold">
              Brand Name
              <input
                className="form-control border rounded p-2 w-full"
                type="text"
                name="name"
                placeholder="Enter Brand Name"
                required
              />
            </label>
          </div>
          <div className="w-full">
            <label className="font-semibold">
              Brand Image URL
              <input
                className="form-control border rounded p-2 w-full"
                type="url"
                name="photo"
                placeholder="Enter Brand Image URL"
                required
              />
            </label>
          </div>
        </div>
        {error && <p className="text-warning">{error}</p>}
        <button
          type="submit"
          className="btn btn-block bg-primary text-white font-bold hover:bg-black"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBrands;
