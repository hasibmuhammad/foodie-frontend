import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-banner w-full h-[650px] bg-cover bg-center object-cover bg-no-repeat">
      <div className="absolute bg-black w-full h-full opacity-80"></div>
      <div className="relative flex flex-col justify-center items-center h-full space-y-5">
        <h1 className="text-white text-center text-5xl leading-snug first-letter:text-7xl first-letter:text-primary font-bold tracking-wider">
          GREAT OFFERS <br /> FOR FOODIE LIKE YOU.
        </h1>
        <Link to={"/products"}>
          <button className="btn btn-lg bg-primary border-none font-bold text-white hover:bg-black">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
