import React from 'react';
// 1. Thêm import icon từ thư viện lucide-react
import { CalendarDays, Clock } from 'lucide-react';

const SessionCard = ({ session, onReschedule, onCancel }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex items-center gap-4">
        <img src={session.avatar} alt="tutor" className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-bold text-lg">{session.tutorName}</h3>
          <p className="text-gray-600">{session.subject}</p>
          
          {/* 2. Thay thế đoạn hiển thị ngày giờ cũ bằng đoạn code mới có icon */}
          <div className="flex flex-col gap-1.5 mt-2">
            {/* Dòng Ngày tháng */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays size={16} className="text-gray-400" strokeWidth={2} />
              <span className="font-medium">{session.date}</span> 
            </div>

            {/* Dòng Thời gian */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={16} className="text-gray-400" strokeWidth={2} />
              <span className="font-medium">{session.time}</span>
            </div>
          </div>
          {/* Kết thúc phần thay đổi */}

        </div>
      </div>
      <div className="flex gap-3">
        <button 
          onClick={() => onReschedule(session.id)}
          className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
        >
          Reschedule
        </button>
        <button 
          onClick={() => onCancel(session.id)}
          className="px-4 py-2 text-red-600 border border-red-600 rounded hover:bg-red-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default SessionCard;