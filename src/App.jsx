import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ViewMore from "./components/Pages/ViewMore";
import ProductDetails from "./components/Pages/ProductDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <div className="w-64 bg-white shadow-md border-r">
          <Sidebar />
        </div>

        <main className="flex-1 p-6 bg-gray-50">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Products />
                </>
              }
            />
            <Route path="/view-more" element={<ViewMore />} />

            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
