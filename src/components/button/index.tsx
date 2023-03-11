import React from "react";



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children, type = "button", ...rest }) => {
  return (
    <button
      className={`px-3 py-2 bg-blue-500 text-white font-semibold rounded ${className}`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
