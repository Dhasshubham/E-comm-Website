import bannerShoe from "../assets/nike.png";

const Banner = () => {
  return (
    <div className="bg-blue-500 rounded-xl px-7 py-4 mb-6 flex flex-col md:flex-row justify-between items-center text-white shadow-lg ">
      <div className="max-w-md text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Puma Men Running Shoes
        </h1>
        <p className="mt-2 text-base md:text-lg">
          High-performance running shoes designed for comfort and style. Perfect
          for daily workouts, jogging, and casual wear.
        </p>

        <div className="flex justify-center md:justify-start items-center mt-2">
          <span className="text-yellow-300 text-xl">★★★★☆</span>
          <span className="ml-2 text-sm">(4.5/5 based on 1200 reviews)</span>
        </div>

        <div className="mt-3">
          <span className="text-2xl md:text-3xl font-bold text-white">
            $249.99
          </span>
          <span className="ml-3 line-through text-gray-200">$329.99</span>
          <span className="ml-3 text-green-300 font-semibold">25% OFF</span>
        </div>

        <ul className="mt-3 text-sm space-y-1">
          <li> Free Delivery</li>
          <li> 7-Day Easy Returns</li>
          <li> Cash on Delivery Available</li>
        </ul>

        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <button className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-lg font-semibold shadow-md transition">
            BUY NOW
          </button>
          <button className="px-6 py-3 bg-white hover:bg-gray-200 text-blue-600 rounded-lg font-semibold shadow-md transition">
            VIEW DETAILS
          </button>
        </div>
      </div>

      <img
        src={bannerShoe}
        alt="shoe"
        className="w-56 md:w-72 mt-4 md:mt-0 drop-shadow-2xl"
      />
    </div>
  );
};

export default Banner;
