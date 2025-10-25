import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function StudentsEnrolled() {
  const { allCourses } = useContext(AppContext);

  // Get all enrolled students
  const allStudents = allCourses.flatMap((course) =>
    course.studentsEnrolled.map((student) => ({
      ...student,
      courseName: course.courseTitle,
    }))
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Students Enrolled</h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-orange-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Student</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Course</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Enrolled Date</th>
            </tr>
          </thead>
          <tbody>
            {allStudents.map((student, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-800">{student.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{student.email}</td>
                <td className="px-6 py-4 text-gray-600">{student.courseName}</td>
                <td className="px-6 py-4 text-gray-600">
                  {new Date(student.enrolledDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsEnrolled;
