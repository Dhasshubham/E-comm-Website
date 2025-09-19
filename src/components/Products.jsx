import shoes from "../assets/Shoess.jpg";
import bag from "../assets/Bag.jpg";
import belt from "../assets/Belt.jpg";
import Watch from "../assets/Watch.jpg";

const products = [
  {
    id: 1,
    name: "Asian Air Max 270",
    price: "$299.43",
    oldPrice: "$534.33",
    discount: "24% Off",
    img: shoes,
    hot: true,
  },
  {
    id: 2,
    name: "Small 11 L Bag",
    price: "$199.99",
    oldPrice: "$299.99",
    discount: "30% Off",
    img: bag,
    hot: true,
  },
  {
    id: 3,
    name: "Men Black, Brown Canvas, Artificial Leather Belt",
    price: "$130.00",
    oldPrice: "$270.00",
    discount: "57% Off",
    img: belt,
    hot: true,
  },
  {
    id: 4,
    name: "Classic Stylish Watch",
    price: "$180.00",
    oldPrice: "$350.00",
    discount: "48% Off",
    img: Watch,
    hot: true,
  },
];

const Products = () => {
  return (
    <div className="mt-6">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Top Deals</h2>
        <span className="text-gray-500">Showing {products.length} items</span>
      </div>

      
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

            
            <h3 className="text-md font-semibold line-clamp-2">{product.name}</h3>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-blue-600 font-bold">{product.price}</span>
              <span className="line-through text-gray-400 text-sm">
                {product.oldPrice}
              </span>
              <span className="text-red-500 text-sm">{product.discount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
