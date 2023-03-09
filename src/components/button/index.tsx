import React from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      className={`px-3 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
