import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

function Navbar() {
  const { navigate, isEducator } = useContext(AppContext);

  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 shadow-md 
      bg-orange-400 
      rounded-b-2xl`}
    >
      {/* Logo and App Name */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <img
          src={assets.Logo}
          alt="Logo"
          className="w-32 lg:w-36 transform hover:scale-105 transition-transform duration-300"
        />
        <span className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-yellow-200 tracking-wide drop-shadow-lg">
          SkillForge
        </span>
      </div>

      {/* Navigation links */}
      <div className="hidden md:flex items-center gap-8 text-white font-semibold">
        <div className="flex gap-4 items-center">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
                className="px-4 py-2 border border-orange-200 rounded-lg hover:bg-orange-300 transition"
              >
                {isEducator ? "Educator Dashboard" : "Become an Educator"}
              </button>
              <Link
                to="/my-enrollments"
                className="px-4 py-2 rounded-lg hover:bg-orange-300 transition"
              >
                My Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-orange-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-700 transition-colors duration-300"
          >
            Create Account
          </button>
        )}
      </div>

      {/* For dynamic Screen Size */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
              >
                {isEducator ? "Educator Dashboard" : "Become an Educator"}
              </button>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" className="w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
