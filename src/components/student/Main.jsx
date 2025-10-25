import React from "react";
import SearchBar from "./SearchBar";

function Main() {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-24 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-orange-100 to-white">
      
      {/* Heading */}
      <h1 className="md:text-5xl text-3xl font-extrabold text-gray-800 max-w-3xl leading-snug">
        Learn <span className="text-orange-600">Skills That Matter</span><br />
        Build Your Future with Confidence
      </h1>

      {/* Subtext - Desktop */}
      <p className="hidden md:block text-gray-600 max-w-2xl mx-auto text-lg">
        Start your learning journey with expert-led courses designed to boost your career.
        Whether you're exploring new fields or upgrading your skills, we've got you covered
        with practical and engaging lessons.
      </p>

      {/* Subtext - Mobile */}
      <p className="md:hidden text-gray-600 max-w-sm mx-auto text-base">
        Build your skills with expert-led online courses. Learn anytime, anywhere.
      </p>

      <SearchBar />
    </div>
  );
}

export default Main;
