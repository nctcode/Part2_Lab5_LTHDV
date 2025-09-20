# 🔒 Simple Auth RESTful API

[![Node.js](https://img.shields.io/badge/Node.js-18.0-green)](https://nodejs.org/) 
[![Express](https://img.shields.io/badge/Express-4.18.2-blue)](https://expressjs.com/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-brightgreen)](https://www.mongodb.com/) 
[![License](https://img.shields.io/badge/License-MIT-orange)](LICENSE)

RESTful API đơn giản cho **đăng ký, đăng nhập, logout** người dùng, sử dụng **Node.js**, **Express**, **MongoDB**, **Mongoose** và **cookie-based session**.  
Session được lưu trong **MongoDB**, cookie giúp client dễ quản lý.

---

## 📂 Cấu trúc thư mục
```
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
├─ views/ # EJS templates (GUI)
├─ public/ # CSS / JS / Images
```
---

## ⚙️ Cài đặt

1. Clone project:

```bash
git clone https://github.com/nctcode/Part2_Lab5_LTHDV.git
cd Part2_Lab5_LTHDV

#Cài dependencies:

npm install express mongoose bcryptjs express-session cookie-parser connect-mongo body-parser ejs

#Chạy MongoDB (local):

mongodb://127.0.0.1:27017/simpleAuth


#Start server:

node server.js

Server chạy tại: http://localhost:3000

```
## 🛠️ Tech Stack

| Technology       | Purpose                                |
|-----------------|----------------------------------------|
| Node.js          | Backend runtime                        |
| Express          | Web framework                           |
| MongoDB          | Database                                |
| Mongoose         | MongoDB ODM                             |
| EJS              | Template engine                         |
| Express-Session  | Cookie-based session management         |
| Connect-Mongo    | Store sessions in MongoDB               |
| bcryptjs         | Password hashing                         |

🛠️ **API Endpoints**

**1. Register**  
`POST /api/auth/register`  

Gửi dữ liệu user mới để đăng ký. Body JSON:

```json
{
  "username": "alice",
  "password": "123456"
}
```
Response khi đăng ký thành công:

```json
{
  "message": "User registered successfully"
}
```
**2. Login**
POST /api/auth/login

Gửi username/password để đăng nhập. Cookie sessionId sẽ được gửi về client. Body JSON:

```json
{
  "username": "alice",
  "password": "123456"
}
```
Response khi đăng nhập thành công:

```json
{
  "message": "Login successful",
  "userId": "64f9d3f0b4b0e123456789ab"
}
```
**3. Dashboard (Protected)**
GET /api/dashboard

Phải login mới truy cập. Response nếu đã login:

```json
{
  "message": "Welcome to the dashboard!"
}
```
Nếu chưa login:

```json
{
  "error": "Unauthorized"
}
```
**4. Logout**
POST /api/auth/logout

Xóa session server và tất cả cookie client. Response:

```json
{
  "message": "Logged out successfully and all cookies cleared"
}
```
**Test nhanh với Postman**

Register: POST /api/auth/register → nhập username/password.

Login: POST /api/auth/login → bật Send Cookies để lưu cookie.

Dashboard: GET /api/dashboard → gửi cookie từ login.

Logout: POST /api/auth/logout → tất cả cookie bị xóa.
