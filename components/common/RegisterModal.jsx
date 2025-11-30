import React, { useState, useMemo } from 'react';
import Modal from '../ui/Modal'; // Đảm bảo đường dẫn import đúng Modal base của bạn
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const RegisterModal = ({ isOpen, onClose, onConfirm, tutor, isLoading }) => {
  const [selectedSlotId, setSelectedSlotId] = useState(null);

  // 1. Lọc lấy slot chưa book
  const availableSlots = tutor?.freeSlots || [];

  // 2. Hàm gom nhóm slot theo Ngày (Group by Date)
  // Input: [ {start_time: '2025-11-28T10:00'}, {start_time: '2025-11-28T14:00'} ]
  // Output: { '28/11/2025': [slot1, slot2], ... }
  const slotsByDate = useMemo(() => {
    const groups = {};
    availableSlots.forEach(slot => {
      const dateObj = new Date(slot.start_time);
      // Format ngày hiển thị: "Thứ Sáu, 28/11" (hoặc tiếng Anh tùy locale)
      const dateKey = dateObj.toLocaleDateString('en-GB', { 
        weekday: 'short', day: 'numeric', month: 'numeric', year: 'numeric' 
      });
      
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(slot);
    });
    return groups;
  }, [availableSlots]);

  const handleConfirm = () => {
    if (selectedSlotId) {
      onConfirm(selectedSlotId);
    }
  };

  // Helper format giờ: "14:00"
  const formatTime = (isoString) => {
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Book Session: ${tutor?.name}`} maxWidth="max-w-lg">
      <div className="mb-6">
        <p className="text-gray-500 text-sm mb-4">Select an available time slot below:</p>
        
        {/* Vùng cuộn nếu danh sách dài */}
        <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          
          {Object.keys(slotsByDate).length > 0 ? (
            Object.keys(slotsByDate).map((dateStr) => (
              <div key={dateStr} className="mb-5 last:mb-0">
                
                {/* Tiêu đề Ngày */}
                <h4 className="flex items-center gap-2 font-bold text-gray-700 mb-3 bg-gray-100 p-2 rounded-lg sticky top-0 z-10">
                  <Calendar size={18} className="text-[#0056b3]" /> 
                  {dateStr}
                </h4>

                {/* Grid các ô giờ */}
                <div className="grid grid-cols-3 gap-3">
                  {slotsByDate[dateStr].map((slot) => {
                    const isSelected = selectedSlotId === slot.slot_id;
                    return (
                      <button
                        key={slot.slot_id}
                        onClick={() => setSelectedSlotId(slot.slot_id)}
                        className={`
                          relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200
                          ${isSelected 
                            ? 'bg-[#0056b3] border-[#0056b3] text-white shadow-md transform scale-105' 
                            : 'bg-white border-gray-200 text-gray-700 hover:border-[#0056b3] hover:bg-blue-50'
                          }
                        `}
                      >
                        {/* Icon check khi chọn */}
                        {isSelected && (
                          <div className="absolute -top-2 -right-2 bg-white rounded-full p-0.5">
                            <CheckCircle size={16} className="text-[#0056b3] fill-white" />
                          </div>
                        )}
                        
                        <Clock size={16} className={`mb-1 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
                        <span className="font-bold text-sm">
                          {formatTime(slot.start_time)}
                        </span>
                        <span className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>
                          - {formatTime(slot.end_time)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 flex flex-col items-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <Calendar size={40} className="text-gray-300 mb-2" />
              <p className="text-gray-500 font-medium">No available slots</p>
              <p className="text-gray-400 text-xs">Please try another tutor</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
        <button 
          onClick={onClose} 
          className="px-5 py-2.5 text-gray-600 font-semibold hover:bg-gray-100 rounded-xl transition-colors"
        >
          Cancel
        </button>
        <button 
          onClick={handleConfirm}
          disabled={!selectedSlotId || isLoading}
          className={`px-6 py-2.5 text-white font-bold rounded-xl shadow-sm transition-all ${
            !selectedSlotId || isLoading 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-[#0056b3] hover:bg-blue-700 hover:shadow-md'
          }`}
        >
          {isLoading ? 'Booking...' : 'Confirm Booking'}
        </button>
      </div>
    </Modal>
  );
};

export default RegisterModal;