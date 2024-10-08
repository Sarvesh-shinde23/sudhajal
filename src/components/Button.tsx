
import React from "react";

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="self-center px-6 py-3.5 mt-9 text-sm tracking-wide rounded-3xl border-2 border-blue-700 border-solid min-h-[42px] max-md:px-5">
      {text}
    </button>
  );
};
