import React from 'react';
import Modal from '../ui/Modal';

const CancelModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cancel Schedule" maxWidth="max-w-sm">
      <p className="text-gray-600 mb-8">This action will discard your schedule.</p>
      <div className="flex justify-between items-center">
        <button 
          onClick={onClose} 
          className="text-gray-600 font-semibold hover:underline"
        >
          No, go back
        </button>
        <button 
          onClick={onConfirm} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </Modal>
  );
};
export default CancelModal;