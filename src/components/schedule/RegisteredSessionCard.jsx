import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegisteredSessionCard = ({ session, onReschedule, onCancel, onFeedback }) => {
  const navigate = useNavigate();

  // Xử lý format ngày giờ từ API (dạng ISO string) hoặc string có sẵn
  // Backend trả về: slot.start_time và slot.end_time
  let dateStr = "N/A";
  let timeStr = "N/A";

  if (session.time && session.time.includes('|')) {
     // Trường hợp data mock cũ
     [dateStr, timeStr] = session.time.split('|');
  } else if (session.startTime) {
     // Trường hợp data từ API thật
     const dateObj = new Date(session.startTime);
     dateStr = dateObj.toLocaleDateString('en-GB'); // dd/mm/yyyy
     timeStr = `${dateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - ${new Date(session.endTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
  }

  const isDone = session.status === 'Done';

  // Hàm chuyển trang chi tiết
  const handleCardClick = () => {
    navigate(`/session/${session.id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-[#EEEEEE] rounded-2xl border border-gray-300 p-5 mb-4 relative cursor-pointer hover:border-[#0056b3] transition-all group"
    >
      <div className="flex gap-4 items-start">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-[#0056b3] flex items-center justify-center text-white font-bold text-lg shrink-0">
          {session.tutorName?.substring(0, 2).toUpperCase()}
        </div>

        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-[#0056b3] transition-colors">
                {session.tutorName}
              </h4>
              <p className="text-gray-500 text-sm mt-1 mb-2">{session.subject}</p>
            </div>
            <span className="bg-[#0056b3] text-white text-xs font-bold px-4 py-1.5 rounded-full">
              {session.status}
            </span>
          </div>

          {/* Ngày giờ */}
          <div className="flex items-center gap-5 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays size={16} className="text-gray-500" strokeWidth={2} />
              <span className="font-medium">{dateStr}</span> 
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={16} className="text-gray-500" strokeWidth={2} />
              <span className="font-medium">{timeStr}</span>
            </div>
          </div>

          {/* Nút bấm (QUAN TRỌNG: stopPropagation) */}
          <div className="flex items-center gap-4">
            {isDone ? (
              <button 
                onClick={(e) => { e.stopPropagation(); onFeedback(session); }}
                className="bg-[#0056b3] hover:bg-blue-700 text-white font-bold text-sm py-2 px-6 rounded-lg transition-colors z-10 relative"
              >
                Feedback
              </button>
            ) : (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); onReschedule(session); }}
                  className="bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 text-gray-900 font-bold text-sm py-2 px-5 rounded-lg transition-colors z-10 relative"
                >
                  Reschedule
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onCancel(session); }}
                  className="text-gray-900 font-bold text-sm hover:text-red-600 transition-colors px-2 z-10 relative"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredSessionCard;