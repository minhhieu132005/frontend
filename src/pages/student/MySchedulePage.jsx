import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SessionItem from '../../components/schedule/SessionItem';
import RescheduleModal from '../../components/modals/RescheduleModal'; // (Giả sử bạn đã có file này như hướng dẫn trước)
import CancelModal from '../../components/modals/CancelModal';         // (Giả sử bạn đã có file này)
import { CalendarPlus, Users, Star } from 'lucide-react';

const MySchedulePage = () => {
  const [showReschedule, setShowReschedule] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  const sessions = [
    { id: 1, name: "Nguyễn Văn A", subject: "Data Structures & Algorithms", time: "Oct 18, 2025 | 2:00 PM - 3:30 PM" },
    { id: 2, name: "Trần Thị B", subject: "Introduction to AI", time: "Oct 20, 2025 | 9:00 AM - 11:00 AM" },
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] p-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        
        {/* CỘT TRÁI */}
        <div className="flex-1 border border-gray-300 rounded-2xl p-6 bg-[#EEEEEE]">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Upcoming Sessions</h2>
          <p className="text-gray-500 text-sm mb-6">Your scheduled tutoring sessions</p>
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

        {/* CỘT PHẢI */}
        <div className="w-full md:w-80 flex flex-col gap-6">
          <div className="border border-gray-300 rounded-2xl p-6 bg-[#EEEEEE]">
            <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link to="/find-tutor" className="flex items-center gap-3 w-full text-left text-gray-900 font-medium bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 p-3 rounded-lg transition-colors">
                <CalendarPlus size={20} /> Schedule New Session
              </Link>
              <Link to="/find-tutor" className="flex items-center gap-3 w-full text-left text-gray-900 font-medium bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 p-3 rounded-lg transition-colors">
                <Users size={20} /> Find a Tutor
              </Link>
              <button className="flex items-center gap-3 w-full text-left text-gray-900 font-medium bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 p-3 rounded-lg transition-colors">
                <Star size={20} /> Leave Feedback
              </button>
            </div>
          </div>

          <div className="border border-gray-300 rounded-2xl p-6 h-full bg-[#EEEEEE]">
            <h3 className="font-bold text-gray-900 mb-4">Recent Feedback</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-300 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm text-gray-800">Dr Nguyễn Văn A</span>
                  <div className="flex text-[#0056b3] text-xs">★★★★★</div>
                </div>
                <p className="text-xs text-gray-500">Excellent explanation of complex algorithms...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showReschedule && <RescheduleModal isOpen={true} onClose={() => setShowReschedule(false)} />}
      {showCancel && <CancelModal isOpen={true} onClose={() => setShowCancel(false)} />}
    </div>
  );
};
export default MySchedulePage;