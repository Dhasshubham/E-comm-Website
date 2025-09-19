import { useState } from "react";
import logo from "../assets/e-comm.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center px-7 py-3">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-orange-600">E-Comm</h1>
        </div>

        <ul className="hidden md:flex space-x-9 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-orange-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-600 transition">
              Bag
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-600 transition">
              Shoes
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-600 transition">
              Belt
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-600 transition">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-6">
          <button className="relative hidden md:block">
            <span className="text-2xl">🛒</span>
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <span className="hidden md:block text-gray-700 font-medium">
            $0.00
          </span>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 px-8 py-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-orange-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-orange-600">
            Bag
          </a>
          <a href="#" className="block text-gray-700 hover:text-orange-600">
            Sneakers
          </a>
          <a href="#" className="block text-gray-700 hover:text-orange-600">
            Belt
          </a>
          <a href="#" className="block text-gray-700 hover:text-orange-600">
            Contact
          </a>

          <div className="flex items-center space-x-4 border-t pt-4">
            <button className="relative">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
            <span className="text-gray-700 font-medium">$0.00</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
