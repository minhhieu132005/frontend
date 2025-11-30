import React, { useState, useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import SessionItemTutor from "../../components/schedule/SessionItemTutor";
import RescheduleModalTutor from "../../components/modals/RescheduleModalTutor";
import RegisterModalTutor from "../../components/modals/RegisterModalTutor";
import ClassMembersPage from "./ClassMemPage";
import { CalendarPlus, BookOpen, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {createTutorSlot,
  getTutorBookings ,
  cancelBooking,
  getFreeSlotsForBooking,
  rescheduleBooking } from '../../services/tutorService'

export default function TutorSchedulePage() {
  const [openReschedule, setOpenReschedule] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();
  // const sessions = [
  //   {
  //     id: 1,
  //     studentCount: 25,
  //     location:"Room H6-306",
  //     subject: "Data Structures & Algorithms",
  //     time: "Oct 18, 2025 | 2:00 PM - 3:30 PM",
  //   },
  //    {
  //     id: 2,
  //     studentCount: 18,
  //     subject: "Probability & Statistics",
  //     location: "Room H3-201",
  //     time: "Oct 20, 2025 | 9:00 AM - 11:00 AM",
  //   },
  //   {
  //     id: 3,
  //     studentCount: 15,
  //     subject: "Computer Architecture",
  //     location: "Room B4-105",
  //     time: "Oct 22, 2025 | 1:00 PM - 2:30 PM",
  //   },

  // ];
   // ==========================
  // 1. Load lịch dạy tutor
  // ==========================
  useEffect(() => {
    loadTutorSchedule();
  }, []);
  const loadTutorSchedule = async () => {
    try {
      const data = await getTutorBookings();
      setSessions(data);
    } catch (err) {
      console.error("Error loading tutor slots:", err);
    }
  };
   // ==========================
  // 2. Create Schedule
  // ==========================
  const handleCreateSchedule = async (formData) => {
    try {
      await createTutorSlot(formData);
      alert("Created schedule successfully!");
      setOpenRegister(false);
      loadTutorSchedule();
    } catch (err) {
      console.error(err);
      alert("Failed to create schedule.");
    }
  };

  // ==========================
  // 3. Cancel schedule
  // ==========================
  const handleCancel = async (slotId) => {
    try {
      await cancelBooking(slotId);
      alert("Schedule cancelled!");
      loadTutorSchedule();
    } catch (err) {
      alert("Cancel failed.");
    }
  };

  // ==========================
  // 4. Reschedule
  // ==========================
  const handleReschedule = async (newSlotId) => {
    try {
      await rescheduleBooking(selectedSlotId, newSlotId);
      alert("Rescheduled successfully!");
      setOpenReschedule(false);
      loadTutorSchedule();
    } catch (err) {
      alert("Reschedule failed.");
    }
  };
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
            {sessions.map((s) => {
              if (!s.slot) return null;

              const startDate = new Date(s.slot.start_time);
              const endDate = new Date(s.slot.end_time);

              const dateOnly = startDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });

              const startTime = startDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              });

              const endTime = endDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              });

              return (
                <SessionItemTutor
                  key={s.slot.slot_id}
                  subject={s.slot.subject}
                  studentCount={s.slot.current_students || 0}
                  location={s.slot.room}
                  date={dateOnly}
                  startTime={startTime}
                  endTime={endTime}

                  onReschedule={() => {
                    setSelectedSlotId(s.booking_id);
                    setOpenReschedule(true);
                  }}

                  onCancel={() => handleCancel(s.booking_id)}
                  onViewClass={() => navigate(`/class/${s.slot.slot_id}`)}
                />
              );
            })}
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
        onConfirm={handleReschedule}      
        bookingId={selectedSlotId}
      />

      <RegisterModalTutor
        isOpen={openRegister}
        onClose={() => setOpenRegister(false)}
        onConfirm={handleCreateSchedule}
      />
    </div>
  );
}
