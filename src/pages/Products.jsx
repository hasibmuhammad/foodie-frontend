import { ScrollRestoration } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://foodie-backend-tan.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="bg-green-100 w-full py-24 bg-cover bg-center object-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center h-full space-y-5">
          <h1 className="text-primary text-center text-4xl tracking-widest uppercase">
            All Products
          </h1>
        </div>
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
      <div className="max-w-7xl mx-auto my-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 lg:px-0">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Products;
