import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-10 px-10 lg:px-0">
      <h1 className="text-center font-extrabold text-5xl">Shop By Brands</h1>
      <div className="flex justify-center items-center">
        <hr className="mt-4 border border-b-4 border-primary w-32" />
      </div>
      <div className="my-20 grid grid-cols-1 md:grid-cols-6 place-items-center gap-4">
        {brands.map((brand) => (
          <Link to={`/brands/${brand.brandName.toLowerCase()}`}>
            <div className="text-center" key={brand._id}>
              <img
                className="w-full h-24 object-cover"
                src={brand.brandPhoto}
                alt={brand.brandName}
              />
              <p className="font-semibold text-gray-500">{brand.brandName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
