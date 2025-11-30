import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { Users, MapPin, CalendarDays, Clock } from "lucide-react";

export default function ClassMembersPage() {
  const { classId } = useParams();

  // Danh sách lớp giống bên TutorSchedulePage
  const classes = [
   
    {
      id: 2,
      studentCount: 1,
      subject: "Introduction to Computing",
      location: "Room H6-201",
      time: "Nov 30, 2025 | 5:00 AM - 6:00 AM",
    }   
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
  { id: 1, name: "Tran Van J", major: "Computer Science", year: "2nd Year" },
 
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

 

            {/* LIST */}
            <div className="space-y-4">
                {students.map((st) => (
                    <div 
                    key={st.id} 
                    className="flex justify-between items-start bg-[#FFFFFF] border border-gray-300 rounded-xl p-4"
                    >
      
                {/* LEFT SIDE - Student info */}
                <div className="flex items-start gap-4">
                    
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-[#0056b3] flex items-center justify-center 
                                    text-white font-bold text-lg shrink-0">
                    {st.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
                    </div>

                    {/* Info */}
                    <div className="flex flex-col">
                    <p className="font-bold text-gray-900 text-md">{st.name}</p>
                    <p className="text-gray-600 text-sm">{st.major}</p>
                    <p className="text-gray-500 text-sm mb-2">{st.year}</p>

                    {/* Add Note */}
                    <button
                        onClick={() => window.location.href = "#"}
                        className="bg-[#0056b3] hover:bg-[#004a9a] text-white 
                                text-sm font-semibold py-1 px-4 rounded-lg w-fit"
                    >
                        Add Note
                    </button>
                    </div>
                </div>

                {/* RIGHT SIDE — Attendance button */}
                <button
                    onClick={() => alert(`Attendance for ${st.name}`)}
                    className="bg-[#DCDCDC] hover:bg-gray-300 border border-gray-300 
                            text-gray-900 font-bold text-sm py-2 px-5 rounded-lg"
                >
                    Attendance
                </button>

    </div>
  ))}
</div>



        </div>

      </div>
    </div>
  );
}
