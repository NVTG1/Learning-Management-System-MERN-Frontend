import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div className="bg-orange-50 py-20 px-6 md:px-24 text-center rounded-xl shadow-lg">
      <h1 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6">
        Learn Anything, Anytime, Anywhere
      </h1>
      <p className="text-gray-700 max-w-2xl mx-auto mb-8">
        Join thousands of learners who are upgrading their skills and building
        successful careers. Explore courses across web development, design,
        data science, and more!
      </p>
      <Link
        to="/course-list"
        onClick={() => scrollTo(0, 0)}
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-md"
      >
        Get Started
      </Link>
    </div>
  );
}

export default CallToAction;
