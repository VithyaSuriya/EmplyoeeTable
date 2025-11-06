import React from "react";

const CommonError = ({ message = "Something went wrong. Please try again." }) => {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="flex items-center gap-3 px-5 py-4 bg-red-100/90 backdrop-blur-sm border border-red-200 rounded-xl shadow-md w-full max-w-md animate-fadeIn">
        <span className="flex items-center justify-center w-8 h-8 bg-red-500/10 text-red-600 rounded-full text-lg">
          ⚠️
        </span>
        <p className="text-sm font-medium text-red-700 leading-relaxed">
          {message.includes("<!doctype")
            ? "Invalid or missing JSON file (check your API or file path)"
            : message}
        </p>
      </div>
    </div>
  );
};

export default CommonError;
