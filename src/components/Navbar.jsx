import { ShoppingCart, Menu } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        
        <h1 className="text-2xl md:text-3xl font-bold">E-comm</h1>
        <div className="hidden md:flex space-x-10">
          <a href="#" className="text-blue-500 font-semibold">Home</a>
          <a href="#" className="text-gray-600 font-semibold">Bag</a>
          <a href="#" className="text-gray-600 font-semibold">Sneakers</a>
          <a href="#" className="text-gray-600 font-semibold">Belt</a>
          <a href="#" className="text-gray-600 font-semibold">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <ShoppingCart className="w-6 h-6" />
          <p className="font-semibold">Items</p>
          <p className="text-gray-500">$0.00</p>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <a href="#" className="block text-blue-500 font-semibold">Home</a>
          <a href="#" className="block text-gray-600 font-semibold">Bag</a>
          <a href="#" className="block text-gray-600 font-semibold">Sneakers</a>
          <a href="#" className="block text-gray-600 font-semibold">Belt</a>
          <a href="#" className="block text-gray-600 font-semibold">Contact</a>

          <div className="flex items-center space-x-3 border-t pt-3">
            <ShoppingCart className="w-6 h-6" />
            <p className="font-semibold">Items</p>
            <p className="text-gray-500">$0.00</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
