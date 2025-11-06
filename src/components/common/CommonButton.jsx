import React from "react";

const CommonButton = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
    >
      {label}
    </button>
  );
};

export default CommonButton;
