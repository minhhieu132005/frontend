import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Settings, User, BookOpen } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'My Schedule', path: '/my-schedule' },
    { name: 'My Session', path: '/my-sessions' },
    { name: 'Find Tutor', path: '/find-tutor' },
    { name: 'My Document', path: '/my-documents' },
    { name: 'My Profile', path: '/profile' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    // THAY ĐỔI: bg-[#EEEEEE] (Xám đậm hơn)
    <header className="bg-[#EEEEEE] w-full">
      
      {/* Tầng 1 */}
      <div className="px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0056b3] rounded-lg flex items-center justify-center text-white shadow-sm">
            <BookOpen size={24} strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900 text-lg leading-tight font-sans">
              HCMUT Tutor System
            </span>
            <span className="text-xs text-gray-600 font-medium">
              Vietnam National University
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6 text-gray-800">
          <button className="hover:text-[#0056b3] transition-colors"><Bell size={22} strokeWidth={2} /></button>
          <button className="hover:text-[#0056b3] transition-colors"><Settings size={22} strokeWidth={2} /></button>
          <button className="hover:text-[#0056b3] transition-colors">
            <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center hover:border-[#0056b3]">
               <User size={20} strokeWidth={2} />
            </div>
          </button>
        </div>
      </div>

      {/* Đường kẻ đậm hơn chút (gray-300 -> gray-400) để rõ trên nền xám */}
      <div className="border-b border-gray-300 w-full"></div>

      {/* Tầng 2 */}
      <div className="px-6 flex gap-8 items-center overflow-x-auto">
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            to={link.path}
            className={`
              whitespace-nowrap py-3 text-sm font-bold transition-all border-b-[3px]
              ${isActive(link.path) 
                ? 'text-gray-900 border-[#0056b3]' 
                : 'text-gray-600 border-transparent hover:text-[#0056b3]'
              }
            `}
          >
            {link.name}
          </Link>
        ))}
      </div>
      
      <div className="border-b border-gray-300 w-full"></div>
    </header>
  );
};

export default Navbar;