import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide">RIVANSHI</div>

        {/* Navigation */}
        <nav className="hidden flex items-center md:flex space-x-8 text-sm text-gray-700">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-900">
            Products
          </Link>
          <Link to="/team" className="hover:text-gray-900">
            Team
          </Link>

          <div className="flex space-x-3">
            <button className="px-4 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition">
              Register
            </button>
            <button className="px-4 py-1 bg-blue-900 text-white rounded-md text-sm hover:bg-blue-800 transition">
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
