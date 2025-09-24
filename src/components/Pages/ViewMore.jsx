const ViewMore = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <p className="text-gray-700">
        Here you’ll see full product details, specifications, reviews, and more.
      </p>

      <div className="mt-6">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default ViewMore;
