import React from 'react';
import { CalendarDays, Clock } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

// Chú ý danh sách props: nhận displayDate và displayTime
const SessionItem = ({ id, tutorName, subject, displayDate, displayTime, onReschedule, onCancel }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/session/${id}`)}
      className="flex flex-col md:flex-row md:items-center justify-between p-5 mb-4 bg-[#F5F5F5] rounded-2xl border border-gray-300 cursor-pointer hover:border-[#0056b3] transition-all group"
    >
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-full bg-[#0056b3] flex items-center justify-center text-white font-bold text-lg shrink-0">
          {tutorName?.substring(0, 2).toUpperCase()}
        </div>
        
        <div className="flex flex-col">
          <h4 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-[#0056b3] transition-colors">
            {tutorName}
          </h4>
          <p className="text-gray-500 text-sm mt-1 mb-2">{subject}</p>
          
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays size={18} className="text-gray-500" strokeWidth={2} />
              {/* Sử dụng prop displayDate */}
              <span className="font-medium">{displayDate}</span> 
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={18} className="text-gray-500" strokeWidth={2} />
              {/* Sử dụng prop displayTime */}
              <span className="font-medium">{displayTime}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 mt-4 md:mt-0 items-center">
        <button 
          onClick={(e) => { e.stopPropagation(); onReschedule(); }}
          className="bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 text-gray-900 font-bold text-sm py-2 px-5 rounded-lg transition-colors z-10"
        >
          Reschedule
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); onCancel(); }}
          className="text-gray-900 font-bold text-sm hover:text-red-600 transition-colors px-2 z-10"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SessionItem;