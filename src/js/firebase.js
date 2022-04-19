// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArNEH1mv7P9TMzqTtaGrmYi6dOQkizBU0",
  authDomain: "prueba-login-fe698.firebaseapp.com",
  projectId: "prueba-login-fe698",
  storageBucket: "prueba-login-fe698.appspot.com",
  messagingSenderId: "947632118066",
  appId: "1:947632118066:web:05783c09d6367e7ffd1f2b",
  measurementId: "G-E42PC6YD5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
