import React from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="size-9 flex items-center justify-center p-1.5 border border-gray-500 rounded-full cursor-pointer transition-all"
    >
      {theme === "dark" ? (
        <BsSun className="size-6" />
      ) : (
        <BsMoonStars className="size-6" />
      )}
    </button>
  );
};

export default ThemeToggleBtn;
