import React from "react";

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-400"></div>
      </div>
      <h2 className="text-white text-lg mt-4 tracking-wide">Loading...</h2>
    </div>
  );
};

export default FullPageLoader;
