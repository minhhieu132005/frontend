import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-sm">
      <div className="font-bold text-xl text-blue-600">HCMUT Tutor System</div>
      <div className="space-x-6 font-medium">
        <Link to="/my-schedule" className="hover:text-blue-500">My Schedule</Link>
        <Link to="/my-sessions" className="hover:text-blue-500">My Session</Link>
        <Link to="/find-tutor" className="hover:text-blue-500">Find Tutor</Link>
        <Link to="/my-documents" className="hover:text-blue-500">My Document</Link>
        <Link to="/profile" className="hover:text-blue-500">My Profile</Link>
      </div>
      <div className="flex gap-4">
        {/* Các icon Notification, Setting, Profile */}
        <button>🔔</button>
        <button>⚙️</button>
        <button>👤</button>
      </div>
    </nav>
  );
};
export default Navbar;