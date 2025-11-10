import React from "react";

const CommonError = ({
  message = "Something went wrong. Please try again.",
}) => {
  return (
    <div className="flex justify-center py-4">
      <div className="flex items-start gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg w-full max-w-md">
        <span className="text-red-500 text-lg leading-none mt-0.5">⚠️</span>
        <p className="text-sm text-red-700 font-medium">
          {message.includes("<!doctype")
            ? "Invalid or missing JSON file (check your API or file path)."
            : message}
        </p>
      </div>
    </div>
  );
};

export default CommonError;
