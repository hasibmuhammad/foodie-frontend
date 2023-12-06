import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://foodie-backend-tan.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-10 px-10 lg:px-0">
      <h1 className="text-center font-extrabold text-5xl">Shop By Brands</h1>
      <div className="flex justify-center items-center">
        <hr className="mt-4 border border-b-4 border-primary w-32" />
      </div>

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

      <div className="my-20 grid grid-cols-1 md:grid-cols-6 place-items-center gap-4">
        {brands.map((brand) => (
          <Link key={brand._id} to={`/brands/${brand.brandName.toLowerCase()}`}>
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
