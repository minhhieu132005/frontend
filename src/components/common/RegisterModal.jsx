import React, { useState } from 'react';

const RegisterModal = ({ isOpen, onClose, onConfirm, tutorName }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Register Schedule with {tutorName}</h2>
        
        <label className="block mb-2 font-medium">Date</label>
        <input 
          type="date" 
          className="w-full border p-2 rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label className="block mb-2 font-medium">Time</label>
        <select 
          className="w-full border p-2 rounded mb-6"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select time...</option>
          <option value="09:00">09:00 AM</option>
          <option value="14:00">02:00 PM</option>
        </select>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">Cancel</button>
          <button 
            onClick={() => onConfirm(date, time)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirm Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default RegisterModal;