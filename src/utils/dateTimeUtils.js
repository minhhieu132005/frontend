// src/utils/dateTimeUtils.js
export const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatTime = (timeString) => {
  // Xử lý format giờ (ví dụ: 09:00 AM - 11:00 AM)
  return timeString; 
};