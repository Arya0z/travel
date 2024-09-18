// src/ProductCard.tsx
import React from 'react';
import { FaStar,FaShoppingCart } from 'react-icons/fa'; // Shopping Cart icon from react-icons
import Star from '/star.svg'; // Import custom Star icon
import { PRODUCT_DATA } from '@/constants/product'; // Product Data

// Function to render stars based on the rating
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={`h-4 w-4 ${
          i <= rating ? 'fill-yellow-500' : 'fill-gray-300'
        }`}
      />
    );
  }
  return stars;
};

const ProductCard: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCT_DATA.map((card, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Shop Icon */}
            <button className="absolute top-2 right-2 bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 focus:outline-none">
              <FaShoppingCart className="h-5 w-5" />
            </button>

            {/* Image */}
            <img
              className="w-full h-36 sm:h-40 lg:h-48 object-cover"
              src={card.image}
              alt={card.title}
            />

            {/* Card Content */}
            <div className="p-4">
              {/* Title */}
              <h3 className="text-md lg:text-lg font-semibold text-gray-800">{card.title}</h3>

              {/* Star Ratings */}
              <div className="flex items-center mt-2">
                {renderStars(card.rating)}
                <span className="ml-2 text-sm text-gray-500">({card.rating})</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm my-2">{card.description}</p>

              {/* Price and Buy Button */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-green-600">${card.price}</span>
                <button className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
