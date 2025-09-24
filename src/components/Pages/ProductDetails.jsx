import { useParams } from "react-router-dom";
import shoes from "../../assets/Shoess.jpg";
import PumaShoes from "../../assets/PumaShoes.png";
import Sports from "../../assets/Sports.png";
import CasualShoes from "../../assets/CasualShoes.png";

const ProductDetails = () => {
  const { id } = useParams();

  // Product database
  const products = [
    {
      id: "1",
      name: "Asian Sneaker | Soft Cushioned Insole, Slip-Resistance Training & Gym Running Shoes",
      price: "₹1,244",
      oldPrice: "₹2,499",
      discount: "50% Off",
      rating: "4★",
      reviews: "13,962 ratings and 905 reviews",
      desc: "Soft cushioned insole and slip-resistant design make these shoes ideal for training, gym, and everyday running. Built for comfort, grip, and durability.",
      img: shoes,
      offers: [
        "10% Off on Supermoney UPI. Max discount of ₹50. Minimum order value ₹250.",
        "5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter.",
        "5% cashback on Axis Bank Flipkart Debit Card.",
        "Combo Offer: Buy 2 items save 5%; Buy 3 save 7%; Buy 4+ save 10%.",
      ],
    },
    {
      id: "2",
      name: "Axelion Two-tone Wide Running Shoes For Men (Green)",
      price: "₹2,199",
      oldPrice: "₹3,499",
      discount: "37% Off",
      rating: "4.2★",
      reviews: "2,345 ratings and 340 reviews",
      desc: "Lightweight running shoes with breathable mesh and shock-absorbing sole for maximum comfort.",
      img: PumaShoes,
      offers: [
        "Extra 5% off with Axis Bank Credit Card.",
        "Free delivery on orders above ₹500.",
        "Combo Offer: Buy 1 Shoe + 1 T-shirt & get 15% Off.",
      ],
    },
    {
      id: "3",
      name: "Men’s Synthetic Leather Shoes | Office & Party Wear Lace-Up Design Casuals For Men",
      price: "₹1,099",
      oldPrice: "₹2,499",
      discount: "56% Off",
      rating: "3.8★",
      reviews: "5,670 ratings and 789 reviews",
      desc: "Stylish synthetic leather shoes perfect for office meetings, parties, and casual outings.",
      img: Sports,
      offers: [
        "Get 10% off on Prepaid Orders.",
        "Buy 2 pairs & get Flat ₹200 Off.",
        "5% cashback on ICICI Credit Cards.",
      ],
    },
    {
      id: "4",
      name: "Casual Sneaker Shoes for Men | Soft Cushioned Insole || Mexico-02 Sneakers For Men",
      price: "₹853",
      oldPrice: "₹1,499",
      discount: "43% Off",
      rating: "4.1★",
      reviews: "8,932 ratings and 1,105 reviews",
      desc: "Trendy casual sneakers with soft insole, ideal for college, parties, and everyday wear.",
      img: CasualShoes,
      offers: [
        "Extra 5% off with HDFC Debit Card.",
        "Buy 2 Save 10%, Buy 3 Save 15%.",
        "Free shipping for Flipkart Plus members.",
      ],
    },
  ];

  // Find product by ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2 className="text-center mt-10">Product not found!</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-80 h-80 object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.desc}</p>

          {/* Pricing */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-600 text-2xl font-bold">
              {product.price}
            </span>
            <span className="line-through text-gray-400">{product.oldPrice}</span>
            <span className="text-red-500">{product.discount}</span>
          </div>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
              {product.rating}
            </span>
            <span className="text-gray-500 text-sm">{product.reviews}</span>
          </div>

          {/* Offers */}
          <h2 className="text-lg font-semibold mb-2">Available Offers</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {product.offers.map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>

          {/* Add to Cart */}
          <button className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
