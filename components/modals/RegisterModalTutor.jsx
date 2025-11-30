import React, { useState } from 'react';

const RegisterModalTutor = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [sessionType, setSessionType] = useState("");

  const submitCreate = () => {
    if (!subject || !location || !date || !start || !end || !sessionType) {
      alert("Please fill all fields!");
      return;
    }

     const slotData = {
        subject,
        room: location,
        start_time: `${date}T${start}`,
        end_time: `${date}T${end}`,
        max_students: 30,         // Hardcode
      };

    onConfirm(slotData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Register Schedule</h2>

        {/* SUBJECT */}
        <label className="block font-medium mb-1">Session Subject</label>
        <input
          type="text"
          className="w-full border p-2 rounded mb-3"
          placeholder="Example: Data Structures"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        {/* LOCATION */}
        <label className="block font-medium mb-1">Classroom / Meeting Link</label>
        <input
          type="text"
          className="w-full border p-2 rounded mb-3"
          placeholder="Example: Room H6-302 or Zoom Link"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* DATE */}
        <label className="block mb-1 font-medium">Date</label>
        <input
          type="date"
          className="w-full border p-2 rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* TIME (start + end) */}
        <label className="block mb-1 font-medium">Time</label>
        <div className="flex gap-3 mb-4">
        <input
         type="time"
         className="w-1/2 border p-2 rounded" 
        value={start} 
        onChange={(e) => setStart(e.target.value)} 
        /> 
        <input
         type="time" 
         className="w-1/2 border p-2 rounded" 
         value={end}
          onChange={(e) => setEnd(e.target.value)} 
        /> 
        </div>

        {/* SESSION TYPE */}
        <label className="block mb-1 font-medium">Session Type</label>
        <select
          className="w-full border p-2 rounded mb-6"
          value={sessionType}
          onChange={(e) => setSessionType(e.target.value)}
        >
          <option value="">Select type...</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={submitCreate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirm Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModalTutor;
