import express from "express";
import 'dotenv/config.js';
import studentRoutes from './routers/StudentRoutes.js';
import userRoutes from './routers/UserRoutes.js';
import cors from "cors";

// Create express app
const app = express();

const corsOptions = {
    origin: process.env.ORIGIN
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Log requests (but don't end the response)
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next(); // Continue to routes
});

// Routes must come BEFORE catch-all handlers
app.use('/user', userRoutes);
app.use('/student', studentRoutes);
app.use('/book', studentRoutes);

// Optional: handle unknown routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start server
try {  
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
} catch (e) {
    console.log(e);
}


