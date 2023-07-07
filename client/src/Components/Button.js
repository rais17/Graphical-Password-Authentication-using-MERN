import React from "react";

const Button = ({ text }) => {
  return (
    <button
      type="button"
      className="w-full px-4 py-2 font-semibold tracking-wide text-white bg-blue-500 rounded-full hover:bg-blue-700"
    >
      {text}
    </button>
  );
};

export default Button;
