import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/books.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }

    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-gray-700 shadow-md sticky top-0 z-50">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="container mx-auto relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start flex-1">
            <img src={logo} alt="Kitap Sitesi" className="h-10" />
          </div>

          <div className="hidden sm:flex sm:space-x-2">
            <NavLink
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              activeclassname="bg-gray-900 text-white"
              onClick={handleClick}
            >
              Ana Sayfa
            </NavLink>
            <NavLink
              to="/BestSeller"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              activeclassname="bg-gray-900 text-white"
              onClick={handleClick}
            >
              Çok Satanlar
            </NavLink>
            <NavLink
              to="/About"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              activeclassname="bg-gray-900 text-white"
              onClick={handleClick}
            >
              Hakkımızda
            </NavLink>
            <NavLink
              to="/Books"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              activeclassname="bg-gray-900 text-white"
              onClick={handleClick}
            >
              Kitaplar
            </NavLink>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Menüyü aç/kapat</span>
              {/* Hamburger ikonu */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Kapatma ikonu (mobil) */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
        </div>
      </div>
      {/* Mobil menü */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeclassname="bg-gray-900 text-white"
            onClick={handleClick}
          >
            Ana Sayfa
          </NavLink>
          <NavLink
            to="/BestSeller"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeclassname="bg-gray-900 text-white"
            onClick={handleClick}
          >
            Çok Satanlar
          </NavLink>
          <NavLink
            to="/About"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeclassname="bg-gray-900 text-white"
            onClick={handleClick}
          >
            Hakkımızda
          </NavLink>
          <NavLink
            to="/Books"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeclassname="bg-gray-900 text-white"
            onClick={handleClick}
          >
            Kitaplar
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
