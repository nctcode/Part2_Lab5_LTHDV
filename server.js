const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const { isAuthenticated } = require('./middleware/authMiddleware');
const MongoStore = require('connect-mongo');

const app = express();
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Session với cookie + lưu MongoDB
app.use(session({
    name: 'sessionId', // tên cookie
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/simpleAuth',
        collectionName: 'sessions',
        ttl: 60 * 60 // 1 giờ
    }),
    cookie: {
        httpOnly: true,
        secure: false, // true nếu dùng HTTPS
        maxAge: 1000 * 60 * 60
    }
}));

// Routes
app.use('/api/auth', authRoutes);

// Protected route
app.get('/api/dashboard', isAuthenticated, (req, res) => {
    res.json({ message: 'Welcome to the dashboard!' });
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));