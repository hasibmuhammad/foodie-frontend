import {
  Link,
  useLoaderData,
  useParams,
  ScrollRestoration,
} from "react-router-dom";
import BrandCarousel from "../components/BrandCarousel";
import ProductCard from "../components/ProductCard";

const BrandDetail = () => {
  const { name } = useParams();
  const brandProducts = useLoaderData();

  console.log(brandProducts);
  return (
    <div className="my-10">
      <BrandCarousel name={name} />
      <div className="my-20">
        <h1 className="text-center font-extrabold text-5xl">Products</h1>
        <div className="flex justify-center items-center">
          <hr className="mt-4 border border-b-4 border-primary w-32" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 lg:px-0">
        {brandProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default BrandDetail;
