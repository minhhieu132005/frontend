// src/services/studentService.js

// Mock data cho Lịch trình (12.3.1)
export const getUpcomingSessions = async () => {
  return [
    {
      id: 1,
      tutorName: "Nguyen Van A",
      subject: "Data Structures & Algorithms",
      date: "2023-10-15",
      time: "2:00 PM - 4:00 PM",
      avatar: "https://via.placeholder.com/50"
    },
    // ... thêm data
  ];
};

// Mock data cho Tìm kiếm Tutor (12.3.2)
export const getTutors = async (keyword) => {
  // Logic lọc theo keyword nếu có
  return [
    {
      id: 101,
      name: "Nguyen Van A",
      role: "Senior Teacher",
      rating: 4.9,
      sessionsCount: 120,
      status: "Available",
      subjects: ["Data Structures", "Algorithms", "Programming"]
    },
    // ... thêm data
  ];
};

export const registerTutorSession = async (tutorId, date, time) => {
  console.log(`Đăng ký Tutor ${tutorId} vào lúc ${time} ngày ${date}`);
  return { success: true };
};