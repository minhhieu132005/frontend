// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/common/Navbar';
// import { useEffect } from "react";

// import TutorSchedulePage from './pages/TutorSchedule/TutorSchedulePage';
// import ClassMembersPage from './pages/TutorSchedule/ClassMemPage'

// function App() {
//    useEffect(() => {
//     //hardcode do không làm trang đăng nhập=)))
//     const LoginToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhbGljZSIsInJvbGUiOiJ0dXRvciIsImlhdCI6MTc2NDQ4MDk1NywiZXhwIjoxNzY0NDg0NTU3fQ.F2fhUn5YGl4MFtWVG2zOcsIT_eumgtYA4M_N5NYWhhE";

//     localStorage.setItem("token", LoginToken);
//     localStorage.setItem("role", "tutor");  
//     localStorage.setItem("userId", "2");   
//   }, []);
//   return (
//     <Router>
//       <div className="min-h-screen bg-[#EEEEEE] font-sans">
//         <Navbar role="tutor" />

        
//           <Routes>
//             <Route path="/" element={<Navigate to="/tutors/schedule" />} />
//             <Route path="/tutors/schedule" element={<TutorSchedulePage />} />
//             <Route path="/class/:classId" element={<ClassMembersPage />} />
//           </Routes>
       
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';

// Import các trang chính
import MySchedulePage from './pages/student/MySchedulePage';
import FindTutorPage from './pages/student/FindTutorPage';
import MySessionPage from './pages/student/MySessionPage';

// 1. THÊM DÒNG NÀY: Import trang chi tiết
import SessionDetailPage from './pages/student/SessionDetailPage';

import { loginUser } from './services/authService';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      // Logic Auto Login giữ nguyên để lấy Token
      if (!localStorage.getItem('token')) {
        try {
          console.log("Auto logging in...");
          await loginUser("john", "john123"); // USER TEST
        } catch (e) { console.error("Login failed", e); }
      }
      setReady(true);
    };
    init();
  }, []);

  if (!ready) return <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center">Loading...</div>;

  return (
    <Router>
      <div className="min-h-screen bg-[#EEEEEE] font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/find-tutor" />} />
          
          <Route path="/my-schedule" element={<MySchedulePage />} />
          <Route path="/my-sessions" element={<MySessionPage />} />
          <Route path="/find-tutor" element={<FindTutorPage />} />
          
          {/* 2. THÊM DÒNG NÀY: Định nghĩa đường dẫn chi tiết */}
          {/* Khi bấm vào thẻ, navigate('/session/1') sẽ khớp với dòng này */}
          <Route path="/session/:id" element={<SessionDetailPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;