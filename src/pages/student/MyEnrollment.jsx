import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import Footer from "../../components/student/Footer";

function MyEnrollment() {
  const { enrolledCourses, navigate } = useContext(AppContext);

  // State to track completion status of each course
  const [completionStatus, setCompletionStatus] = useState({});

  // Initialize all courses as ongoing by default
  useEffect(() => {
    const initialStatus = {};
    enrolledCourses.forEach((course) => {
      initialStatus[course._id] = false; // false = Ongoing, true = Completed
    });
    setCompletionStatus(initialStatus);
  }, [enrolledCourses]);

  const toggleStatus = (id, e) => {
    e.stopPropagation(); // Prevent row click when toggling status
    setCompletionStatus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
    window.scrollTo(0, 0);
  };

  const handlePlayerClick = (courseId, e) => {
    e.stopPropagation(); // Prevent row click when clicking "Continue Learning"
    navigate(`/player/${courseId}`);
    window.scrollTo(0, 0);
  };

  // Calculate total duration from courseContent
  const calculateTotalDuration = (courseContent) => {
    if (!courseContent || courseContent.length === 0) return "N/A";

    let totalMinutes = 0;
    courseContent.forEach((chapter) => {
      chapter.chapterContent.forEach((lecture) => {
        totalMinutes += lecture.lectureDuration || 0;
      });
    });

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div className="px-6 md:px-24 py-12 bg-orange-50 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">
        My Enrollments
      </h1>

      {enrolledCourses.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <p className="text-gray-600 text-lg mb-4">
            You haven't enrolled in any courses yet.
          </p>
          <button
            onClick={() => navigate("/course-list")}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Browse Courses
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl bg-white shadow-md">
            <thead className="bg-orange-200">
              <tr>
                <th className="py-3 px-6 text-left">Course</th>
                <th className="py-3 px-6 text-left">Duration</th>
                <th className="py-3 px-6 text-left">Progress</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((course) => (
                <tr
                  key={course._id}
                  onClick={() => handleCourseClick(course._id)}
                  className="border-t border-gray-200 hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  <td className="flex items-center py-3 px-6 gap-4">
                    <img
                      src={course.courseThumbnail}
                      alt={course.courseTitle}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {course.courseTitle}
                      </p>
                      <button
                        onClick={(e) => handlePlayerClick(course._id, e)}
                        className="text-sm text-orange-600 hover:text-orange-700 hover:underline mt-1"
                      >
                        Continue Learning →
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-6">
                    {calculateTotalDuration(course.courseContent)}
                  </td>
                  <td className="py-3 px-6">
                    <button
                      onClick={(e) => toggleStatus(course._id, e)}
                      className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                        completionStatus[course._id]
                          ? "bg-green-600 text-white"
                          : "bg-orange-600 text-white"
                      }`}
                    >
                      {completionStatus[course._id] ? "Completed" : "Ongoing"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default MyEnrollment;
