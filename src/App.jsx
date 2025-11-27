import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import MySchedulePage from './pages/student/MySchedulePage';
import FindTutorPage from './pages/student/FindTutorPage';
import MySessionPage from './pages/student/MySessionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/my-schedule" />} />
          <Route path="/my-schedule" element={<MySchedulePage />} /> {/* 12.3.1 */}
          <Route path="/find-tutor" element={<FindTutorPage />} />   {/* 12.3.2 */}
          <Route path="/my-sessions" element={<MySessionPage />} />  {/* 12.3.3 */}
          {/* Các route khác */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;