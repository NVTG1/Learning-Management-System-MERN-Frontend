import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

function MyCourses() {
  const { allCourses, currency } = useContext(AppContext);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Courses</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={course.courseThumbnail}
              alt={course.courseTitle}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.courseTitle}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>{course.studentsEnrolled.length} students</span>
                <span className="font-semibold text-orange-600">
                  {currency}{course.coursePrice}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Published: {new Date(course.publishedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
