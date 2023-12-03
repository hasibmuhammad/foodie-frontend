import { FaRocket, FaCarSide, FaCircleDollarToSlot } from "react-icons/fa6";

const WhyChoose = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-1 px-10 my-24">
      <div className="my-10">
        <h1 className="text-center font-extrabold text-5xl">Why Choose Us?</h1>
        <div className="flex justify-center items-center">
          <hr className="mt-4 border border-b-4 border-primary w-32" />
        </div>
      </div>
      <div className="bg-primary p-10 rounded-lg flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-around">
        <div className="flex items-center gap-4 text-white ">
          <FaCarSide className="text-3xl" />
          <div>
            <h3 className="font-extrabold uppercase">Free Shipping</h3>
            <p className="font-normal text-sm">
              Free Shipping on all orders over $100
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white ">
          <FaRocket className="text-3xl" />
          <div>
            <h3 className="font-extrabold uppercase">Ultra-Fast Delivery</h3>
            <p className="font-normal text-sm">
              Get ultra-fast delivery across the country
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white ">
          <FaCircleDollarToSlot className="text-3xl" />
          <div>
            <h3 className="font-extrabold uppercase">Refund Policy</h3>
            <p className="font-normal text-sm">
              Get refund anytime with proper reasoning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
