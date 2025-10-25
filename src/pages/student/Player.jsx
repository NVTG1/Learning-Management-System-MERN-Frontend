import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";

function Player() {
  const { courseId } = useParams();
  const { allCourses, navigate } = useContext(AppContext);

  const [courseData, setCourseData] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentLecture, setCurrentLecture] = useState(0);
  const [completedLectures, setCompletedLectures] = useState(new Set());

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const course = allCourses.find((item) => item._id === courseId);
      setCourseData(course);
    }
  }, [allCourses, courseId]);

  if (!courseData) {
    return <Loading />;
  }

  const currentLectureData =
    courseData.courseStructure[currentChapter]?.lectures[currentLecture];

  const toggleLectureComplete = () => {
    const lectureKey = `${currentChapter}-${currentLecture}`;
    setCompletedLectures((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(lectureKey)) {
        newSet.delete(lectureKey);
      } else {
        newSet.add(lectureKey);
      }
      return newSet;
    });
  };

  const isLectureCompleted = (chapterIdx, lectureIdx) => {
    return completedLectures.has(`${chapterIdx}-${lectureIdx}`);
  };

  const goToNextLecture = () => {
    const currentChapterLectures = courseData.courseStructure[currentChapter].lectures.length;
    
    if (currentLecture < currentChapterLectures - 1) {
      setCurrentLecture(currentLecture + 1);
    } else if (currentChapter < courseData.courseStructure.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setCurrentLecture(0);
    }
  };

  const goToPreviousLecture = () => {
    if (currentLecture > 0) {
      setCurrentLecture(currentLecture - 1);
    } else if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setCurrentLecture(courseData.courseStructure[currentChapter - 1].lectures.length - 1);
    }
  };

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(currentLectureData?.lectureUrl);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Sidebar - Course Structure */}
      <div className="md:w-1/3 bg-white shadow-lg overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{courseData.courseTitle}</h2>
          <button
            onClick={() => navigate("/my-enrollments")}
            className="mt-3 text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            ← Back to My Enrollments
          </button>
        </div>

        <div className="p-6">
          {courseData.courseStructure.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="mb-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">
                Chapter {chapterIndex + 1}: {chapter.chapterName}
              </h3>
              <ul className="space-y-2">
                {chapter.lectures.map((lecture, lectureIndex) => (
                  <li
                    key={lectureIndex}
                    onClick={() => {
                      setCurrentChapter(chapterIndex);
                      setCurrentLecture(lectureIndex);
                    }}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      currentChapter === chapterIndex && currentLecture === lectureIndex
                        ? "bg-orange-100 border-l-4 border-orange-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      {isLectureCompleted(chapterIndex, lectureIndex) ? (
                        <img src={assets.check_icon} alt="completed" className="w-5 h-5" />
                      ) : (
                        <img src={assets.play_icon} alt="play" className="w-5 h-5" />
                      )}
                      <span className="text-sm text-gray-700">{lecture.lectureTitle}</span>
                    </div>
                    <span className="text-xs text-gray-500">{lecture.lectureDuration}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Video Player */}
      <div className="flex-1 flex flex-col bg-black">
        {/* Video Player */}
        <div className="flex-1 flex items-center justify-center">
          {videoId ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={currentLectureData.lectureTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <div className="text-white text-center">
              <p>No video available for this lecture</p>
            </div>
          )}
        </div>

        {/* Video Controls & Info */}
        <div className="bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Chapter {currentChapter + 1}, Lecture {currentLecture + 1}
              </h3>
              <p className="text-gray-600">{currentLectureData?.lectureTitle}</p>
            </div>
            <button
              onClick={toggleLectureComplete}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isLectureCompleted(currentChapter, currentLecture)
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-orange-600 text-white hover:bg-orange-700"
              }`}
            >
              {isLectureCompleted(currentChapter, currentLecture)
                ? "✓ Completed"
                : "Mark as Complete"}
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={goToPreviousLecture}
              disabled={currentChapter === 0 && currentLecture === 0}
              className="flex-1 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800 font-medium py-3 rounded-lg transition-colors"
            >
              ← Previous Lecture
            </button>
            <button
              onClick={goToNextLecture}
              disabled={
                currentChapter === courseData.courseStructure.length - 1 &&
                currentLecture === courseData.courseStructure[currentChapter].lectures.length - 1
              }
              className="flex-1 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-100 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors"
            >
              Next Lecture →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
