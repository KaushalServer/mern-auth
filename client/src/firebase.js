// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-42c75.firebaseapp.com",
  projectId: "mern-auth-42c75",
  storageBucket: "mern-auth-42c75.appspot.com",
  messagingSenderId: "513734082374",
  appId: "1:513734082374:web:8b2bccaefc34282021ef47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);