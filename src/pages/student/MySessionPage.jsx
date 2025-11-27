import React from 'react';
import SessionCard from '../../components/schedule/SessionCard';
// Giả sử dùng lại service lấy session
import { getUpcomingSessions } from '../../services/studentService'; 

const MySessionPage = () => {
  const [sessions, setSessions] = React.useState([]);

  React.useEffect(() => {
    getUpcomingSessions().then(data => setSessions(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Registered Sessions</h2>
      <div className="grid gap-4">
        {sessions.map(session => (
          // Tái sử dụng component SessionCard
          <SessionCard 
            key={session.id} 
            session={session} 
            onReschedule={() => {}} 
            onCancel={() => {}} 
          />
        ))}
      </div>
    </div>
  );
};
export default MySessionPage;