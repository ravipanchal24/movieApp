import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-blue-400 flex justify-around items-center gap-[5rem] fixed top-0 w-[100%] z-[2] h-16">
      <div className="fa-solid fa-clapperboard fa-2x"></div>
      <ul className="flex items-center gap-8 ">
        <Link to="/movies">
          <li className="hover:bg-black hover:text-white p-2 cursor-pointer rounded-lg transition ease-in-out duration-300">
            Movies
          </li>
        </Link>
        <Link to="/tv">
          <li className="hover:bg-black hover:text-white p-2 cursor-pointer rounded-lg transition ease-in-out duration-300">
            TV Shows
          </li>
        </Link>
        <Link to="/liked">
          <li className="hover:bg-black hover:text-white p-2 cursor-pointer rounded-lg transition ease-in-out duration-300">
            Liked
          </li>
        </Link>
        <Link to='/watchLater'>
          <li className="hover:bg-black hover:text-white p-2 cursor-pointer rounded-lg transition ease-in-out duration-300">
            Watch Later
          </li>
        </Link>
        <li className="hover:bg-black hover:text-white p-2 cursor-pointer rounded-lg transition ease-in-out duration-300"></li>
      </ul>
      <ul className="flex items-center content-center gap-10 h-full p-5">
        <Link to='/'>
          <li className="hover:bg-black hover:text-white p-2 cursor-pointer rounded-lg transition ease-in-out duration-300">
            Home
          </li>
        </Link>
        <Link to='/aboutUs'>
          <li className="hover:bg-black hover:text-white p-2 cursor-pointer rounded-lg transition ease-in-out duration-300">
            About Us
          </li>
        </Link>
        <Link to='/contactUs'>
          <li className="hover:bg-black hover:text-white p-2 cursor-pointer rounded-lg transition ease-in-out duration-300">
            Contact Us
          </li>
        </Link>
      </ul>
    </div >
  );
};

export default Navbar;
