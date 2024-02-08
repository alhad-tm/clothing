

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className="bg-transparent absolute w-full top-0 p-4"> 
      <nav className="flex items-center justify-between ">
        <div className="text-white font-bold text-xl">Milana</div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round" 
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              /> 
            </svg> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="blue"
              className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-2">
            <div   onClick={toggleMenu}  className={`h-[70px] w-[70px] mb-20 mt-12 text-3xl bg-gray-500 ${isMenuOpen ? 'block' : 'hidden'}`}>close</div>
            <a href="/" className="text-white">Home</a>
            <a href="/about" className="text-white">About</a>
            <a href="/collections" className="text-white">Collections</a>
            <a href="/contact" className="text-white">Contact</a>
          </div>
        </div>
        <div className={`hidden md:flex space-x-4`}>
          <a href="/" className="text-white">Home</a>
          <a href="/about" className="text-white">About</a>
          <a href="/collections" className="text-white">Collections</a>
          <a href="/contact" className="text-white">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
