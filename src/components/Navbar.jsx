import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logos.svg";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 p-4 flex items-center justify-between sticky top-0 z-10">
                <Link to="/">
                <img src={logo} alt="Hayani Hotel" /> 
                </Link>
      <div className="flex items-center">
        <Link to="/signin">
          <button className="text-white font-medium mr-4 bg-teal-600 p-2 rounded hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-500">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="text-white font-medium bg-teal-600 p-2 rounded hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-500">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

