import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-gray-700 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-3">E-Comm</h2>
          <p className="text-sm">
            Your trusted online marketplace for electronics, fashion, home
            essentials & more. Best deals, fastest delivery, and 24/7 support.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <p className="text-sm mb-2">Stay connected with us:</p>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-sky-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">E-Comm.</p>
          <p className="text-sm">500, Market Plaza,</p>
          <p className="text-sm">Pune Maharashtra, India - 560001</p>
          <p className="text-sm mt-2">📞 1800-123-4567</p>
          <p className="text-sm">✉️ support@shopease.com</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Shipping Info</a>
            </li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="font-semibold mb-3">Our Policies</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-600 mt-8 border-t pt-4">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
