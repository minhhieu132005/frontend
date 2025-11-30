import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. Gửi Token đi
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 2. Xử lý khi bị lỗi (THÊM ĐOẠN NÀY)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Nếu Backend trả về 401 (Unauthorized) hoặc 403 (Forbidden)
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.log("Token hết hạn hoặc không hợp lệ. Đang đăng xuất...");
      
      // Xóa token lỗi
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      
      // Reload lại trang để kích hoạt Auto Login trong App.jsx
      // window.location.href = '/'; 
    }
    return Promise.reject(error);
  }
);

export default api;