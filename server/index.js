import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './config/connectDb.js';
import cors from 'cors';
import authRouter from './routes/authroute.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userroute.js';
import interviewRouter from './routes/interviewroute.js';
import paymentRouter from "./routes/paymentroute.js";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter );
app.use("/api/interview", interviewRouter );
app.use("/api/payment", paymentRouter );
const PORT = process.env.PORT || 6000;

// ✅ Connect DB first, then start server
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});