import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";
import Loading from "../../components/student/Loading";

function CourseDetails() {
  const { id } = useParams();
  const { allCourses, currency, calculateRating, navigate, enrolledCourses } =
    useContext(AppContext);

  const [courseData, setCourseData] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const course = allCourses.find((item) => item._id === id);
      setCourseData(course);

      // Check if user is already enrolled
      const enrolled = enrolledCourses.some((item) => item._id === id);
      setIsEnrolled(enrolled);
    }
  }, [allCourses, id, enrolledCourses]);

  const handleEnroll = () => {
    if (isEnrolled) {
      navigate(`/player/${id}`);
    } else {
      // Handle enrollment logic here
      alert("Enrollment functionality - Connect to backend");
      setIsEnrolled(true);
    }
  };

  const handlePreview = (lectureUrl) => {
    // Open the video URL in a new tab
    window.open(lectureUrl, "_blank");
  };

  if (!courseData) {
    return <Loading />;
  }

  const discountedPrice = (
    courseData.coursePrice -
    (courseData.discount * courseData.coursePrice) / 100
  ).toFixed(2);

  const rating = calculateRating(courseData);

  return (
    <>
      <div className="px-6 md:px-24 py-12 bg-orange-50 min-h-screen">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">
          <span
            className="cursor-pointer hover:text-orange-500"
            onClick={() => navigate("/")}
          >
            Home
          </span>{" "}
          /{" "}
          <span
            className="cursor-pointer hover:text-orange-500"
            onClick={() => navigate("/course-list")}
          >
            Courses
          </span>{" "}
          / <span className="text-gray-700">{courseData.courseTitle}</span>
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Course Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Course Header */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {courseData.courseTitle}
              </h1>
              <div
                className="text-gray-600 mb-4"
                dangerouslySetInnerHTML={{
                  __html: courseData.courseDescription,
                }}
              />

              <div className="flex items-center gap-6 text-sm text-gray-600 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{rating.toFixed(1)}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < Math.floor(rating)
                            ? assets.star
                            : assets.star_blank
                        }
                        alt="star"
                        className="w-4 h-4"
                      />
                    ))}
                  </div>
                  <span>
                    (
                    {courseData.courseRatings
                      ? courseData.courseRatings.length
                      : 0}{" "}
                    ratings)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👥</span>
                  <span>
                    {courseData.enrolledStudents
                      ? courseData.enrolledStudents.length
                      : 0}{" "}
                    students enrolled
                  </span>
                </div>
              </div>
            </div>

            {/* Course Structure */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Course Structure
              </h2>
              {courseData.courseContent &&
                courseData.courseContent.map((chapter, chapterIndex) => (
                  <div key={chapterIndex} className="mb-4">
                    <h3 className="text-lg font-semibold text-orange-600 mb-2">
                      Chapter {chapter.chapterOrder}: {chapter.chapterTitle}
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {chapter.chapterContent.map((lecture, lectureIndex) => (
                        <li
                          key={lectureIndex}
                          className="flex items-center justify-between py-2 border-b border-gray-200"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-orange-600">▶</span>
                            <span className="text-gray-700">
                              {lecture.lectureTitle}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">
                              {lecture.lectureDuration} min
                            </span>
                            {lecture.isPreviewFree && (
                              <button
                                onClick={() => handlePreview(lecture.lectureUrl)}
                                className="text-orange-600 text-sm font-medium hover:underline"
                              >
                                Preview
                              </button>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>

            {/* Enrolled Students Section */}
            {courseData.enrolledStudents &&
              courseData.enrolledStudents.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Enrolled Students
                  </h2>
                  <div className="space-y-3">
                    {courseData.enrolledStudents.map((studentId, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 font-semibold">
                          {studentId.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-800 font-mono">
                            {studentId.length > 30
                              ? `${studentId.substring(0, 30)}...`
                              : studentId}
                          </p>
                          <p className="text-xs text-gray-500">Student ID</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <img
                              key={i}
                              src={
                                i < Math.floor(rating)
                                  ? assets.star
                                  : assets.star_blank
                              }
                              alt="star"
                              className="w-3 h-3"
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">
                        Total Enrolled Students:
                      </span>{" "}
                      {courseData.enrolledStudents.length}
                    </p>
                  </div>
                </div>
              )}
          </div>

          {/* Right Column - Enrollment Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <img
                src={courseData.courseThumbnail}
                alt={courseData.courseTitle}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-orange-600">
                    {currency}
                    {discountedPrice}
                  </span>
                  {courseData.discount > 0 && (
                    <>
                      <span className="text-lg text-gray-400 line-through">
                        {currency}
                        {courseData.coursePrice}
                      </span>
                      <span className="text-sm text-green-600 font-semibold">
                        {courseData.discount}% OFF
                      </span>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={handleEnroll}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 mb-4"
              >
                {isEnrolled ? "Continue Learning" : "Enroll Now"}
              </button>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🎓</span>
                  <span>Certificate of Completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>Access on Mobile & Desktop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseDetails;
