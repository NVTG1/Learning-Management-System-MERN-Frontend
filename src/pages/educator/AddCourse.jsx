import React, { useState } from "react";

function AddCourse() {
  const [formData, setFormData] = useState({
    courseTitle: "",
    courseDescription: "",
    coursePrice: "",
    discount: "",
    courseThumbnail: "",
    category: "",
  });

  const [chapters, setChapters] = useState([
    {
      chapterName: "",
      lectures: [{ lectureTitle: "", lectureDuration: "", lectureUrl: "", freePreview: false }],
    },
  ]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChapterChange = (chapterIndex, value) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].chapterName = value;
    setChapters(updatedChapters);
  };

  const handleLectureChange = (chapterIndex, lectureIndex, field, value) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].lectures[lectureIndex][field] = value;
    setChapters(updatedChapters);
  };

  const addChapter = () => {
    setChapters([
      ...chapters,
      {
        chapterName: "",
        lectures: [{ lectureTitle: "", lectureDuration: "", lectureUrl: "", freePreview: false }],
      },
    ]);
  };

  const addLecture = (chapterIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].lectures.push({
      lectureTitle: "",
      lectureDuration: "",
      lectureUrl: "",
      freePreview: false,
    });
    setChapters(updatedChapters);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      ...formData,
      courseStructure: chapters,
    };
    console.log("Course Data:", courseData);
    alert("Course added successfully! (Connect to backend)");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Add New Course</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 space-y-6">
        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
            <input
              type="text"
              name="courseTitle"
              value={formData.courseTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            name="courseDescription"
            value={formData.courseDescription}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          ></textarea>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
            <input
              type="number"
              name="coursePrice"
              value={formData.coursePrice}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail URL</label>
            <input
              type="text"
              name="courseThumbnail"
              value={formData.courseThumbnail}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Chapters & Lectures */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Structure</h3>
          {chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <input
                type="text"
                placeholder="Chapter Name"
                value={chapter.chapterName}
                onChange={(e) => handleChapterChange(chapterIndex, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />

              {chapter.lectures.map((lecture, lectureIndex) => (
                <div key={lectureIndex} className="ml-4 mb-3 p-3 bg-gray-50 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-3 mb-2">
                    <input
                      type="text"
                      placeholder="Lecture Title"
                      value={lecture.lectureTitle}
                      onChange={(e) =>
                        handleLectureChange(chapterIndex, lectureIndex, "lectureTitle", e.target.value)
                      }
                      className="px-3 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Duration (e.g., 10:30)"
                      value={lecture.lectureDuration}
                      onChange={(e) =>
                        handleLectureChange(chapterIndex, lectureIndex, "lectureDuration", e.target.value)
                      }
                      className="px-3 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      placeholder="YouTube URL"
                      value={lecture.lectureUrl}
                      onChange={(e) =>
                        handleLectureChange(chapterIndex, lectureIndex, "lectureUrl", e.target.value)
                      }
                      className="px-3 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={lecture.freePreview}
                      onChange={(e) =>
                        handleLectureChange(chapterIndex, lectureIndex, "freePreview", e.target.checked)
                      }
                      className="rounded"
                    />
                    Free Preview
                  </label>
                </div>
              ))}

              <button
                type="button"
                onClick={() => addLecture(chapterIndex)}
                className="text-orange-600 text-sm font-medium hover:underline"
              >
                + Add Lecture
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addChapter}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors"
          >
            + Add Chapter
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
