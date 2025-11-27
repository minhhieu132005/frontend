import React from 'react';
import { CalendarDays, Clock } from 'lucide-react'; 

const SessionItem = ({ tutorName, subject, time, onReschedule, onCancel }) => {
  const [dateStr, timeStr] = time.includes('|') ? time.split('|') : [time, ""];

  return (
    // THAY ĐỔI: bg-[#EEEEEE] và border-gray-300
    <div className="bg-[#EEEEEE] rounded-2xl border border-gray-300 p-5 mb-4">
      
      <div className="flex gap-4 items-start">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-[#0056b3] flex items-center justify-center text-white font-bold text-lg shrink-0">
          {tutorName.split(' ').map(n => n[0]).join('').substring(0,2)}
        </div>
        
        <div className="flex flex-col w-full">
          <h4 className="font-bold text-gray-900 text-lg leading-tight">{tutorName}</h4>
          <p className="text-gray-500 text-sm mt-1 mb-2">{subject}</p>
          
          {/* Icon xám */}
          <div className="flex items-center gap-5 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays size={16} className="text-gray-500" strokeWidth={2} />
              <span className="font-medium">{dateStr.trim()}</span> 
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={16} className="text-gray-500" strokeWidth={2} />
              <span className="font-medium">{timeStr.trim()}</span>
            </div>
          </div>

          {/* Nút bấm */}
          <div className="flex items-center gap-4">
            {/* THAY ĐỔI: Nút Reschedule đậm hơn nền thẻ một chút (bg-[#DCDCDC]) */}
            <button 
              onClick={onReschedule}
              className="bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 text-gray-900 font-bold text-sm py-2 px-5 rounded-lg transition-colors"
            >
              Reschedule
            </button>
            
            <button 
              onClick={onCancel}
              className="text-gray-900 font-bold text-sm hover:text-red-600 transition-colors px-2"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SessionItem;