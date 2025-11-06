import React from "react";

const CommonInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2 border rounded-lg w-48"
    />
  );
};

export default CommonInput;
