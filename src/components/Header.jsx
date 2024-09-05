import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBasket3 } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-amber-950 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative mt-5 h-20">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-amber-700 "
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="grid grid-cols-8">
            <div className="col-span-2 flex item-center">
              <Link to="/" className="text-4xl font-bold ">
                {" "}
                CAKEHUT <span className="text-amber-600">.</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 text-lg col-span-5">
              <Link
                to="/cakes"
                className="text-amber-950 hover:bg-amber-900 hover:text-white px-3 py-2 rounded-md font-medium"
              >
                CAKES
              </Link>
              <Link
                to="/breads"
                className="text-amber-950 hover:bg-amber-900 hover:text-white px-3 py-2 rounded-md font-medium"
              >
                BREADS
              </Link>
              <Link
                to="/desserts"
                className="text-amber-950 hover:bg-amber-900 hover:text-white px-3 py-2 rounded-md font-medium"
              >
                DESSERTS
              </Link>
              <Link
                to="/aboutus"
                className="text-amber-950 hover:bg-amber-900 hover:text-white px-3 py-2 rounded-md font-medium"
              >
                ABOUT US
              </Link>
              <Link
                to="/contactus"
                className="text-amber-950 hover:bg-amber-900 hover:text-white px-3 py-2 rounded-md font-medium"
              >
                CONTACT
              </Link>
            </div>
            <div className="flex items-center justify-end text-2xl ">
              <Link
                to={"/cart"}
                className="text-black px-3 py-2 rounded-full bg-white"
              >
                <BsBasket3 className="bg-transparent" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">...</div>
      </div>
    </nav>
  );
};

export default Header;
