import React from 'react';
import { Wine } from '../types';

interface WineCardProps {
  wine: Wine;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-64">
        <img
          src={wine.imageUrl}
          alt={wine.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-gold-600 text-white px-3 py-1 rounded-full text-sm">
          {wine.vintage}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{wine.name}</h3>
        <p className="text-gray-600 mb-4">{wine.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary-800 font-semibold">{wine.region}</span>
          <span className="text-gold-600 font-bold">${wine.price}</span>
        </div>
      </div>
    </div>
  );
};

export default WineCard;