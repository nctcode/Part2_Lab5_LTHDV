# Simple Auth RESTful API

RESTful API đơn giản cho **đăng ký, đăng nhập, logout** người dùng, dùng **Node.js**, **Express**, **MongoDB**, **Mongoose** và **cookie-based session**.  
Session lưu trong **MongoDB** và **cookie** để dễ quản lý.

---
**Cấu trúc thư mục**
├─ server.js # Entry point
├─ package.json
├─ config/
│ └─ db.js # MongoDB connection
├─ models/
│ └─ User.js # User schema
├─ routes/
│ └─ auth.js # Register, login, logout
├─ middleware/
│ └─ authMiddleware.js # Protect routes

## Cài đặt

1. Clone project:

```bash
git clone https://github.com/nctcode/Part2_Lab5_LTHDV.git
cd Part2_Lab5_LTHDV

**Cài dependencies:**

npm install express mongoose bcryptjs express-session cookie-parser connect-mongo body-parser



Chạy MongoDB tại mongodb://127.0.0.1:27017/simpleAuth
**Start server:
**
node server.js


Server: http://localhost:3000

**API endpoints**
**1. Register**
POST /api/auth/register


Body JSON

{ "username": "alice", "password": "123456" }


Response

{ "message": "User registered successfully" }

**2. Login**
POST /api/auth/login


Body JSON

{ "username": "alice", "password": "123456" }


Cookie sessionId sẽ được gửi về client.

**3. Dashboard (Protected)**
GET /api/dashboard


Phải login (gửi cookie sessionId) mới truy cập.

Response

{ "message": "Welcome to the dashboard!" }


Nếu chưa login

{ "error": "Unauthorized" }

**4. Logout**
POST /api/auth/logout


Xóa session server và tất cả cookie client.

Response

{ "message": "Logged out successfully and all cookies cleared" }

**Test nhanh với Postman**

Register: POST /api/auth/register → nhập username/password.

Login: POST /api/auth/login → bật Send Cookies để lưu cookie.

Dashboard: GET /api/dashboard → gửi cookie từ login.

Logout: POST /api/auth/logout → tất cả cookie bị xóa.
