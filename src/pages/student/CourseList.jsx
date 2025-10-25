import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";

function CourseList() {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      if (input) {
        setFilteredCourse(
          tempCourses.filter((item) =>
            item.title.toLowerCase().includes(input.toLowerCase())
          )
        );
      } else {
        setFilteredCourse(tempCourses);
      }
    }
  }, [allCourses, input]);

  return (
    <div className="px-6 md:px-24 py-12 bg-orange-50 min-h-screen">
      {/* Header with inline search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-2">
            Course List
          </h1>
          <p className="text-gray-500 text-sm">
            <span
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            / <span className="text-gray-600">Course List</span>
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <SearchBar data={input} />
        </div>
      </div>

      {/* Search filter display */}
      {input && (
        <div className="flex items-center gap-2 mb-6">
          <p className="text-gray-700 font-medium">
            Showing results for: <span className="text-orange-600">{input}</span>
          </p>
          <img
            src={assets.cross_icon}
            alt="Clear"
            className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => navigate("/course-list")}
          />
        </div>
      )}

      {/* Courses grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCourse.length > 0 ? (
          filteredCourse.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-10">
            No courses found.
          </p>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default CourseList;
