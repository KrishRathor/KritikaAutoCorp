import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#3a35aa] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Image src="/phone.png" width={50} height={50} alt="Logo" className="h-8 w-auto mr-2" />
          {/* Company Name */}
          <span className="text-white font-bold text-xl">KRITIKA AUTO CORPORATION</span>
        </div>
        {/* Center Links */}
        <div className="hidden md:flex justify-center items-center">
          <a href="/" className="text-gray-300 hover:text-white px-4">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white px-4">About</a>
          <a href="/product" className="text-gray-300 hover:text-white px-4">Product</a>
          <a href="/contact" className="text-gray-300 hover:text-white px-4">Contact</a>
        </div>
        {/* Button */}
        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Enquiry
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
