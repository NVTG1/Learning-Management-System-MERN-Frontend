import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-orange-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="mt-4 text-xl font-semibold text-orange-600">Loading...</h1>
      </div>
    </div>
  );
}

export default Loading;
