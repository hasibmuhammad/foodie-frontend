import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menus = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      <NavLink to={"/addproduct"}>Add Product</NavLink>
      <NavLink to={"/addbrand"}>Add Brands</NavLink>
      <NavLink to={"/cart"}>My Cart</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 justify-between items-center flex-col md:flex-row gap-4 md:gap-0 my-5">
      <div className="">
        <Link to={"/"} className="tracking-widest text-4xl font-extrabold">
          F<span className="text-primary">o</span>o
          <span className="text-primary">d</span>ie
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-gray-500 text-lg">
        {menus}
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
