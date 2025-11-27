// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import MySchedulePage from './pages/student/MySchedulePage';
import FindTutorPage from './pages/student/FindTutorPage';
import MySessionPage from './pages/student/MySessionPage';
import SessionDetailPage from './pages/student/SessionDetailPage'; // Import trang chi tiết

// ...

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#EEEEEE] font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/my-schedule" />} />
          <Route path="/my-schedule" element={<MySchedulePage />} />
          <Route path="/my-sessions" element={<MySessionPage />} />
          <Route path="/find-tutor" element={<FindTutorPage />} />
          
          {/* THÊM ROUTE NÀY: Dẫn đến trang chi tiết (Figure 77) */}
          <Route path="/session/:id" element={<SessionDetailPage />} />
          
          {/* ... các route khác */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;