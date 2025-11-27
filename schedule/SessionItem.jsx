// File: src/components/schedule/SessionItem.jsx
import React from 'react';
import { CalendarDays, Clock } from 'lucide-react'; 

const SessionItem = ({ tutorName, subject, time, onReschedule, onCancel }) => {
  const [dateStr, timeStr] = time.includes('|') ? time.split('|') : [time, ""];

  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between p-4 mb-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {/* Avatar Circle */}
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
          {tutorName.split(' ').map(n => n[0]).join('').substring(0,2)}
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{tutorName}</h4>
          <p className="text-gray-500 text-sm mb-1">{subject}</p>
          
          {}
          <div className="flex flex-col gap-1.5 mt-2">
            {/* Dòng Ngày tháng */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays size={16} className="text-gray-400" strokeWidth={2} />
              <span className="font-medium">{dateStr.trim()}</span> 
            </div>

            {/* Dòng Thời gian */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={16} className="text-gray-400" strokeWidth={2} />
              <span className="font-medium">{timeStr.trim()}</span>
            </div>
          </div>
          {}

        </div>
      </div>
      
      <div className="flex gap-4 mt-4 md:mt-0">
        <button 
          onClick={onReschedule}
          className="text-gray-900 font-bold text-sm hover:text-blue-600 underline decoration-transparent hover:decoration-blue-600 transition-all"
        >
          Reschedule
        </button>
        <button 
          onClick={onCancel}
          className="text-gray-900 font-bold text-sm hover:text-red-600 underline decoration-transparent hover:decoration-red-600 transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SessionItem;