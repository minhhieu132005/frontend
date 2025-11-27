import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const RegisteredSessionCard = ({ session, onReschedule, onCancel, onFeedback }) => {
  const navigate = useNavigate(); // 2. Khởi tạo hook navigate

  // Tách chuỗi thời gian
  const [dateStr, timeStr] = session.time.includes('|') ? session.time.split('|') : [session.time, ""];
  const isDone = session.status === 'Done';

  // Hàm xử lý khi click vào Card
  const handleCardClick = () => {
    // Chuyển hướng đến trang chi tiết kèm theo ID của session
    navigate(`/session/${session.id}`);
  };

  return (
    // 3. Thêm onClick và cursor-pointer vào div bao ngoài
    <div 
      onClick={handleCardClick}
      className="bg-[#EEEEEE] rounded-2xl border border-gray-300 p-5 mb-4 relative cursor-pointer hover:border-blue-400 transition-all group"
    >
      <div className="flex gap-4 items-start">
        
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-[#0056b3] flex items-center justify-center text-white font-bold text-lg shrink-0 group-hover:scale-105 transition-transform">
          {session.tutorName.split(' ').map(n => n[0]).join('').substring(0,2)}
        </div>

        {/* Nội dung chính */}
        <div className="flex flex-col w-full">
          
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-[#0056b3] transition-colors">
                {session.tutorName}
              </h4>
              <p className="text-gray-500 text-sm mt-1 mb-2">{session.subject}</p>
            </div>
            
            {/* Badge trạng thái */}
            <span className="bg-[#0056b3] text-white text-xs font-bold px-4 py-1.5 rounded-full">
              {session.status}
            </span>
          </div>

          {/* Ngày giờ */}
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

          {/* Khu vực nút bấm */}
          <div className="flex items-center gap-4">
            {isDone ? (
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // 4. Ngăn chặn sự kiện click lan ra Card
                  onFeedback(session);
                }}
                className="bg-[#0056b3] hover:bg-blue-700 text-white font-bold text-sm py-2 px-6 rounded-lg transition-colors z-10 relative"
              >
                Feedback
              </button>
            ) : (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Ngăn click lan ra Card
                    onReschedule(session);
                  }}
                  className="bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 text-gray-900 font-bold text-sm py-2 px-5 rounded-lg transition-colors z-10 relative"
                >
                  Reschedule
                </button>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Ngăn click lan ra Card
                    onCancel(session);
                  }}
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