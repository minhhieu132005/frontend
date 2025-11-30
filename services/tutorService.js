import api from './api';

//resgiter sched
export const createTutorSlot = async (slotData) => {
  // slotData = { subject, date, start_time, end_time, location }
  const response = await api.post('/tutors/create', slotData);
  return response.data;
};


// Lấy danh sách bookings của tutor
export const getTutorBookings = async () => {
  const tutorId = localStorage.getItem("userId");

  const response = await api.get(`/tutors/bookings/${tutorId}`);
  return response.data;
};




// Hủy buổi học (for tutor OR student)
export const cancelBooking = async (bookingId) => {
  const response = await api.put(`/bookings/cancel/${bookingId}`);
  return response.data;
};

// Lấy danh sách slot rảnh để đổi giờ
export const getFreeSlotsForBooking = async (bookingId) => {
  const response = await api.get(`/bookings/free-slots/${bookingId}`);
  return response.data;
};

// Thực hiện đổi giờ
export const rescheduleBooking = async (bookingId, newSlotId) => {
  const response = await api.put('/bookings/reschedule', {
    booking_id: bookingId,
    new_slot_id: newSlotId,
  });
  return response.data;
};
