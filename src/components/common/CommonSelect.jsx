import React from "react";

const CommonSelect = ({
  value,
  onChange,
  options = [],
  defaultOption = "Select...",
  className = "",
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none ${className}`}
    >
      <option value="">{defaultOption}</option>

      {options.map((opt, index) => {
        const optionValue = typeof opt === "object" ? opt.value : opt;
        const optionLabel = typeof opt === "object" ? opt.label : opt;

        return (
          <option key={`${optionValue}-${index}`} value={optionValue}>
            {optionLabel}
          </option>
        );
      })}
    </select>
  );
};

export default CommonSelect;
