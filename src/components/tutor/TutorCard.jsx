import React from 'react';
import { Star, BookOpen, UserCheck } from 'lucide-react';

const TutorCard = ({ tutor, onRegister }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-3">
        {tutor.avatar}
      </div>
      
      <h3 className="font-bold text-lg text-gray-900">{tutor.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{tutor.role}</p>
      
      <div className="flex items-center gap-1 text-sm font-bold text-gray-800 mb-4">
        <Star size={16} className="fill-black text-black" /> {tutor.rating} <span className="text-gray-400 font-normal">({tutor.reviews})</span>
      </div>

      <div className="flex gap-2 flex-wrap justify-center mb-6">
        {tutor.subjects.map((sub, idx) => (
          <span key={idx} className="text-xs font-medium text-gray-600">
            {sub}
          </span>
        ))}
      </div>

      <div className="flex justify-between w-full px-4 text-xs text-gray-500 mb-6">
        <div className="flex items-center gap-1">
          <BookOpen size={14} /> {tutor.sessions} sessions
        </div>
        <div className="flex items-center gap-1">
          <UserCheck size={14} /> Available
        </div>
      </div>

      <button 
        onClick={onRegister}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors"
      >
        Register Tutor
      </button>
    </div>
  );
};
export default TutorCard;