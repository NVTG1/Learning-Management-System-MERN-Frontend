import React from "react";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { assets } from "../../assets/assets";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 bg-orange-600 text-white shadow-md">
      <div className="flex items-center gap-3">
        <img src={assets.Logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">SkillForge Educator</h1>
      </div>
      <UserButton />
    </div>
  );
}

export default Navbar;
