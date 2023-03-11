import React, { useState } from "react";
import { getRandomNumber } from "@/utils";

interface BattleCardProps {
  name: string;
  description: string;
  imageUrl: string;
  value?: number;
}

const Card: React.FC<BattleCardProps> = ({
  name,
  description,
  imageUrl,
  value = getRandomNumber(1, 10),
}) => {

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="text-gray-600 font-bold text-xl mb-2 h-16">{name}</div>
        <p className="text-gray-700 text-base font-medium justify-center grid">{description}</p>
        <div className="flex items-center justify-center mt-4">
          <div className={`font-bold text-4xl ${value < 6 ? 'text-red-500' : value >= 6 && value <= 8 ? 'text-orange-500' : 'text-green-500'}`}>{value}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
