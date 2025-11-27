import React, { useState } from 'react';
import SessionItem from '../../components/schedule/SessionItem';
import RescheduleModal from '../../components/modals/RescheduleModal';
import CancelModal from '../../components/modals/CancelModal';
import { CalendarPlus, Search, MessageSquare } from 'lucide-react'; // Icons cho sidebar

const MySchedulePage = () => {
  // State quản lý modal
  const [showReschedule, setShowReschedule] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  // Mock Data
  const sessions = [
    { id: 1, name: "Nguyễn Văn A", subject: "Data Structures & Algorithms", time: "15 Oct 2025 | 2:00 PM - 4:00 PM" },
    { id: 2, name: "Nguyễn Văn A", subject: "Data Structures & Algorithms", time: "18 Oct 2025 | 2:00 PM - 4:00 PM" },
    { id: 3, name: "Nguyễn Văn A", subject: "Data Structures & Algorithms", time: "20 Oct 2025 | 2:00 PM - 4:00 PM" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 pt-8">
      {/* Tiêu đề Section */}
      <div className="flex gap-12">
        
        {/* CỘT TRÁI: LỊCH TRÌNH */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Upcoming Sessions</h2>
          <p className="text-gray-400 text-sm mb-6">Your scheduled tutoring sessions</p>
          
          <div className="space-y-4">
            {sessions.map(s => (
              <SessionItem 
                key={s.id}
                tutorName={s.name}
                subject={s.subject}
                time={s.time}
                onReschedule={() => setShowReschedule(true)}
                onCancel={() => setShowCancel(true)}
              />
            ))}
          </div>
        </div>

        {/* CỘT PHẢI: SIDEBAR (Fig 71 right side) */}
        <div className="w-72 hidden md:block">
          <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="flex items-center gap-3 w-full text-left text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <CalendarPlus size={20} /> Schedule New Session
            </button>
            <button className="flex items-center gap-3 w-full text-left text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <Search size={20} /> Find a Tutor
            </button>
            <button className="flex items-center gap-3 w-full text-left text-gray-600 hover:text-blue-600 hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <MessageSquare size={20} /> Leave Feedback
            </button>
          </div>

          <h3 className="font-bold text-gray-900 mt-10 mb-4">Recent Feedback</h3>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border-b border-gray-100 pb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm">Dr Nguyễn Văn A</span>
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                </div>
                <p className="text-xs text-gray-500 italic">"Excellent explanation of complex algorithms..."</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODALS */}
      <RescheduleModal isOpen={showReschedule} onClose={() => setShowReschedule(false)} />
      <CancelModal isOpen={showCancel} onClose={() => setShowCancel(false)} onConfirm={() => setShowCancel(false)} />
    </div>
  );
};

export default MySchedulePage;