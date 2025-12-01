import React from "react";
import assets from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";


const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="flex justify-between items-center px-4 py-4 font-medium bg-white/50 sticky top-0 z-20 backdrop-blur-xl dark:bg-gray-900/70 sm:px-12 lg:px-24 xl:px-40">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="logo"
        className="w-32 sm:w-40"
      />

      <div className="flex gap-5 text-gray-700 dark:text-white sm:test-sm sm:items-center max-sm:w-60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 transition-all">
        <a href="#" className="sm:hover:border-b">
          Home
        </a>
        <a href="#services" className="sm:hover:border-b">
          Services
        </a>
        <a href="#our-work" className="sm:hover:border-b">
          Our Work
        </a>
        <a href="#contact-us" className="sm:hover:border-b">
          Contact Us
        </a>
      </div>

      <div>
        <a
          href="#contact-us"
          className="text-sm flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 max-sm:hidden transition-all"
        >
          Connect <FaArrowRight/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
