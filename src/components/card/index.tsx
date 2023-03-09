import React, { useState } from "react";
import { getRandomNumber } from "@/utils";

interface BattleCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<BattleCardProps> = ({
  name,
  description,
  imageUrl,
}) => {
  const [value, setValue] = useState<number>(getRandomNumber(1, 10));

  const handleButtonClick = () => {
    setValue(getRandomNumber(1, 10));
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="font-bold text-lg">{value}</div>
          {/* <button
            className="px-3 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            onClick={handleButtonClick}
          >
            Atacar
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
