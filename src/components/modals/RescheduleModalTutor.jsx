import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { Calendar, Clock } from 'lucide-react';

export default function RescheduleModalTutor({ isOpen, onClose, onConfirm, slotId }) {
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!newDate || !newTime) {
      alert("Please select a new date and time!");
      return;
    }
    // gửi dữ liệu mới về parent để gọi API
    onConfirm({ slotId, newDate, newTime });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Reschedule Session">
      <p className="text-gray-500 text-sm mb-6">
        Select a new date and time for your tutoring session.
      </p>

      <div className="space-y-6">
        {/* Date */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">New date</label>
          <div className="relative">
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg outline-none"
            />
            
          </div>
        </div>

        {/* Time */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">New time</label>
          <div className="relative">
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg outline-none"
            />
           
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-8">
        <button onClick={onClose} className="px-4 py-2 text-gray-600 font-semibold">
          Cancel
        </button>

        <button
          onClick={handleConfirm}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Confirm Reschedule
        </button>
      </div>
    </Modal>
  );
}
