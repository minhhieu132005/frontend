import api from './api';

// --- TUTOR ---
export const getAllTutors = async () => {
  const response = await api.get('/tutors');
  return response.data;
};

export const searchTutorsBySubject = async (subject) => {
  // Backend route: /tutors/expertise/:subject
  const response = await api.get(`/tutors/expertise/${subject}`);
  return response.data;
};

export const getTutorSlots = async (tutorId) => {
  const response = await api.get(`/tutors/${tutorId}/slots`);
  return response.data;
};

// --- BOOKING ---
export const createBooking = async (tutorId, slotId) => {
  const response = await api.post('/bookings/create', {
    tutor_id: tutorId,
    slot_id: slotId
  });
  return response.data;
};

// 2. Lấy danh sách (Backend dùng GET /bookings/student/:id -> Khớp rồi, giữ nguyên)
export const getMyBookings = async () => {
  const userId = localStorage.getItem('userId');
  if (!userId) return [];
  
  const response = await api.get(`/bookings/student/${userId}`);
  return response.data;
};

// 3. Hủy Booking (SỬA LẠI)
// Backend yêu cầu: PUT /bookings/cancel/:booking_id
export const cancelBooking = async (bookingId) => {
  // Thay api.delete thành api.put
  // Thêm chữ '/cancel' vào đường dẫn
  const response = await api.put(`/bookings/cancel/${bookingId}`);
  return response.data;
};

// 4. Đổi lịch (SỬA LẠI - Nếu bạn có dùng tính năng này)
// Backend yêu cầu: PUT /bookings/reschedule
export const rescheduleBooking = async (bookingId, newSlotId) => {
  // Thay api.post thành api.put
  const response = await api.put('/bookings/reschedule', {
    booking_id: bookingId,
    new_slot_id: newSlotId
  });
  return response.data;
};