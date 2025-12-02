import React, { useState } from "react";
import assets from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 py-4 font-medium bg-white/50 sticky top-0 z-20 backdrop-blur-xl dark:bg-gray-900/70 sm:px-12 lg:px-24 xl:px-40">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="logo"
        className="w-32 sm:w-40"
      />

      <div
        className={`flex gap-5 text-gray-700 dark:text-white sm:text-sm sm:items-center ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : " max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 transition-all`}
      >
        <IoMdClose
          onClick={() => {
            setsidebarOpen(false);
          }}
          className="text-3xl absolute right-4 top-4 sm:hidden"
        />

        <a
          onClick={() => {
            setsidebarOpen(false);
          }}
          href="#"
          className="sm:hover:border-b-2"
        >
          Home
        </a>
        <a
          onClick={() => {
            setsidebarOpen(false);
          }}
          href="#services"
          className="sm:hover:border-b-2"
        >
          Services
        </a>
        <a
          onClick={() => {
            setsidebarOpen(false);
          }}
          href="#our-work"
          className="sm:hover:border-b-2"
        >
          Our Work
        </a>
        <a
          onClick={() => {
            setsidebarOpen(false);
          }}
          href="#contact-us"
          className="sm:hover:border-b-2"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <HiOutlineBars3BottomRight
          className="sm:hidden text-3xl text-black dark:text-white"
          onClick={() => {
            setsidebarOpen(true);
          }}
        />

        <a
          href="#contact-us"
          className="text-sm flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 max-sm:hidden transition-all"
        >
          Connect <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
