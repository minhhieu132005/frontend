import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';

// --- IMPORT CÁC TRANG ---
import MySchedulePage from './pages/student/MySchedulePage';
import MySessionPage from './pages/student/MySessionPage';
import FindTutorPage from './pages/student/FindTutorPage';
import SessionDetailPage from './pages/student/SessionDetailPage'; // <--- Đảm bảo đã import dòng này

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#EEEEEE] font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/my-sessions" />} />
          
          <Route path="/my-schedule" element={<MySchedulePage />} />
          <Route path="/my-sessions" element={<MySessionPage />} />
          <Route path="/find-tutor" element={<FindTutorPage />} />
          
          {/* --- BẮT BUỘC PHẢI CÓ DÒNG DƯỚI ĐÂY --- */}
          <Route path="/session/:id" element={<SessionDetailPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;