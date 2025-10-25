import React from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/educator/educator", icon: assets.dashboard_icon },
    { name: "Add Course", path: "/educator/add-course", icon: assets.add_icon },
    { name: "My Courses", path: "/educator/my-courses", icon: assets.course_icon },
    { name: "Students Enrolled", path: "/educator/student-enrolled", icon: assets.students_icon },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full p-6">
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? "bg-orange-100 text-orange-600 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
