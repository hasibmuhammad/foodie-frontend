import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className="bg-green-100 w-full py-24 bg-cover bg-center object-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center h-full space-y-5">
          <h1 className="text-primary text-center text-4xl tracking-widest uppercase">
            All Products
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 lg:px-0">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
