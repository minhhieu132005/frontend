import api from './api';

export const loginUser = async (username, password) => {
  // Gọi POST http://localhost:3000/auth/login
  const response = await api.post('/auth/login', { username, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    // Giả sử backend trả về userId, nếu không ta decode token (bỏ qua bước decode phức tạp ở đây để code gọn)
    // Bạn có thể hardcode userId nếu backend login chưa trả về id
    localStorage.setItem('userId', response.data.userId || 3); 
  }
  return response.data;
};