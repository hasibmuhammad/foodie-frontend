import {
  Link,
  useLoaderData,
  useParams,
  ScrollRestoration,
} from "react-router-dom";
import BrandCarousel from "../components/BrandCarousel";

const BrandDetail = () => {
  const { name } = useParams();
  const brandProducts = useLoaderData();

  console.log(brandProducts);
  return (
    <div className="my-10">
      {/* <div className="bg-green-100 w-full py-24 bg-cover bg-center object-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center h-full space-y-5">
          <h1 className="text-primary text-center text-4xl tracking-widest uppercase">
            {name}
          </h1>
        </div>
      </div> */}
      <BrandCarousel name={name} />
      <div className="my-20">
        <h1 className="text-center font-extrabold text-5xl">Products</h1>
        <div className="flex justify-center items-center">
          <hr className="mt-4 border border-b-4 border-primary w-32" />
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default BrandDetail;
