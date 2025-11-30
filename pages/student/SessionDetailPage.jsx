import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  CalendarDays, Clock, Users, MapPin, BookOpen, Star 
} from 'lucide-react';
import { getMyBookings } from '../../services/studentService';

const SessionDetailPage = () => {
  const { id } = useParams(); // Lấy ID từ URL (ví dụ: /session/1)
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessionDetail = async () => {
      setLoading(true);
      try {
        // 1. Gọi API lấy danh sách booking của user
        const allBookings = await getMyBookings();
        
        // 2. Tìm booking có id trùng với url
        // Lưu ý: id từ URL là string, id từ API có thể là number nên dùng ==
        const foundBooking = allBookings.find(b => b.booking_id == id);

        if (foundBooking) {
          // 3. Xử lý dữ liệu hiển thị
          const start = new Date(foundBooking.slot.start_time);
          const end = new Date(foundBooking.slot.end_time);

          // Backend hiện tại chưa có các trường như Room, Subject, Mentors...
          // Nên ta sẽ kết hợp dữ liệu Thật + Dữ liệu Giả lập để giống thiết kế
          const mappedData = {
            title: "Data Structures & Algorithms", // Backend chưa có môn, tạm để cứng
            mentors: 25, // Mock
            room: "H6-306", // Mock
            date: start.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), // Oct 18, 2025
            time: `${start.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})} - ${end.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`,
            tutor: foundBooking.tutor?.name || "Unknown Tutor",
            students: 20, // Mock
            note: "Cần xem kĩ lại bài trước khi đến lớp",
            content: "Nội dung buổi học bao gồm ôn tập về mảng và danh sách liên kết, cài đặt Stack và Queue trong C++, giới thiệu đệ quy và cây đệ quy...",
            result: "18/20 học sinh có thể cài đặt đúng Stack và Queue...",
            document: {
              name: "Introduction to Algorithms",
              desc: `Lecture Notes • Uploaded by ${foundBooking.tutor?.name}`,
              tags: ["Data Structures", "Algorithms", "PDF"]
            },
            feedback: {
              tutorName: `Dr ${foundBooking.tutor?.name}`,
              comment: "Excellent explanation of complex algorithms",
              rating: 5
            }
          };
          setSession(mappedData);
        }
      } catch (error) {
        console.error("Lỗi tải chi tiết:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionDetail();
  }, [id]);

  // Component phụ
  const SectionLabel = ({ children }) => (
    <h3 className="font-bold text-gray-900 text-lg mb-2">{children}</h3>
  );

  const InfoBox = ({ children, className = "" }) => (
    <div className={`bg-[#E0E0E0] rounded-xl p-4 text-gray-700 text-sm font-medium leading-relaxed ${className}`}>
      {children}
    </div>
  );

  if (loading) return <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center">Loading...</div>;
  if (!session) return <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center">Session not found</div>;

  return (
    <div className="min-h-screen bg-[#EEEEEE] p-6 font-sans flex justify-center">
      
      <div className="bg-[#F5F5F5] border border-gray-300 rounded-[2rem] p-8 w-full max-w-7xl relative shadow-sm h-fit">
        
        {/* --- 1. HEADER (Dữ liệu thật + Mock) --- */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{session.title}</h1>
          
          <div className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Users size={18} /> {session.mentors} Mentors
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} /> Room: {session.room}
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} /> {session.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} /> {session.time}
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. GRID CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          
          {/* Cột Trái */}
          <div className="space-y-8">
            <div className="flex gap-8">
              <div className="flex-1">
                <SectionLabel>Tutor</SectionLabel>
                {/* Tên Tutor thật từ API */}
                <InfoBox>{session.tutor}</InfoBox>
              </div>
              <div className="w-48">
                <SectionLabel>Number of Student</SectionLabel>
                <InfoBox>{session.students}</InfoBox>
              </div>
            </div>

            <div>
              <SectionLabel>Note</SectionLabel>
              <InfoBox className="h-32">{session.note}</InfoBox>
            </div>

            <div>
              <SectionLabel>Document</SectionLabel>
              <div className="bg-[#E0E0E0] rounded-xl p-5 flex gap-4 items-start">
                <div className="w-14 h-14 bg-[#6B7280] rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm">
                  <BookOpen size={28} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-base">{session.document.name}</h4>
                  <p className="text-xs text-gray-500 mb-3">{session.document.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {session.document.tags.map((tag, idx) => (
                      <span key={idx} className="bg-[#D1D1D1] text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full border border-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cột Phải */}
          <div className="space-y-8">
            <div>
              <SectionLabel>Session Content</SectionLabel>
              <InfoBox className="min-h-[120px] text-justify">{session.content}</InfoBox>
            </div>
            <div>
              <SectionLabel>Session Result</SectionLabel>
              <InfoBox className="min-h-[120px] text-justify">{session.result}</InfoBox>
            </div>
            <div>
              <SectionLabel>Your Feedback</SectionLabel>
              <div className="bg-[#E0E0E0] rounded-xl p-5 relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-gray-900">{session.feedback.tutorName}</h4>
                  <div className="flex gap-1">
                    {[...Array(session.feedback.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#0056b3] text-[#0056b3]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-4">{session.feedback.comment}</p>
                <div className="flex justify-end">
                  <button className="font-bold text-gray-900 text-sm hover:underline">Recall</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nút Return */}
        <div className="flex justify-end mt-12">
          <Link to="/my-sessions">
            <button className="bg-[#0056b3] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg transition-colors">
              Return
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SessionDetailPage;