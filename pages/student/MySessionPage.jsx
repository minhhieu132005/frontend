import React, { useEffect, useState } from 'react';
import RegisteredSessionCard from '../../components/schedule/RegisteredSessionCard';
import CancelModal from '../../components/modals/CancelModal';
import RescheduleModal from '../../components/modals/RescheduleModal'; // Giả sử bạn đã có file này
import { getMyBookings, cancelBooking } from '../../services/studentService';

const MySessionPage = () => {
  const [sessions, setSessions] = useState([]);
  const [modalState, setModalState] = useState({ type: null, selectedSession: null });

  // Load dữ liệu thật từ API
  const loadSessions = async () => {
    try {
      const data = await getMyBookings();
      // Map data API -> UI props
      const formatted = data.map(b => ({
        id: b.booking_id,
        tutorName: b.tutor?.name || "Unknown",
        subject: "General Tutoring", // Hoặc lấy từ b.tutor.expertise nếu có
        startTime: b.slot.start_time, // Truyền nguyên gốc để Card tự format
        endTime: b.slot.end_time,
        status: "Confirm" // Logic tạm: Nếu chưa qua ngày thì là Confirm
      }));
      setSessions(formatted);
    } catch (e) { console.error(e); }
  };

  useEffect(() => { loadSessions(); }, []);

  // Xử lý Hủy
  const handleCancelConfirm = async () => {
    if (!modalState.selectedSession) return;
    try {
      await cancelBooking(modalState.selectedSession.id);
      alert("Cancelled successfully!");
      setModalState({ type: null, selectedSession: null });
      loadSessions();
    } catch (e) { alert("Failed to cancel"); }
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] p-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6">My Session</h2>
        <div className="space-y-4">
          {sessions.map(session => (
            <RegisteredSessionCard 
              key={session.id} 
              session={session}
              onReschedule={(s) => setModalState({ type: 'reschedule', selectedSession: s })}
              onCancel={(s) => setModalState({ type: 'cancel', selectedSession: s })}
              onFeedback={(s) => setModalState({ type: 'feedback', selectedSession: s })}
            />
          ))}
        </div>
      </div>

      {/* Modals */}
      {modalState.type === 'cancel' && (
        <CancelModal 
          isOpen={true} 
          onClose={() => setModalState({ type: null, selectedSession: null })} 
          onConfirm={handleCancelConfirm} 
        />
      )}
      
      {/* Thêm RescheduleModal nếu cần */}
      {modalState.type === 'reschedule' && (
         <RescheduleModal isOpen={true} onClose={() => setModalState({ type: null, selectedSession: null })} />
      )}
    </div>
  );
};

export default MySessionPage;