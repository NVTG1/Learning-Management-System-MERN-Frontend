import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  return (
    <Link to={"/course/" + course._id} onClick = {() => scrollTo(0,0)}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full md:w-80 cursor-pointer">
        {/* Course Thumbnail */}
        <img
          src={course.courseThumbnail}
          alt={course.courseTitle}
          className="w-full h-48 object-cover"
        />

        {/* Course Info */}
        <div className="p-5 flex flex-col gap-3">
          <h3 className="text-xl font-bold text-gray-800 hover:text-orange-500 transition-colors duration-300">
            {course.courseTitle}
          </h3>
          <p className="text-sm text-gray-500">{course.educator.name}</p>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            <p>{calculateRating(course)}</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={i<Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="star" className="w-4 h-4" />
              ))}
            </div>
            <span className="text-sm text-gray-600">4.5 (22)</span>
          </div>

          {/* Price */}
          <p className="text-lg font-bold text-orange-500">
            {currency}
            {(
              course.coursePrice -
              (course.discount * course.coursePrice) / 100
            ).toFixed(2)}
          </p>

          {/* Enroll Now Visual */}
          <div className="mt-2 bg-orange-400 text-white text-center py-2 rounded-full shadow hover:bg-orange-500 transition-colors duration-300">
            Enroll Now
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
