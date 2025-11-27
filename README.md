Markdown

# HCMUT Tutor System - Frontend

Đây là Frontend cho phân hệ **Quản lý Lịch trình Sinh viên (Student Schedule Management)** thuộc dự án HCMUT Tutor System. Dự án cung cấp giao diện cho sinh viên xem lịch học, tìm kiếm gia sư (Tutor) và quản lý các buổi học đã đăng ký.

Dự án được xây dựng dựa trên Mockup thiết kế mục **12.3.1, 12.3.2, 12.3.3** của tài liệu yêu cầu phần mềm.

---

## 🚀 Công nghệ sử dụng (Tech Stack)

* **Core:** [React](https://react.dev/) (v18+)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Routing:** [React Router DOM](https://reactrouter.com/) (v6+)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4.0)
* **Icons:** [Lucide React](https://lucide.dev/)

---

## 📋 Yêu cầu tiên quyết (Prerequisites)

Trước khi cài đặt, hãy đảm bảo máy tính của bạn đã cài đặt môi trường:

* **Node.js**: Phiên bản 18.0 trở lên (Khuyên dùng bản LTS mới nhất).
* **npm** (hoặc yarn): Công cụ quản lý gói đi kèm với Node.js.

Kiểm tra phiên bản bằng lệnh:
```bash
node -v
npm -v
🛠️ Hướng dẫn cài đặt (Installation)
Làm theo các bước sau để chạy dự án trên máy cục bộ (Localhost):

Bước 1: Clone dự án
Bash

git clone [https://github.com/your-username/hcmut-tutor-frontend.git](https://github.com/your-username/hcmut-tutor-frontend.git)
cd hcmut-tutor-frontend
Bước 2: Cài đặt các thư viện (Dependencies)
Chạy lệnh sau để tải về các gói cần thiết (react-router-dom, lucide-react, tailwindcss...):

Bash

npm install
Lưu ý quan trọng: Dự án sử dụng Tailwind CSS v4. Gói @tailwindcss/postcss là bắt buộc để hoạt động với Vite.

Bước 3: Chạy dự án
Khởi động server phát triển:

Bash

npm run dev
Truy cập vào đường dẫn hiển thị trên terminal (thường là http://localhost:5173).

⚙️ Cấu hình Tailwind CSS v4 (Lưu ý)
Nếu bạn gặp lỗi liên quan đến CSS hoặc PostCSS, hãy kiểm tra lại 2 file cấu hình quan trọng sau:

1. postcss.config.js (Ở thư mục gốc) Đảm bảo plugin được khai báo là @tailwindcss/postcss:

JavaScript

export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
2. src/index.css Đảm bảo chỉ chứa dòng import chuẩn của v4 (xóa các dòng @tailwind cũ nếu có):

CSS

@import "tailwindcss";
📂 Cấu trúc thư mục (Project Structure)
src/
├── components/          # Các thành phần UI tái sử dụng
│   ├── common/          # Navbar, Modal, Button...
│   ├── schedule/        # SessionCard, SessionItem...
│   ├── tutor/           # TutorCard...
│   └── modals/          # RescheduleModal, CancelModal, FeedbackModal...
├── pages/               # Các màn hình chính
│   └── student/
│       ├── MySchedulePage.jsx  # (12.3.1) Trang lịch trình
│       ├── FindTutorPage.jsx   # (12.3.2) Trang tìm kiếm Tutor
│       └── MySessionPage.jsx   # (12.3.3) Trang buổi học đã đăng ký
├── services/            # Giả lập dữ liệu (Mock Data)
├── utils/               # Hàm tiện ích (Format date/time)
├── App.jsx              # Cấu hình Routing
└── main.jsx             # Entry point
✨ Tính năng chính (Features)
My Schedule (12.3.1):

Xem danh sách các buổi học sắp tới.

Thao tác nhanh: Đổi lịch (Reschedule), Hủy lịch (Cancel).

Giao diện 2 cột với Sidebar "Quick Actions".

Find Tutor (12.3.2):

Tìm kiếm Tutor theo tên hoặc môn học.

Xem danh sách Tutor dưới dạng thẻ (Card).

Popup đăng ký lịch học với Tutor.

My Sessions (12.3.3):

Quản lý danh sách lớp học (Sắp tới & Đã hoàn thành).

Trạng thái buổi học (Upcoming/Completed).

Gửi phản hồi (Feedback) cho các lớp đã học xong.

🤝 Đóng góp (Contributing)
Mọi đóng góp đều được hoan nghênh. Vui lòng tạo Pull Request hoặc mở Issue nếu bạn tìm thấy lỗi.

Fork dự án

Tạo branch tính năng (git checkout -b feature/AmazingFeature)

Commit thay đổi (git commit -m 'Add some AmazingFeature')

Push lên branch (git push origin feature/AmazingFeature)

Mở Pull Request
