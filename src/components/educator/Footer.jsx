import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 border-t">
      © {new Date().getFullYear()} SkillForge Educator Dashboard
    </footer>
  );
}

export default Footer;
