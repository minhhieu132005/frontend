import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TutorCard from '../../components/tutor/TutorCard';
import RegisterModal from '../../components/common/RegisterModal';

const FindTutorPage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);
  
  const tutors = [
    { 
      id: 1, 
      name: "Nguyễn Văn A", 
      role: "Senior Teacher", 
      rating: 4.9, 
      reviews: "45 viewers", 
      sessions: 120, 
      avatar: "NA", 
      subjects: ["Data Structures", "Algorithms", "Programming"] 
    },
    { 
      id: 2, 
      name: "Nguyễn Văn A", 
      role: "Senior Teacher", 
      rating: 4.9, 
      reviews: "45 viewers", 
      sessions: 120, 
      avatar: "NA", 
      subjects: ["Data Structures", "Algorithms", "Programming"] 
    },
    { 
      id: 3, 
      name: "Nguyễn Văn A", 
      role: "Senior Teacher", 
      rating: 4.9, 
      reviews: "45 viewers", 
      sessions: 120, 
      avatar: "NA", 
      subjects: ["Data Structures", "Algorithms", "Programming"] 
    },
  ];

  const handleRegister = (tutor) => {
    setSelectedTutor(tutor);
    setShowRegister(true);
  };

  return (
    // SỬA LẠI: bg-[#EEEEEE] -> Đảm bảo trùng khớp hoàn toàn với Navbar
    <div className="min-h-screen bg-[#EEEEEE] p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Text */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Find a Tutor</h2>
          <p className="text-gray-500 text-sm">Browse available tutors and schedule sessions</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
          <input 
            type="text" 
            placeholder="Search by name, subject or expertise" 
            // bg-[#E0E0E0]: Màu đậm hơn nền trang một chút để nổi bật ô tìm kiếm
            className="w-full pl-12 pr-4 py-3 bg-[#E0E0E0] border border-gray-300 rounded-xl outline-none focus:border-[#0056b3] text-gray-800 placeholder-gray-500 transition-colors"
          />
        </div>

        {/* Grid Tutors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map(t => (
            <TutorCard key={t.id} tutor={t} onRegister={() => handleRegister(t)} />
          ))}
        </div>

        {/* Popup Register */}
        {showRegister && (
          <RegisterModal 
            isOpen={true}
            tutorName={selectedTutor?.name}
            onClose={() => setShowRegister(false)}
            onConfirm={() => { alert("Registered!"); setShowRegister(false); }}
          />
        )}
      </div>
    </div>
  );
};

export default FindTutorPage;