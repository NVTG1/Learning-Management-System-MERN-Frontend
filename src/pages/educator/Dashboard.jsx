import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

function Dashboard() {
  const { allCourses, currency } = useContext(AppContext);

  const stats = [
    {
      title: "Total Courses",
      value: allCourses.length,
      icon: assets.course_icon,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Students",
      value: allCourses.reduce((acc, course) => acc + course.studentsEnrolled.length, 0),
      icon: assets.students_icon,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Revenue",
      value: `${currency}${allCourses
        .reduce((acc, course) => acc + course.coursePrice * course.studentsEnrolled.length, 0)
        .toFixed(2)}`,
      icon: assets.revenue_icon,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color}`}>
                <img src={stat.icon} alt={stat.title} className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Courses */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Courses</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Course</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Students</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Price</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {allCourses.slice(0, 5).map((course, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={course.courseThumbnail}
                        alt={course.courseTitle}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <span className="font-medium text-gray-800">{course.courseTitle}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{course.studentsEnrolled.length}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {currency}{course.coursePrice}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {currency}{(course.coursePrice * course.studentsEnrolled.length).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
