import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then((res) => console.log(res));
  };
  const menus = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      {user && (
        <>
          <NavLink to={"/addproduct"}>Add Product</NavLink>
          <NavLink to={"/addbrand"}>Add Brands</NavLink>
          <NavLink to={"/cart"}>My Cart</NavLink>
        </>
      )}
      {user ? (
        <Link onClick={handleLogout}>Log Out</Link>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] px-10 space-y-3 shadow bg-base-100 rounded-box w-36"
          >
            {menus}
          </ul>
        </div>
        <div className="">
          <Link to={"/"} className="tracking-widest text-4xl font-extrabold">
            F<span className="text-primary">o</span>o
            <span className="text-primary">d</span>ie
          </Link>
        </div>
      </div>
      <div className={`navbar-center hidden md:flex ${!user && "navbar-end"}`}>
        <ul className="menu menu-horizontal px-1 flex items-center gap-8 text-lg">
          {menus}
        </ul>
      </div>
      {user && (
        <div className={user && "navbar-end"}>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="">Hi, {user?.displayName}</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
    // <div className="navbar bg-base-100 justify-between items-center flex-col md:flex-row gap-4 md:gap-0 my-5">
    //   <div className="">
    //     <Link to={"/"} className="tracking-widest text-4xl font-extrabold">
    //       F<span className="text-primary">o</span>o
    //       <span className="text-primary">d</span>ie
    //     </Link>
    //   </div>
    //   <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-gray-500 text-lg">
    //     {menus}
    //   </div>
    //   {user && (
    //     <div className="flex-none">
    //       <div className="dropdown dropdown-end">
    //         <div
    //           tabIndex={0}
    //           role="button"
    //           className="btn btn-ghost btn-circle avatar"
    //         >
    //           <div className="w-10 rounded-full">
    //             <img src={user?.photoURL} />
    //           </div>
    //         </div>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    //         >
    //           <li>
    //             <a className="">Hi, {user?.displayName}</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default Navbar;
