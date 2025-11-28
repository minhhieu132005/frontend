import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import TutorCard from '../../components/tutor/TutorCard';
import RegisterModal from '../../components/common/RegisterModal';
import { getAllTutors, searchTutorsBySubject, getTutorSlots, createBooking } from '../../services/studentService';

const FindTutorPage = () => {
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTutor, setSelectedTutor] = useState(null);

  useEffect(() => {
    loadTutors(getAllTutors);
  }, []);

  const loadTutors = async (apiCall, arg) => {
    try {
      const data = await apiCall(arg);
      const formatted = data.map(t => ({
        ...t,
        id: t.tutor_id,
        role: "Senior Teacher",
        rating: 5.0,
        sessions: t.freeSlots?.length || 0,
        subjects: t.listExpertise || [],
        avatar: t.name.charAt(0).toUpperCase(),
        freeSlots: t.freeSlots
      }));
      setTutors(formatted);
    } catch (e) { console.error(e); }
  };

  const handleSearch = () => {
    if (!searchTerm) loadTutors(getAllTutors);
    else loadTutors(searchTutorsBySubject, searchTerm);
  };

  const handleOpenRegister = async (tutor) => {
    setSelectedTutor(tutor);
    if (!tutor.freeSlots) {
      try {
        const slots = await getTutorSlots(tutor.id);
        setSelectedTutor(prev => ({ ...prev, freeSlots: slots.filter(s => !s.is_booked) }));
      } catch (e) {}
    }
  };

  const handleConfirmRegister = async (slotId) => {
    try {
      await createBooking(selectedTutor.id, slotId);
      alert("Booking successful!");
      setSelectedTutor(null);
    } catch (e) { alert("Failed to book"); }
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6"><h2 className="text-2xl font-bold text-gray-900 mb-1">Find a Tutor</h2></div>
        <div className="relative mb-8 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
            <input type="text" placeholder="Search subject (e.g. math)..." className="w-full pl-12 pr-4 py-3 bg-[#E0E0E0] border border-gray-300 rounded-xl outline-none focus:border-[#0056b3]" 
              value={searchTerm} onChange={e => setSearchTerm(e.target.value)} onKeyDown={e => e.key==='Enter' && handleSearch()}
            />
          </div>
          <button onClick={handleSearch} className="bg-[#0056b3] text-white px-6 rounded-xl font-bold">Search</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutors.map(t => <TutorCard key={t.id} tutor={t} onRegister={() => handleOpenRegister(t)} />)}
        </div>
        {selectedTutor && <RegisterModal isOpen={true} tutor={selectedTutor} onClose={() => setSelectedTutor(null)} onConfirm={handleConfirmRegister} />}
      </div>
    </div>
  );
};
export default FindTutorPage;