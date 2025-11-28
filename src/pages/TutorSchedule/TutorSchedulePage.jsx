import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import SessionItemTutor from "../../components/schedule/SessionItemTutor";
import RescheduleModalTutor from "../../components/modals/RescheduleModalTutor";
import RegisterModal from "../../components/common/RegisterModal";
import ClassMembersPage from "./ClassMemPage";
import { CalendarPlus, BookOpen, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function TutorSchedulePage() {
  const [openReschedule, setOpenReschedule] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const navigate = useNavigate();
  const sessions = [
    {
      id: 1,
      studentCount: 25,
      location:"Room H6-306",
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

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* <Navbar role="tutor" /> */}

      <div className="max-w-7xl mx-auto px-6 py-6 flex gap-6">

        {/* LEFT SIDE */}
        <div className="flex-1 bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
          
          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">My Schedule</h2>
              <p className="text-gray-500 text-sm">Your tutoring schedule</p>
            </div>

            <button
              onClick={() => setOpenRegister(true)}
              className="bg-[#0056b3] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Create Schedule
            </button>
          </div>

          {/* SESSIONS */}
          <div className="space-y-4">
            {sessions.map((s) => (
              <SessionItemTutor
                key={s.id}
                studentCount={s.studentCount}
                subject={s.subject}
                location={s.location}
                time={s.time}
                onReschedule={() => setOpenReschedule(true)}
                onCancel={() => alert("Cancel clicked")}
                onViewClass={() => navigate(`/class/${s.id}`)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[350px] flex flex-col gap-6">

          {/* QUICK ACTIONS */}
          <div className="bg-white p-6 border border-gray-300 rounded-2xl shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>

            <div className="space-y-3">
              <button
                onClick={() => setOpenRegister(true)}
                className="flex items-center gap-3 bg-[#EEEEEE] hover:bg-gray-300 
                text-gray-900 border border-gray-300 p-3 w-full rounded-lg font-medium transition"
              >
                <CalendarPlus size={18} /> Register Schedule
              </button>

              <button
                className="flex items-center gap-3 bg-[#EEEEEE] hover:bg-gray-300 
                text-gray-900 border border-gray-300 p-3 w-full rounded-lg font-medium transition"
              >
                <BookOpen size={18} /> Session Reports
              </button>

              <button
                className="flex items-center gap-3 bg-[#EEEEEE] hover:bg-gray-300 
                text-gray-900 border border-gray-300 p-3 w-full rounded-lg font-medium transition"
              >
                <Star size={18} /> Read Feedback
              </button>
            </div>
          </div>

          {/* RECENT FEEDBACK */}
          <div className="bg-white p-6 border border-gray-300 rounded-2xl shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Recent Feedback</h3>

            <div className="space-y-6">

              <div className="border-b border-gray-300 pb-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sm text-gray-800">
                    Nguyễn Văn B
                  </span>
                  <div className="text-[#0056b3] text-xs">★★★★★</div>
                </div>
                <p className="text-xs text-gray-500">Excellent explanation of complex algorithms</p>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sm text-gray-800">
                    Nguyễn Văn C
                  </span>
                  <div className="text-[#0056b3] text-xs">★★★★★</div>
                </div>
                <p className="text-xs text-gray-500">Very clear and detailed guidance</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* MODALS */}
      <RescheduleModalTutor
        isOpen={openReschedule}
        onClose={() => setOpenReschedule(false)}
      />

      <RegisterModal
        isOpen={openRegister}
        onClose={() => setOpenRegister(false)}
        onConfirm={() => alert("Registered")}
      />
    </div>
  );
}
