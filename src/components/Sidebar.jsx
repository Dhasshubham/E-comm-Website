import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState({
    hotDeals: true,
    prices: true,
    colors: true,
    brand: true,
  });

  const toggleCategory = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const hotDeals = ["Puma", "Airmax", "Campus", "Vans", "Asian", "All Stars"];
  const brands = ["Nike", "Adidas", "Puma", "Bata", "Campus"];

  return (
    <>
      <button
        className="md:hidden p-3 m-2 bg-orange-500 text-white rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-50 shadow-md p-5 space-y-6 transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block`}
      >
        <div className="flex justify-between items-center md:hidden mb-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className="p-2 text-gray-600 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCategory("hotDeals")}
          >
            <h2 className="text-lg font-bold">Hot Deals</h2>
            {expanded.hotDeals ? <ChevronUp /> : <ChevronDown />}
          </div>

          {expanded.hotDeals && (
            <ul className="mt-3 space-y-2 text-black">
              {hotDeals.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between hover:text-red-700 cursor-pointer"
                >
                  <span>{item}</span>{" "}
                  <span>{Math.floor(Math.random() * 50)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCategory("prices")}
          >
            <h2 className="text-lg font-bold">Prices</h2>
            {expanded.prices ? <ChevronUp /> : <ChevronDown />}
          </div>

          {expanded.prices && (
            <>
              <p className="text-gray-500 text-sm mt-2">
                Range: $13.99 – $25.99
              </p>
              <input type="range" min="10" max="50" className="w-full mt-2" />
            </>
          )}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCategory("colors")}
          >
            <h2 className="text-lg font-bold">Color</h2>
            {expanded.colors ? <ChevronUp /> : <ChevronDown />}
          </div>

          {expanded.colors && (
            <div className="flex space-x-3 mt-3">
              <span className="w-6 h-6 rounded-full bg-black cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-pink-400 cursor-pointer"></span>
            </div>
          )}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCategory("brand")}
          >
            <h2 className="text-lg font-bold">Brand</h2>
            {expanded.brand ? <ChevronUp /> : <ChevronDown />}
          </div>

          {expanded.brand && (
            <ul className="mt-3 space-y-2 text-gray-600">
              {brands.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between hover:text-red-700 cursor-pointer"
                >
                  <span>{item}</span>{" "}
                  <span>{Math.floor(Math.random() * 70)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:text-black-50">
          MORE
        </div>
        
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
