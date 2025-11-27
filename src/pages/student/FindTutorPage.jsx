import React, { useState } from 'react';
import { Search, Calendar, Clock } from 'lucide-react';
import TutorCard from '../../components/tutor/TutorCard';
import Modal from '../../components/ui/Modal'; // Dùng lại Base Modal

const FindTutorPage = () => {
  const [showRegister, setShowRegister] = useState(false);
  
  // Mock Tutor Data
  const tutors = [
    { id: 1, name: "Nguyễn Văn A", role: "Senior Teacher", rating: 4.9, reviews: "120 reviews", sessions: 120, avatar: "NA", subjects: ["Data Structures", "Algorithms", "Programming"] },
    { id: 2, name: "Trần Thị B", role: "Senior Teacher", rating: 4.8, reviews: "98 reviews", sessions: 90, avatar: "TB", subjects: ["Calculus 1", "Calculus 2", "Linear Algebra"] },
    { id: 3, name: "Lê Văn C", role: "Assistant", rating: 4.5, reviews: "45 reviews", sessions: 30, avatar: "LC", subjects: ["Physics 1", "Physics 2"] },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 pt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Find a Tutor</h2>
      <p className="text-gray-400 text-sm mb-8">Browse available tutors and schedule sessions</p>

      {/* Search Bar (Giống Fig 74 top) */}
      <div className="relative mb-10">
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search by name, subject or expertise" 
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500"
        />
      </div>

      {/* Grid Tutors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tutors.map(t => (
          <TutorCard key={t.id} tutor={t} onRegister={() => setShowRegister(true)} />
        ))}
      </div>

      {/* POPUP REGISTER (Giống Figure 75) */}
      <Modal isOpen={showRegister} onClose={() => setShowRegister(false)} title="Register Schedule">
        <p className="text-gray-500 text-sm mb-4">Select a date and time for your session</p>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
            <div className="relative">
                <input type="text" placeholder="dd/mm/yyyy" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" />
                <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Time</label>
            <div className="relative">
                <input type="text" placeholder="--:--" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" />
                <Clock className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
            <button onClick={() => setShowRegister(false)} className="px-4 py-2 text-gray-600 font-semibold">Cancel</button>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg">Confirm Register</button>
        </div>
      </Modal>
    </div>
  );
};

export default FindTutorPage;