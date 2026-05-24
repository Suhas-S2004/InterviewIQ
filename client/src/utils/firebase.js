



import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interviewiq-5395c.firebaseapp.com",
  projectId: "interviewiq-5395c",
  storageBucket: "interviewiq-5395c.firebasestorage.app",
  messagingSenderId: "793667302028",
  appId: "1:793667302028:web:19dc7eb6c9d89dc72141a9"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export { auth, provider };