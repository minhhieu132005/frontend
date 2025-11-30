import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { Star } from 'lucide-react';

const FeedbackModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Give Feedback">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
          <input type="text" value="Nguyễn Văn A" disabled className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-500" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Feedback</label>
          <textarea rows="4" className="w-full p-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-blue-500 resize-none" placeholder="Write your feedback..."></textarea>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)}>
                <Star size={28} className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button onClick={onClose} className="px-4 py-2 text-gray-600 font-semibold">Cancel</button>
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Confirm Feedback
        </button>
      </div>
    </Modal>
  );
};
export default FeedbackModal;