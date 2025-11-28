import React from 'react';
import { CalendarDays, Clock, Users, MapPin } from 'lucide-react';

const SessionItemTutor = ({ studentCount, subject, location, time, onViewClass, onReschedule, onCancel }) => {
  const [dateStr, timeStr] = time.includes('|') ? time.split('|') : [time, ""];

  return (
    <div className="bg-[#EEEEEE] rounded-2xl border border-gray-300 p-5 mb-4">

      <div className="flex flex-col w-full">

        {/* Subject (hiển thị như tutorName cũ) */}
        <p onClick={onViewClass}
            className="text-gray-900 font-bold text-md mt-1 mb-2 cursor-pointer hover:text-[#0056b3] transition"
            >
            {subject}
        </p>

        {/* Student Count & Location */}
        <div className="flex items-center gap-5 mt-2 mb-3 text-gray-600 text-sm">

          {/* Student count */}
          <div className="flex items-center gap-2">
            <Users size={16} className="text-gray-500" />
            <span className="font-medium">{studentCount} students</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-500" />
            <span className="font-medium">{location}</span>
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-5 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-gray-500" />
            <span className="font-medium">{dateStr.trim()}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gray-500" />
            <span className="font-medium">{timeStr.trim()}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onReschedule}
            className="bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 
            text-gray-900 font-bold text-sm py-2 px-5 rounded-lg transition-colors"
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
  );
};

export default SessionItemTutor;