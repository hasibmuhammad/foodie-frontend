const BrandCarousel = ({ name }) => {
  const items = [
    {
      image:
        "https://i.ibb.co/6mpqmfG/annie-spratt-R3-Lcf-Tvc-GWY-unsplash.jpg",
      title: `${name} Deals`,
      button: "Shop Now",
    },
    {
      image: "https://i.ibb.co/kxVgt6V/brooke-lark-w-Mzx2n-Bdeng-unsplash.jpg",
      title: "100% Authentic",
      button: "Learn More",
    },
    {
      image:
        "https://i.ibb.co/GkXjksY/jay-wennington-N-Y88-TWm-Gw-A-unsplash.jpg",
      title: "Upto 30% Discount",
      button: "Get Discount",
    },
  ];

  return (
    <div>
      <div className="carousel w-full h-[450px]">
        {items.map((item, i) => (
          <>
            <div
              key={i}
              id={`item${i + 1}`}
              className="relative carousel-item w-full"
            >
              <div className="absolute bg-black w-full h-full opacity-60"></div>
              <div className="absolute inset-0 flex flex-col gap-8 justify-center items-center">
                <h2 className="font-extrabold text-white text-5xl text-center leading-snug first-letter:text-primary first-letter:text-7xl">
                  {item.title.toUpperCase()}
                </h2>
                <button className="btn btn-lg bg-primary border-none text-white hover:bg-black">
                  {item.button}
                </button>
              </div>
              <img src={item.image} className="w-full h-full object-cover" />
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {items.map((item, i) => (
          <a href={`#item${i + 1}`} className="btn btn-xs">
            {i + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
