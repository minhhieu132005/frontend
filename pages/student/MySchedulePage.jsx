import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarPlus, Users, Star } from 'lucide-react';
import SessionItem from '../../components/schedule/SessionItem';
import CancelModal from '../../components/modals/CancelModal';
import { getMyBookings, cancelBooking } from '../../services/studentService';

const MySchedulePage = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState(null);

  const fetchSchedule = async () => {
    setLoading(true);
    try {
      const data = await getMyBookings();
      
      // Kiểm tra nếu API không trả về mảng (tránh lỗi crash .filter)
      if (!Array.isArray(data)) {
        console.error("API Error: Data is not an array", data);
        setSessions([]);
        return;
      }

      const now = new Date();
      
      // 1. LỌC & MAP DỮ LIỆU
      const validSessions = data
        .filter(b => b.slot && b.slot.end_time) // Chỉ lấy bản ghi có slot hợp lệ
        .filter(b => new Date(b.slot.end_time) > now) // Lấy slot tương lai
        .sort((a, b) => new Date(a.slot.start_time) - new Date(b.slot.start_time)) // Sắp xếp tăng dần
        .map(b => {
           const start = new Date(b.slot.start_time);
           const end = new Date(b.slot.end_time);
           return {
              id: b.booking_id,
              tutorName: b.tutor?.name || "Unknown Tutor",
              subject: "General Tutoring",
              // Format sẵn để hiển thị
              displayDate: start.toLocaleDateString('en-GB'), // dd/mm/yyyy
              displayTime: `${start.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})} - ${end.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`
           };
        });

      setSessions(validSessions);
    } catch (e) {
      console.error("Lỗi tải lịch trình:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  const handleCancelConfirm = async () => {
    if (!selectedSession) return;
    try {
      await cancelBooking(selectedSession.id);
      alert("Đã hủy lịch thành công!");
      setSelectedSession(null);
      fetchSchedule();
    } catch (e) {
      alert("Lỗi hủy lịch: " + (e.response?.data?.message || "Lỗi server"));
    }
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] p-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        
        {/* CỘT TRÁI */}
        <div className="flex-1 border border-gray-300 rounded-2xl p-6 bg-[#EEEEEE]">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Upcoming Sessions</h2>
          <p className="text-gray-500 text-sm mb-6">Your scheduled tutoring sessions</p>
          
          <div className="space-y-4">
            {loading ? (
              <p className="text-center text-gray-500 py-10">Đang tải...</p>
            ) : sessions.length > 0 ? (
              sessions.map(s => (
                <SessionItem 
                  key={s.id} 
                  // Truyền tất cả props đã map ở trên
                  id={s.id}
                  tutorName={s.tutorName}
                  subject={s.subject}
                  displayDate={s.displayDate}
                  displayTime={s.displayTime}
                  onReschedule={() => alert("Tính năng đang phát triển")} 
                  onCancel={() => setSelectedSession(s)} 
                />
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 mb-2">No upcoming sessions found.</p>
                <Link to="/find-tutor" className="text-[#0056b3] font-bold hover:underline">Find a tutor</Link>
              </div>
            )}
          </div>
        </div>
        
        {/* CỘT PHẢI (Sidebar) */}
        <div className="w-full md:w-80 flex flex-col gap-6">
           <div className="border border-gray-300 rounded-2xl p-6 bg-[#EEEEEE]">
            <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link to="/find-tutor" className="flex items-center gap-3 w-full text-left text-gray-900 font-medium bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 p-3 rounded-lg"><CalendarPlus size={20} /> Schedule New Session</Link>
              <Link to="/find-tutor" className="flex items-center gap-3 w-full text-left text-gray-900 font-medium bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 p-3 rounded-lg"><Users size={20} /> Find a Tutor</Link>
              <button className="flex items-center gap-3 w-full text-left text-gray-900 font-medium bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 p-3 rounded-lg"><Star size={20} /> Leave Feedback</button>
            </div>
          </div>
          {/* ... (Phần Recent Feedback giữ nguyên) ... */}
        </div>
      </div>
      <CancelModal isOpen={!!selectedSession} onClose={() => setSelectedSession(null)} onConfirm={handleCancelConfirm} />
    </div>
  );
};

export default MySchedulePage;