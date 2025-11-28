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

export const getMyBookings = async () => {
  const userId = localStorage.getItem('userId');
  const response = await api.get(`/bookings/student/${userId}`);
  return response.data;
};

export const cancelBooking = async (bookingId) => {
  const response = await api.delete(`/bookings/${bookingId}`); // Giả sử route delete là /bookings/:id
  return response.data;
};