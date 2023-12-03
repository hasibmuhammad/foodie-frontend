import { useLoaderData } from "react-router-dom";

const BrandDetail = () => {
  const brandProducts = useLoaderData();

  console.log(brandProducts);
  return <div>BrandDetail</div>;
};

export default BrandDetail;
