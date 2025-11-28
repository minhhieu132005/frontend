import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  CalendarDays, Clock, Users, MapPin, BookOpen, Star 
} from 'lucide-react';

const SessionDetailPage = () => {
  // Lấy ID từ URL (để code không lỗi, nhưng ta sẽ không dùng ID này để gọi API)
  const { id } = useParams(); 

  // --- DỮ LIỆU MẪU (HARDCODE) ---
  // Dữ liệu này sẽ luôn hiển thị giống nhau cho mọi session
  const sessionData = {
    title: "Data Structures & Algorithms",
    mentors: 25,
    room: "H6-306",
    date: "Oct 18, 2025",
    time: "2:00 PM - 3:30 PM",
    tutor: "Nguyễn Văn A",
    students: 20,
    note: "Cần xem kĩ lại bài trước khi đến lớp",
    content: "Nội dung buổi học bao gồm ôn tập về mảng và danh sách liên kết, cài đặt Stack và Queue trong C++, giới thiệu đệ quy và cây đệ quy, cũng như thực hành giải bài toán kiểm tra dấu ngoặc cân bằng.",
    result: "18/20 học sinh có thể cài đặt đúng Stack và Queue, 15/20 học sinh nắm được cơ bản về đệ quy, và tất cả học sinh đều tham gia tích cực hoạt động giải bài tập. Bài tập về nhà được giao là giải 3 bài tập về đệ quy và cài đặt Queue sử dụng hai Stack.",
    document: {
      name: "Introduction to Algorithms",
      desc: "Lecture Notes • Uploaded by Nguyễn Văn A",
      tags: ["Data Structures", "Algorithms", "PDF"]
    },
    feedback: {
      tutorName: "Dr Nguyễn Văn A",
      comment: "Excellent explanation of complex algorithms",
      rating: 5
    }
  };

  // Component phụ: Nhãn tiêu đề (Label)
  const SectionLabel = ({ children }) => (
    <h3 className="font-bold text-gray-900 text-lg mb-2">{children}</h3>
  );

  // Component phụ: Hộp thông tin xám (Gray Box)
  const InfoBox = ({ children, className = "" }) => (
    <div className={`bg-[#E0E0E0] rounded-xl p-4 text-gray-700 text-sm font-medium leading-relaxed ${className}`}>
      {children}
    </div>
  );

  return (
    // Nền xám #EEEEEE trùng khớp với Navbar và các trang khác
    <div className="min-h-screen bg-[#EEEEEE] p-6 font-sans flex justify-center">
      
      {/* Thẻ chính: Nền #F5F5F5, Bo góc lớn */}
      <div className="bg-[#F5F5F5] border border-gray-300 rounded-[2rem] p-8 w-full max-w-7xl relative shadow-sm h-fit">
        
        {/* --- 1. HEADER (Tiêu đề & Metadata) --- */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{sessionData.title}</h1>
          
          <div className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
            {/* Dòng 1: Mentors & Room */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Users size={18} /> {sessionData.mentors} Mentors
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} /> Room: {sessionData.room}
              </div>
            </div>

            {/* Dòng 2: Ngày & Giờ */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} /> {sessionData.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} /> {sessionData.time}
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. NỘI DUNG CHÍNH (Chia 2 cột) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          
          {/* CỘT TRÁI: Thông tin cơ bản & Tài liệu */}
          <div className="space-y-8">
            
            {/* Tutor & Student Count */}
            <div className="flex gap-8">
              <div className="flex-1">
                <SectionLabel>Tutor</SectionLabel>
                <InfoBox>{sessionData.tutor}</InfoBox>
              </div>
              <div className="w-48">
                <SectionLabel>Number of Student</SectionLabel>
                <InfoBox>{sessionData.students}</InfoBox>
              </div>
            </div>

            {/* Note */}
            <div>
              <SectionLabel>Note</SectionLabel>
              <InfoBox className="h-32">{sessionData.note}</InfoBox>
            </div>

            {/* Document */}
            <div>
              <SectionLabel>Document</SectionLabel>
              <div className="bg-[#E0E0E0] rounded-xl p-5 flex gap-4 items-start">
                {/* Icon Sách nền xám đậm */}
                <div className="w-14 h-14 bg-[#6B7280] rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm">
                  <BookOpen size={28} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-base">{sessionData.document.name}</h4>
                  <p className="text-xs text-gray-500 mb-3">{sessionData.document.desc}</p>
                  
                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {sessionData.document.tags.map((tag, idx) => (
                      <span key={idx} className="bg-[#D1D1D1] text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full border border-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: Nội dung, Kết quả & Feedback */}
          <div className="space-y-8">
            
            {/* Session Content */}
            <div>
              <SectionLabel>Session Content</SectionLabel>
              <InfoBox className="min-h-[120px] text-justify">
                {sessionData.content}
              </InfoBox>
            </div>

            {/* Session Result */}
            <div>
              <SectionLabel>Session Result</SectionLabel>
              <InfoBox className="min-h-[120px] text-justify">
                {sessionData.result}
              </InfoBox>
            </div>

            {/* Feedback */}
            <div>
              <SectionLabel>Your Feedback</SectionLabel>
              <div className="bg-[#E0E0E0] rounded-xl p-5 relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-gray-900">{sessionData.feedback.tutorName}</h4>
                  <div className="flex gap-1">
                    {[...Array(sessionData.feedback.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#0056b3] text-[#0056b3]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-4">{sessionData.feedback.comment}</p>
                <div className="flex justify-end">
                  <button className="font-bold text-gray-900 text-sm hover:underline">Recall</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. NÚT RETURN --- */}
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