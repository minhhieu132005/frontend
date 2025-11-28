import React from 'react';
import Modal from '../ui/Modal';
import { Calendar, Clock } from 'lucide-react';

export default function RescheduleModalTutor({ isOpen, onClose }) {
  if (!isOpen) return null;

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
              placeholder="dd/mm/yyyy"
              className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg outline-none"
            />
            <Calendar size={20} className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Time */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">New time</label>
          <div className="relative">
            <input
              placeholder="--:--"
              className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg outline-none"
            />
            <Clock size={20} className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-8">
        <button onClick={onClose} className="px-4 py-2 text-gray-600 font-semibold">
          Cancel
        </button>

        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Confirm Reschedule
        </button>
      </div>
    </Modal>
  );
}
