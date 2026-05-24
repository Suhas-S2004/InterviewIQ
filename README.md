# InterviewIQ — AI-Powered Interview Preparation Platform

InterviewIQ is a full-stack AI-powered mock interview platform that helps job seekers practice real interview scenarios using voice, get instant AI feedback, and track their performance with detailed analytics.

---

## Features

-  **AI-Generated Questions** — Questions generated based on your role, experience, and resume
-  **Voice Interview** — Answer questions using your microphone with speech-to-text
-  **Resume Analysis** — Upload your PDF resume and auto-fill role, skills, and projects
-  **Performance Analytics** — Detailed report with score, confidence, communication & correctness
-  **Performance Trend Chart** — Visual question-wise score breakdown
-  **Interview History** — View all past interviews and reports
-  **Credit System** — Free + paid plans via Razorpay payment integration
-  **Google Authentication** — Secure login via Firebase
-  **Download PDF Report** — Export your interview report as a professional PDF

---

##  Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| Redux Toolkit | State Management |
| React Router DOM | Navigation |
| Framer Motion | Animations |
| Recharts | Performance Charts |
| Firebase | Google Authentication |
| Axios | API Calls |
| jsPDF + AutoTable | PDF Report Generation |
| React Icons | Icons |
| React Circular Progressbar | Score Display |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | Server Framework |
| MongoDB + Mongoose | Database |
| JWT + Cookies | Authentication |
| Multer | Resume File Upload |
| PDF.js | Resume Text Extraction |
| Razorpay | Payment Gateway |
| Google Gemini AI | Question Generation & Feedback |
| Nodemon | Development Server |

---

##  Project Structure

```
InterviewIQ/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Step1SetUp.jsx        # Interview setup form
│   │   │   ├── Step2Interview.jsx    # Live interview screen
│   │   │   └── Step3Report.jsx       # Analytics report
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Landing page
│   │   │   ├── Auth.jsx              # Login page
│   │   │   └── Pricing.jsx           # Pricing plans
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   ├── utils/
│   │   │   └── firebase.js
│   │   └── App.jsx
│   └── package.json
│
└── server/                 # Node.js Backend
    ├── controllers/
    │   ├── interviewcontroller.js
    │   ├── usercontroller.js
    │   └── paymentcontroller.js
    ├── models/
    │   ├── usermodel.js
    │   ├── interviewmodel.js
    │   └── paymentmodel.js
    ├── routes/
    │   ├── userroute.js
    │   ├── interviewroute.js
    │   └── paymentroute.js
    ├── middlewares/
    │   └── isAuth.js
    ├── services/
    │   └── razorpayservice.js
    ├── index.js
    └── package.json
```

---

##  Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Razorpay Account
- Firebase Project
- OpenRouter API Key

---

### 1. Clone the Repository

```bash
git clone https://github.com/Suhas-S2004/InterviewIQ.git
cd InterviewIQ
```

---

### 2. Setup Server

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENROUTER_API_KEY=your_open_router_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLIENT_URL=http://localhost:5173
```

Start the server:

```bash
npm run dev
```

---

### 3. Setup Client

```bash
cd client
npm install
```

Create a `.env` file inside the `client` folder:

```env
VITE_SERVER_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

Start the client:

```bash
npm run dev
```

---

### 4. Open in Browser

```
http://localhost:5173
```

---

##  Pricing Plans

| Plan | Price | Credits |
|---|---|---|
| Free | ₹0 | 100 Credits |
| Starter Pack | ₹100 | 150 Credits |
| Pro Pack | ₹500 | 650 Credits |


##  Environment Variables Summary

| Variable | Where | Description |
|---|---|---|
| `MONGO_URI` | Server | MongoDB connection string |
| `JWT_SECRET` | Server | Secret key for JWT tokens |
| `GEMINI_API_KEY` | Server | Google Gemini AI key |
| `RAZORPAY_KEY_ID` | Server | Razorpay public key |
| `RAZORPAY_KEY_SECRET` | Server | Razorpay secret key |
| `VITE_SERVER_URL` | Client | Backend server URL |
| `VITE_FIREBASE_*` | Client | Firebase config values |

