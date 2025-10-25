import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <footer className="bg-orange-100 text-gray-800 py-10 px-6 sm:px-10 md:px-24 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Logo & About Section */}
        <div className="text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start justify-center mb-3">
            <img src={assets.Logo} alt="Logo" className="w-8 h-8 mb-2 sm:mb-0 sm:mr-2" />
            <h2 className="text-lg sm:text-xl md:text-1xl font-bold text-orange-600 leading-tight">
              SkillForge
            </h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            SkillForge brings you high-quality courses from industry experts. Build skills,
            grow your career, and learn at your own pace.
          </p>
        </div>

        {/* Learn More Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-orange-600 mb-3">Learn More</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/course-list" className="hover:text-orange-500">Courses</Link></li>
            <li><Link to="/blog" className="hover:text-orange-500">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-orange-500">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-orange-600 mb-3">Subscribe</h3>
          <p className="text-gray-700 text-sm mb-3">
            Get the latest course updates straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none text-sm"
            />
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-orange-200 pt-5 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} SkillForge • Built with ❤️ for learners everywhere.
      </div>
    </footer>
  );
}

export default Footer;
