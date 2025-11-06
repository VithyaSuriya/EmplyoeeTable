import React from "react";

const CommonLoader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-gray-600 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 transition-all duration-300">
      <div className="flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-[3px] border-gray-300 border-t-indigo-600 rounded-full animate-spin shadow-sm"></div>
        <p className="mt-4 text-base font-medium text-gray-700 tracking-wide animate-pulse">
          {message}
        </p>
      </div>
    </div>
  );
};

export default CommonLoader;
