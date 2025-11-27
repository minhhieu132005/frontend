import React from 'react';
import Modal from '../ui/Modal';
import { Calendar, Clock } from 'lucide-react';

const RescheduleModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Reschedule Session">
      <p className="text-gray-500 text-sm mb-4">Select a new date and time for your tutoring session.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">New schedule</label>
          <div className="relative">
            <input type="text" placeholder="dd/mm/yyyy" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500" />
            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">New time</label>
          <div className="relative">
            <input type="text" placeholder="--:--" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500" />
            <Clock className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Reason for reschedule (Optional)</label>
          <textarea 
            rows="3"
            placeholder="Let your tutor know why you need to reschedule..." 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 resize-none"
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button onClick={onClose} className="px-4 py-2 text-gray-600 font-semibold">Cancel</button>
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Confirm Reschedule
        </button>
      </div>
    </Modal>
  );
};
export default RescheduleModal;