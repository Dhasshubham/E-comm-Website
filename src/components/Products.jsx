import { Link } from "react-router-dom";
import shoes from "../assets/Shoess.jpg";
import PumaShoes from "../assets/PumaShoes.png";
import Sports from "../assets/Sports.png";
import CasualShoes from "../assets/CasualShoes.png";

const products = [
  {
    id: 1,
    name: "Sneaker | Soft Cushioned Insole, Slip-Resistance Training & Gym Running Shoes For Men  (Navy, Orange , 7)",
    price: "$299.43",
    oldPrice: "$534.33",
    discount: "24% Off",
    img: shoes,
    hot: true,
    description: "High-performance running shoes with breathable design.",
  },
  {
    id: 2,
    name: "Axelion Two-tone Wide Running Shoes For Men (Green)",
    price: "$199.99",
    oldPrice: "$299.99",
    discount: "30% Off",
    img: PumaShoes,
    hot: true,
    description: "Durable, stylish, and lightweight everyday carry bag.",
  },
  {
    id: 3,
    name: "Men?s Synthetic leather Shoes | Office & Party Wear Lace?Up Design Casuals For Men  (White , 7)",
    price: "$130.00",
    oldPrice: "$270.00",
    discount: "57% Off",
    img: Sports,
    hot: true,
    description: "Elegant leather belt, perfect for casual and formal wear.",
  },
  {
    id: 4,
    name: "Casual Sneaker Shoes for Men | Soft Cushioned Insole || Mexico-02 Sneakers For Men  (light Blue , 9)",
    price: "$853.00",
    oldPrice: "$1499.00",
    discount: "43% Off",
    img: CasualShoes,
    hot: true,
    description: "Timeless design watch with premium build quality.",
  },
];

const Products = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Top Deals</h2>
        <span className="text-gray-500">Showing {products.length} items</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition min-h-[320px]"
          >
            {product.hot && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md shadow">
                HOT
              </span>
            )}

            <img
              src={product.img}
              alt={product.name}
              className="w-full h-50 object-cover rounded-md mb-4"
            />

            {/* Name & Prices */}
            <h3 className="text-md font-semibold line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-blue-600 font-bold">{product.price}</span>
              <span className="line-through text-gray-400 text-sm">
                {product.oldPrice}
              </span>
              <span className="text-red-500 text-sm">{product.discount}</span>
            </div>

            {/* View Details Button */}
            <Link
              to={`/product/${product.id}`}
              className="inline-block mt-4 text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
