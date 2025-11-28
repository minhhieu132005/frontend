import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { Users, MapPin, CalendarDays, Clock } from "lucide-react";

export default function ClassMembersPage() {
  const { classId } = useParams();

  // Danh sách lớp giống bên TutorSchedulePage
  const classes = [
    {
      id: 1,
      studentCount: 25,
      location: "Room H6-306",
      subject: "Data Structures & Algorithms",
      time: "Oct 18, 2025 | 2:00 PM - 3:30 PM",
    },
    {
      id: 2,
      studentCount: 18,
      subject: "Probability & Statistics",
      location: "Room H3-201",
      time: "Oct 20, 2025 | 9:00 AM - 11:00 AM",
    },
    {
      id: 3,
      studentCount: 15,
      subject: "Computer Architecture",
      location: "Room B4-105",
      time: "Oct 22, 2025 | 1:00 PM - 2:30 PM",
    },
  ];

  // TÌM LỚP TƯƠNG ỨNG THEO ID
  const classInfo = classes.find(c => c.id == classId);

  if (!classInfo)
    return (
      <div className="p-6 text-center text-red-600">
        Class not found (ID: {classId})
      </div>
    );

  const [dateStr, timeStr] = classInfo.time.includes("|")
    ? classInfo.time.split("|")
    : [classInfo.time, ""];

  // Danh sách sinh viên mẫu
  const students = [
    { id: 1, name: "Nguyễn Văn A", email: "a@student.edu.vn" },
    { id: 2, name: "Trần Thị B", email: "b@student.edu.vn" },
    { id: 3, name: "Lê Văn C", email: "c@student.edu.vn" },
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] font-sans">
      {/* <Navbar role="tutor" /> */}

      <div className="w-full max-w-[1400px] mx-auto p-6">

        <h2 className="text-xl font-bold text-gray-900">
          Class Students 
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          View and manage all students enrolled in this class
        </p>

        {/* Card */}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-sm p-6">

          {/* CLASS INFO */}
          <div className="mb-6 pb-6 border-b border-gray-300">
            <h3 className="font-bold text-gray-900 text-lg mb-4">
              {classInfo.subject}
            </h3>

            <div className="grid grid-cols-2 gap-y-4 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-gray-600" />
                <span>{classInfo.studentCount} students</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-gray-600" />
                <span>{classInfo.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="text-gray-600" />
                <span>{dateStr.trim()}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} className="text-gray-600" />
                <span>{timeStr.trim()}</span>
              </div>
            </div>
          </div>

          {/* STUDENTS TABLE */}
          <div>
            <div className="grid grid-cols-3 font-semibold text-gray-700 text-sm pb-3 border-b">
              <span>Name</span>
              <span>Email</span>
              <span className="text-center">Attendance</span>
            </div>

            <div className="divide-y">
              {students.map((st) => (
                <div key={st.id} className="grid grid-cols-3 items-center py-4 hover:bg-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0056b3] text-white rounded-full flex items-center justify-center font-bold">
                      {st.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="text-gray-900 font-medium">{st.name}</span>
                  </div>

                  <span className="text-gray-600">{st.email}</span>

                  <div className="text-center">
                    <button className="bg-[#0056b3] text-white py-1.5 px-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                      Attendance
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
