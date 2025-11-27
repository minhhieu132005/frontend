import React, { useState } from 'react';
import RegisteredSessionCard from '../../components/schedule/RegisteredSessionCard';
// Import các modal nếu cần dùng chức năng
import RescheduleModal from '../../components/modals/RescheduleModal';
import CancelModal from '../../components/modals/CancelModal';
import FeedbackModal from '../../components/modals/FeedbackModal';

const MySessionPage = () => {
  // State quản lý modal
  const [modalState, setModalState] = useState({ type: null, selectedSession: null });

  // Mock Data giống trong hình ảnh bạn gửi
  const sessions = [
    { 
      id: 1, 
      tutorName: "Nguyễn Văn A", 
      subject: "Data Structures & Algorithms", 
      time: "Oct 18, 2025 | 2:00 PM - 3:30 PM",
      status: "Confirm" 
    },
    { 
      id: 2, 
      tutorName: "Nguyễn Văn A", 
      subject: "Data Structures & Algorithms", 
      time: "Oct 18, 2025 | 2:00 PM - 3:30 PM",
      status: "Done" 
    },
    { 
      id: 3, 
      tutorName: "Nguyễn Văn A", 
      subject: "Data Structures & Algorithms", 
      time: "Oct 18, 2025 | 2:00 PM - 3:30 PM",
      status: "Done" 
    },
  ];

  const openModal = (type, session) => setModalState({ type, selectedSession: session });
  const closeModal = () => setModalState({ type: null, selectedSession: null });

  return (
    // Nền xám #EEEEEE toàn màn hình
    <div className="min-h-screen bg-[#EEEEEE] p-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">My Session</h2>
          <p className="text-gray-500 text-sm">Manage your tutoring sessions</p>
        </div>

        {/* Danh sách Sessions */}
        <div className="space-y-4">
          {sessions.map(session => (
            <RegisteredSessionCard 
              key={session.id} 
              session={session}
              onReschedule={(s) => openModal('reschedule', s)}
              onCancel={(s) => openModal('cancel', s)}
              onFeedback={(s) => openModal('feedback', s)}
            />
          ))}
        </div>
      </div>

      {/* Modals Area */}
      {modalState.type === 'reschedule' && <RescheduleModal isOpen={true} onClose={closeModal} />}
      {modalState.type === 'cancel' && <CancelModal isOpen={true} onClose={closeModal} onConfirm={closeModal} />}
      {modalState.type === 'feedback' && <FeedbackModal isOpen={true} onClose={closeModal} />}
    </div>
  );
};

export default MySessionPage;