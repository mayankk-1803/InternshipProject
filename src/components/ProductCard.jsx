import React from 'react';
import { Star } from 'lucide-react'; 

const ProductCard = ({ tag, image, title, price, oldPrice, discount }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition  p-4 relative">
      
      {tag && (
        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {tag}
        </div>
      )}

      
      <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4">
        <img src={image} alt={title} className="object-contain h-full" />
      </div>

      
      <h3 className="text-sm font-semibold mb-1">{title}</h3>

      
      <div className="flex text-yellow-400 mb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>

      
      <div className="flex items-center space-x-2">
        <span className="text-blue-500 font-semibold">${price}</span>
        <span className="text-gray-400 line-through text-sm">${oldPrice}</span>
        <span className="text-red-500 text-xs">{discount} Off</span>
      </div>
    </div>
  );
};

export default ProductCard;
