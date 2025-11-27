import React from 'react';
import { Star, Calendar, Bookmark } from 'lucide-react';

const TutorCard = ({ tutor, onRegister }) => {
  return (
    // THAY ĐỔI: bg-[#EEEEEE] (Trùng màu Navbar), giữ viền xám
    <div className="bg-[#EEEEEE] rounded-2xl border border-gray-300 p-6 flex flex-col justify-between h-full hover:shadow-sm transition-shadow">
      
      <div>
        {/* Header: Avatar + Info */}
        <div className="flex gap-4 mb-5">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-[#0056b3] text-white flex items-center justify-center text-xl font-bold shrink-0">
            {tutor.avatar || "NA"}
          </div>
          
          {/* Info */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">{tutor.name}</h3>
            <p className="text-gray-500 text-sm mb-1">{tutor.role}</p>
            <div className="flex items-center gap-1 text-sm font-bold text-gray-900">
              <Star size={16} className="fill-[#0056b3] text-[#0056b3]" /> 
              {tutor.rating} 
              <span className="text-gray-400 font-normal ml-1">({tutor.reviews})</span>
            </div>
          </div>
        </div>

        {/* Tags (Môn học) */}
        {/* THAY ĐỔI: Nền tags đậm hơn nền thẻ một chút (#DCDCDC) để nổi bật */}
        <div className="flex gap-2 flex-wrap mb-6">
          {tutor.subjects.map((sub, idx) => (
            <span key={idx} className="text-xs font-semibold text-gray-700 bg-[#DCDCDC] px-3 py-1.5 rounded-full">
              {sub}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 font-medium">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-gray-400" /> {tutor.sessions} sessions
          </div>
          <div className="flex items-center gap-2">
            <Bookmark size={18} className="text-gray-400" /> Available
          </div>
        </div>
      </div>

      {/* Footer: Nút Đăng ký */}
      <button 
        onClick={onRegister}
        className="w-full bg-[#0056b3] hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
      >
        Register Tutor
      </button>
    </div>
  );
};

export default TutorCard;