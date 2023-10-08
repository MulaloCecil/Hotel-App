import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Quick Links */}
        <div className="text-gray-600">
          <a href="#" className="mr-4 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="mr-4 hover:text-gray-800">
            About
          </a>
          <a href="#" className="mr-4 hover:text-gray-800">
            Services
          </a>
          <a href="#" className="mr-4 hover:text-gray-800">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-600">&copy; {new Date().getFullYear()} Hayani Hotel</div>

        {/* Social Media Links */}
        <div className="text-gray-600 flex flex-row">
          <a href="#" className="mr-2 hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" className="mr-2 hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="#" className="mr-2 hover:text-blue-500">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;