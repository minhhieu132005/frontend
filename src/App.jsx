import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import { useEffect } from "react";

import TutorSchedulePage from './pages/TutorSchedule/TutorSchedulePage';
import ClassMembersPage from './pages/TutorSchedule/ClassMemPage'

function App() {
   useEffect(() => {
    //hardcode do không làm trang đăng nhập=)))
    const LoginToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJib2IiLCJyb2xlIjoidHV0b3IiLCJpYXQiOjE3NjQ0Njg1OTksImV4cCI6MTc2NDQ3MjE5OX0.7GsFOZSSyU4tLUgkbJz_Bxmjg85Uj2BdRQzpof9crnY";

    localStorage.setItem("token", LoginToken);
    localStorage.setItem("role", "tutor");  
    localStorage.setItem("userId", "6");   
  }, []);
  return (
    <Router>
      <div className="min-h-screen bg-[#EEEEEE] font-sans">
        <Navbar role="tutor" />

        
          <Routes>
            <Route path="/" element={<Navigate to="/tutors/schedule" />} />
            <Route path="/tutors/schedule" element={<TutorSchedulePage />} />
            <Route path="/class/:classId" element={<ClassMembersPage />} />
          </Routes>
       
      </div>
    </Router>
  );
}

export default App;