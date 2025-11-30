import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Settings, User, BookOpen } from 'lucide-react';

const Navbar = ({ role = "student" }) => {
  const location = useLocation();

  // ===================== MENU THEO ROLE ===================== //
  const studentLinks = [
    { name: 'My Schedule', path: '/my-schedule' },
    { name: 'My Session', path: '/my-sessions' },
    { name: 'Find Tutor', path: '/find-tutor' },
    { name: 'My Document', path: '/my-documents' },
    { name: 'My Profile', path: '/profile' },
  ];

  const tutorLinks = [
    
    { name: 'My Schedule', path: '/tutors/schedule' },
    { name: 'My Documents', path: '/tutors/mydocument' },
    
    { name: 'Feedback', path: '/tutor/feedback' },
    { name: 'My Profile', path: '/tutor/profile' },
  ];

  // chọn menu dựa theo role
  const navLinks = role === "tutor" ? tutorLinks : studentLinks;

  // active link
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#EEEEEE] w-full shadow-sm">

      {/* ===================== TẦNG 1 ===================== */}
      <div className="px-6 py-4 flex justify-between items-center">
        
        {/* LEFT TITLE */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0056b3] rounded-lg flex items-center justify-center text-white">
            <BookOpen size={24} />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-gray-900 text-lg leading-tight">
              HCMUT Tutor System
            </span>
            <span className="text-xs text-gray-600">
              Vietnam National University
            </span>
          </div>
        </Link>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6 text-gray-800">
          <button className="hover:text-[#0056b3]"><Bell size={22} /></button>
          <button className="hover:text-[#0056b3]"><Settings size={22} /></button>

          <button className="hover:text-[#0056b3]">
            <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center hover:border-[#0056b3]">
              <User size={20} />
            </div>
          </button>
        </div>
      </div>

      {/* LINE */}
      <div className="border-b border-gray-300 w-full"></div>

      {/* ===================== TẦNG 2 (MENU) ===================== */}
      <div className="px-6 flex gap-8 items-center overflow-x-auto">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`
              whitespace-nowrap py-3 text-sm font-bold border-b-[3px] transition-all
              ${isActive(link.path)
                ? "text-gray-900 border-[#0056b3]"
                : "text-gray-600 border-transparent hover:text-[#0056b3]"}
            `}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* LINE */}
      <div className="border-b border-gray-300 w-full"></div>
    </header>
  );
};

export default Navbar;
